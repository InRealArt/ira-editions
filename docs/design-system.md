# In Real Art — Design System

> Style **galerie d'art contemporaine haut de gamme** : épuré, luxueux, minimaliste.
> Inspiré des galeries parisiennes — espace généreux, typographie élégante, palette neutre avec accent or.

---

## Polices (Google Fonts)

| Rôle | Police | Poids | Usage |
|------|--------|-------|-------|
| Titres H1–H6 | **Cormorant Garamond** | 300 light | Serif élégant, parfois italique |
| Sous-titres / display | **Unbounded** | variable | Géométrique moderne, caps |
| Corps de texte | **Montserrat** | 300 light | Sans-serif fin et aéré |
| Hero / accentuation | **Bricolage Grotesque** | 700 | Gras pour les hero titles uniquement |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Unbounded:wght@300;400;700&family=Montserrat:wght@300;400&family=Bricolage+Grotesque:wght@400;700&display=swap" rel="stylesheet">
```

---

## Palette de couleurs

### Mode sombre (défaut)

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--background` | `#131313` | Fond principal — noir profond |
| `--card` | `#1d1c1c` | Fond des cartes |
| `--text` | `#ffffff` | Texte principal |
| `--gray-text` | `#9ca3af` | Texte secondaire |
| `--border-color` | `rgba(255,255,255,0.1)` | Bordures subtiles |
| `--purple` | `#6052ff` | Accent CTA / liens actifs |
| `--gold-accent` | `#b89c72` | Or satiné — accent prestige |
| `--soft-gray` | `#1f1f1f` | Zones légèrement contrastées |
| `--border-light` | `#2a2a2a` | Séparateurs |
| `--ink-black` | `#ffffff` | Couleur d'encre (inversée en dark) |

### Mode clair

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--background` | `#ffffff` | Fond principal |
| `--card` | `#fbfbfb` | Fond des cartes |
| `--text` | `#000000` | Texte principal |
| `--gray-text` | `#666666` | Texte secondaire |
| `--border-color` | `#eeeeee` | Bordures |
| `--purple` | `#6052ff` | Identique aux deux thèmes |
| `--gold-accent` | `#b89c72` | Identique aux deux thèmes |
| `--soft-gray` | `#f8f8f8` | Zones légèrement contrastées |
| `--border-light` | `#eeeeee` | Séparateurs |
| `--ink-black` | `#000000` | Couleur d'encre |

---

## CSS complet

```css
/* =============================================
   IN REAL ART — Design System
   Galerie d'art contemporaine, style luxe épuré
   ============================================= */

/* --- FONTS --- */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Unbounded:wght@300;400;700&family=Montserrat:wght@300;400&family=Bricolage+Grotesque:wght@400;700&display=swap');

/* --- VARIABLES --- */
:root {
  /* Couleurs */
  --background:      #131313;
  --card:            #1d1c1c;
  --text:            #ffffff;
  --gray-text:       #9ca3af;
  --border-color:    rgba(255, 255, 255, 0.1);
  --shadow-color:    rgba(255, 255, 255, 0.08);
  --purple:          #6052ff;
  --gold-accent:     #b89c72;
  --soft-gray:       #1f1f1f;
  --border-light:    #2a2a2a;
  --background-grey: #1a1a1a;
  --ink-black:       #ffffff;
  --gradient-from:   #111827;
  --gradient-to:     #1f2937;

  /* Typographie */
  --font-heading:    'Cormorant Garamond', serif;
  --font-display:    'Unbounded', sans-serif;
  --font-body:       'Montserrat', sans-serif;
  --font-hero:       'Bricolage Grotesque', serif;
}

[data-theme='light'] {
  --background:      #ffffff;
  --card:            #fbfbfb;
  --text:            #000000;
  --gray-text:       #666666;
  --border-color:    #eeeeee;
  --shadow-color:    rgba(0, 0, 0, 0.08);
  --soft-gray:       #f8f8f8;
  --border-light:    #eeeeee;
  --background-grey: #fbfbfb;
  --ink-black:       #000000;
  --gradient-from:   #f8f8f8;
  --gradient-to:     #eeeeee;
}

/* --- RESET & BASE --- */
*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  background-color: var(--background);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* --- TYPOGRAPHIE --- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

p, span, li {
  font-family: var(--font-body);
  font-weight: 300;
}

.serif-italic {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 300;
}

.display {
  font-family: var(--font-display);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.65rem;
}

/* --- COMPOSANTS --- */

/* Bouton CTA galerie */
.btn-cta {
  padding: 0.9rem 1.8rem;
  border: 1px solid var(--ink-black);
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  display: inline-block;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-decoration: none;
}
.btn-cta:hover {
  background: var(--ink-black);
  color: var(--background);
}

/* Bouton accent violet */
.btn-primary {
  background: #6052ff;
  color: #ffffff;
  border: none;
  padding: 0.9rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.btn-primary:hover { opacity: 0.85; }

/* Numéro de section (style galerie) */
.section-number {
  font-size: 0.6rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #aaa;
  margin-bottom: 1.5rem;
  display: block;
}

/* Carte */
.card {
  background: var(--card);
  border: 1px solid var(--border-color);
  padding: 2rem;
}

/* Accent or */
.text-gold  { color: #b89c72; }
.border-gold { border-color: #b89c72; }

/* Image artwork : zoom au hover */
.artwork-container { overflow: hidden; }
.artwork-container img {
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.artwork-container:hover img { transform: scale(1.03); }

/* Animations d'entrée */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fade-right {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.animate-fade-up    { animation: fade-up    0.8s ease-out 0.2s  both; }
.animate-fade-up-d  { animation: fade-up    0.8s ease-out 0.38s both; }
.animate-fade-right { animation: fade-right 0.9s ease-out 0.38s both; }
```

---

## Règles de design

### Espacement
- Sections : `padding-top` et `padding-bottom` de **4rem à 8rem**
- Généreux, jamais étouffant — l'espace blanc est un élément de design à part entière

### Typographie
- Poids **300 (light)** par défaut sur tous les corps de texte
- **700 (bold)** réservé aux hero titles uniquement
- Labels, catégories, numéros de section : `letter-spacing: 0.3em–0.5em` + `text-transform: uppercase`

### Formes & bordures
- **Pas de border-radius** (ou très subtil ≤ 2px) sur les éléments galerie — lignes droites et nettes
- Bordures fines `1px solid` uniquement

### Images
- Grayscale par défaut, couleur au hover : `filter: grayscale(1)` → `grayscale(0)`
- Zoom lent au hover : `scale(1.03)` en `1.2s cubic-bezier(0.16, 1, 0.3, 1)`

### Transitions
- **Lentes** : `0.5s à 1.2s` avec easing cubique (`cubic-bezier(0.19, 1, 0.22, 1)`)
- Donnent un sentiment de luxe et de fluidité

### Utilisation des couleurs d'accent
- **Or `#b89c72`** — avec parcimonie : bordures, hovers, éléments prestige uniquement
- **Violet `#6052ff`** — réservé aux CTA principaux et éléments interactifs clés
