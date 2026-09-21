# woosun.github.io

Personal GitHub Pages site for **woosun**.

## Stack

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages
- GitHub Stats Extended

## Local preview

Any static HTTP server works.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```text
.
├── index.html
├── assets/
│   ├── style.css
│   └── script.js
└── _config.yml
```

The site intentionally avoids a frontend build pipeline so that maintenance and deployment stay simple.
