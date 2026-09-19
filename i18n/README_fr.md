# Porcelain

<table>
  <tr>
    <td><img src="screenshot-light.png" alt="Porcelain — light mode"></td>
    <td><img src="screenshot-dark.png" alt="Porcelain — dark mode"></td>
  </tr>
</table>

[English](../README.md) · [中文](README_zh.md) · **Français** · [日本語](README_ja.md) · [한국어](README_ko.md) · [Español](README_es.md) · [Italiano](README_it.md)

Un thème Obsidian à la porcelaine blanche — surfaces translucides, accents bleus, contrôles plats et séparateurs qui s'estompent à leurs deux extrémités.

Écrit de zéro à partir des variables CSS d'Obsidian. Ce n'est pas un fork et il ne contient aucun code de thème tiers.

## Règles de conception

Le thème suit cinq règles, et chaque déclaration de `theme.css` découle de l'une d'elles :

1. **Les surfaces sont translucides et partagent une même teinte.** Les panneaux ne sont pas des cartes opaques. Le verre est une couche unique, fixe et vide — appliquer `backdrop-filter` sur un conteneur qui héberge l'interface fait que chaque redessin d'un enfant invalide toute la couche filtrée, donc survoler une liste de fichiers coûte un recalcul complet du flou de la fenêtre.
2. **Aucun effet d'estampage.** La profondeur vient d'un seul contour de 1 px. Pas d'ombres internes empilées, de bords internes sombres ni d'ombres portées.
3. **Les séparateurs s'estompent à leurs deux extrémités.** Une bordure couvre exactement son élément, donc des conteneurs voisins avec des paddings différents produisent des lignes qui commencent et s'arrêtent à des décalages différents. Un dégradé aux extrémités transparentes n'a aucun point d'extrémité à désaligner.
4. **Les blocs colorés portent un halo hors axe.** Trois dégradés radiaux avec des foyers, des tailles et des chutes différentes — aucune direction linéaire ne transparaît.
5. **Les changements d'état n'altèrent que la couleur.** Jamais le padding, la largeur de bordure ou la position, donc rien ne bouge sous le curseur.

## Installation

1. Téléchargez `manifest.json` et `theme.css`.
2. Placez les deux dans `<vault>/.obsidian/themes/Porcelain/`.
3. *Paramètres → Apparence → Thèmes* → **Porcelain**.

### Recommandé

- *Apparence → Fenêtre translucide* : **activé**. Les surfaces sont translucides par conception ; désactivé, elles s'affichent en couleur plate.

## Personnalisation

Les tokens sont déclarés en haut de `theme.css`, sous `.theme-light` / `.theme-dark` et `body`. Ceux qu'il vaut la peine de connaître :

| Variable | Contrôle |
| --- | --- |
| `--pc-tint` / `--pc-veil` | Couleur de base de la surface (triplet RGB) et couverture |
| `--pc-sidebar-tint` / `--pc-sidebar-veil` | À quel point les barres latérales s'écartent du plan du contenu |
| `--pc-line` | Couleur des séparateurs et des contours |
| `--pc-blue` / `--pc-orange` | Remplissages de sélection et de survol |
| `--pc-bloom-light` / `--pc-bloom-dark` | Intensité du dégradé de halo sur les blocs colorés |
| `--pc-fade-in` / `--pc-fade-out` | Où les séparateurs commencent et arrêtent de s'estomper |
| `--pc-popup-bg` / `--pc-popup-blur` | Verre des menus, modales et paramètres |

Remplacez-les dans un extrait CSS plutôt que de modifier `theme.css`, pour que les mises à jour n'écrasent pas vos changements.

## Support des plugins

- **Notebook Navigator** — états de sélection et de survol, boutons d'action rapide et disposition de l'en-tête sont alignés sur le thème.

## Licence

GPL-3.0. Voir [LICENSE](LICENSE).

Vous pouvez l'utiliser, le modifier et le redistribuer, y compris à des fins commerciales. Si vous distribuez une version modifiée, elle doit rester sous GPL-3.0, fournir son code source et indiquer qu'elle a été modifiée.
