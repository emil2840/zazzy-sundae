# Emils Kogebog — Projektregler

## Sprog
Skriv **ALTID på dansk**. Uanset om brugeren skriver på dansk eller engelsk, skal al output til dette projekt være på dansk. Dette gælder opskrifter, beskrivelser, noter, tags og alt andet indhold på siden.

## Opskriftsformat
Nye opskrifter gemmes som Markdown-filer i `src/recipes/<slug>.md`.

```markdown
---
layout: recipe.njk
title: [Titel]
date: YYYY-MM-DD
description: [Kort beskrivelse på dansk, 1-2 sætninger]
servings: [antal]
prepTime: [minutter]
cookTime: [minutter]
tags:
  - [kategori, fx pasta, fisk, kød, fransk]
ingredients:
  - [ingrediens med mængde]
image: [filnavn.jpg]   # valgfri — udelad linjen hvis ingen billede
---

## Fremgangsmåde

1. [Trin 1]
2. [Trin 2]

## Noter

- [Tips og variationer]
```

## Billeder
- Billeder gemmes i `src/images/`
- Referér til billedet med blot filnavnet i `image:`-feltet, fx `image: pasta-alla-monte-carlo.jpg`
- Understøttede formater: jpg, jpeg, png, webp

## GitHub-repo
Repoen hedder `emil2840/zazzy-sundae`. Opskriftsfiler ligge i `src/recipes/`, billeder i `src/images/`.
