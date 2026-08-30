const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

async function main() {
  const theme = process.argv[2] === '-'
    ? fs.readFileSync(0, 'utf8')
    : fs.readFileSync(path.join(__dirname, '..', 'theme.css'), 'utf8');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  try {
    const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
    await page.setContent(`
      <style>
        :root {
          --pc-orange: #ff5d24;
          --pc-yellow: #f9c91b;
          --pc-green: #30a46c;
          --pc-blue: #1992ea;
          --pc-solid: #ffffff;
          --pc-tint: 255, 255, 255;
          --pc-veil: 0.62;
          --pc-on-color: white;
          --pc-yellow-text: #1a1a1a;
          --pc-bloom-light: 34%;
          --pc-bloom-light-soft: 16%;
          --pc-bloom-dark: 10%;
          --pc-radius: 8px;
          --nav-item-padding: 5px 8px;
        }
      </style>
      <style>${theme}</style>
      <div class="app-container" id="app">
        <div class="workspace-leaf-content" data-type="vault-dashboard-x-view"></div>
        <div class="nav-files-container">
          <div class="nav-file-title tree-item-self is-clickable" id="file-row">
            <span class="tree-item-inner">A note</span>
          </div>
          <div class="nav-folder-title tree-item-self is-clickable is-selected" id="folder-row">
            <span class="tree-item-inner">A folder</span>
          </div>
        </div>
      </div>
    `);

    const appPaint = await page.locator('#app').evaluate((element) => {
      const background = getComputedStyle(element).backgroundColor;
      const match = background.match(/[\d.]+/g)?.map(Number) ?? [];
      return {
        background,
        alpha: match.length === 4 ? match[3] : 1,
        veilDisplay: getComputedStyle(element, '::before').display,
      };
    });

    assert.equal(appPaint.alpha, 1, 'Dashboard must render over an opaque damage-clearing surface');
    assert.notEqual(appPaint.background, 'rgba(0, 0, 0, 0)', 'Dashboard damage-clearing surface is transparent');
    assert.equal(appPaint.veilDisplay, 'none', 'Dashboard still paints the stale fixed veil');

    for (const selector of ['#file-row', '#folder-row']) {
      await page.hover(selector);
      const style = await page.locator(selector).evaluate((element) => {
        const computed = getComputedStyle(element);
        return {
          backgroundColor: computed.backgroundColor,
          backgroundImage: computed.backgroundImage,
          filter: computed.filter,
          backdropFilter: computed.backdropFilter,
        };
      });

      assert.notEqual(style.backgroundColor, 'rgba(0, 0, 0, 0)', `${selector} lost its hover fill`);
      assert.match(style.backgroundImage, /radial-gradient/, `${selector} lost its bloom hover strip`);
      assert.equal(style.filter, 'none', `${selector} introduced a transient filter layer`);
      assert.equal(style.backdropFilter, 'none', `${selector} introduced a transient backdrop layer`);
    }

    await page.locator('[data-type="vault-dashboard-x-view"]').evaluate((element) => element.remove());
    const normalAppBackground = await page.locator('#app').evaluate(
      (element) => getComputedStyle(element).backgroundColor,
    );
    assert.equal(
      normalAppBackground,
      'rgba(0, 0, 0, 0)',
      'Opaque damage-clearing surface leaked into normal non-dashboard views',
    );

    process.stdout.write('PASS dashboard clears old frames and sidebar hover keeps its bloom strip\n');
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
