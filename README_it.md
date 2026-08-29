# Porcelain

[English](README.md) · [中文](README_zh.md) · **Italiano** · [日本語](README_ja.md) · [한국어](README_ko.md) · [Français](README_fr.md) · [Español](README_es.md)

Un tema Obsidian di porcellana bianca — superfici traslucide, accenti blu, controlli piatti e separatori che sfumano alle due estremità.

Scritto da zero sulle variabili CSS native di Obsidian. Non è un fork e non contiene codice di temi di terze parti.

## Regole di design

Il tema segue cinque regole e ogni dichiarazione in `theme.css` discende da una di esse:

1. **Le superfici sono traslucide e condividono una stessa tinta.** I pannelli non sono schede opache. Il vetro è un singolo livello fisso e vuoto — applicare `backdrop-filter` a un contenitore che ospita l'interfaccia fa sì che ogni ridisegno di un figlio invalidi l'intero livello filtrato, quindi passare il mouse su un elenco di file costa un ricalcolo completo della sfocatura della finestra.
2. **Niente è in rilievo.** La profondità viene da un solo contorno da 1 px. Niente evidenziazioni interne sovrapposte, bordi interni scuri o ombre portate.
3. **I separatori sfumano a entrambe le estremità.** Un bordo copre esattamente il suo elemento, quindi contenitori fratelli con padding diversi producono linee che iniziano e finiscono a offset diversi. Un gradiente con estremità trasparenti non ha alcun punto finale da disallineare.
4. **I blocchi colorati portano un bagliore fuori asse.** Tre gradienti radiali con fuochi, dimensioni e decadimenti diversi — nessuna direzione lineare traspare.
5. **I cambi di stato alterano solo il colore.** Mai il padding, lo spessore del bordo o la posizione, così nulla si sposta sotto il cursore.

## Installazione

1. Scarica `manifest.json` e `theme.css`.
2. Mettili entrambi in `<vault>/.obsidian/themes/Porcelain/`.
3. *Impostazioni → Aspetto → Temi* → **Porcelain**.

### Consigliato

- *Aspetto → Finestra traslucida*: **attivo**. Le superfici sono traslucide per design; disattivato, vengono renderizzate come colore piatto.

## Personalizzazione

I token sono dichiarati all'inizio di `theme.css`, sotto `.theme-light` / `.theme-dark` e `body`. Quelli che vale la pena conoscere:

| Variabile | Controlla |
| --- | --- |
| `--pc-tint` / `--pc-veil` | Colore di base della superficie (tripla RGB) e copertura |
| `--pc-sidebar-tint` / `--pc-sidebar-veil` | Quanto le barre laterali si discostano dal piano del contenuto |
| `--pc-line` | Colore di separatori e contorni |
| `--pc-blue` / `--pc-orange` | Riempimenti di selezione e hover |
| `--pc-bloom-light` / `--pc-bloom-dark` | Intensità del gradiente di bagliore sui blocchi colorati |
| `--pc-fade-in` / `--pc-fade-out` | Dove i separatori iniziano e smettono di sfumare |
| `--pc-popup-bg` / `--pc-popup-blur` | Vetro di menu, modali e impostazioni |

Sostituiscili in uno snippet CSS invece di modificare `theme.css`, così gli aggiornamenti non sovrascriveranno le tue modifiche.

## Supporto plugin

- **Notebook Navigator** — stati di selezione e hover, pulsanti di azione rapida e layout dell'intestazione sono allineati al tema.

## Licenza

GPL-3.0. Vedi [LICENSE](LICENSE).

Puoi usarlo, modificarlo e ridistribuirlo, anche a scopo commerciale. Se distribuisci una versione modificata, deve restare sotto GPL-3.0, includere il suo codice sorgente e dichiarare che è stata modificata.
