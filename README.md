# Murks Verlag Website

GitHub-Pages-fertige Website für `www.murks-verlag.de`.

## Dateien

- `index.html`
- `style.css`

## So veröffentlichst du sie kostenlos auf GitHub Pages

1. Neues Repository bei GitHub erstellen, z. B. `murks-verlag`.
2. `index.html` und `style.css` hochladen.
3. In GitHub auf `Settings` → `Pages`.
4. Bei `Build and deployment` → `Deploy from a branch` wählen.
5. Branch `main`, Ordner `/root` auswählen.
6. Speichern.

## Eigene Domain verbinden

Im Repository eine Datei namens `CNAME` erstellen mit:

```txt
www.murks-verlag.de
```

Dann beim Domain-Anbieter die DNS-Einträge für GitHub Pages setzen.

## Downloadlinks später eintragen

In `index.html` diese Stellen ersetzen:

```html
<a class="button disabled" href="#" aria-disabled="true">Download folgt</a>
```

durch z. B.:

```html
<a class="button" href="DEIN-LINK-ZUR-DATEI.pdf">Download</a>
```
