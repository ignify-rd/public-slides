#!/usr/bin/env node
// Generate docs/index.html listing all slide decks as a card grid.

const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const SLIDES_DIR = path.join(REPO, 'slides');
const OUT_FILE = path.join(REPO, 'docs', 'index.html');

function toTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Stable color palette for thumbnail backgrounds (light theme)
const COLORS = [
  ['#4F46E5', '#7C3AED'], // indigo -> violet
  ['#0EA5E9', '#2563EB'], // sky -> blue
  ['#10B981', '#059669'], // emerald -> green
  ['#F59E0B', '#D97706'], // amber -> orange
  ['#EF4444', '#DC2626'], // red
  ['#8B5CF6', '#6D28D9'], // violet -> purple
  ['#14B8A6', '#0D9488'], // teal
  ['#F97316', '#EA580C'], // orange
  ['#EC4899', '#DB2777'], // pink
  ['#6366F1', '#4338CA'], // indigo
];

function colorFor(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0xffffffff;
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

function buildCard(slug) {
  const title = toTitle(slug);
  const [c1, c2] = colorFor(slug);
  const href = `/public-slides/${slug}/`;
  return `
    <a class="card" href="${href}" aria-label="${title}">
      <div class="thumb" style="background: linear-gradient(135deg, ${c1} 0%, ${c2} 100%);">
        <span class="thumb-text">${slug}</span>
      </div>
      <div class="card-body">
        <p class="card-title">${title}</p>
      </div>
    </a>`;
}

function generate() {
  const slugs = fs
    .readdirSync(SLIDES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const cards = slugs.map(buildCard).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ignify RD - Slide Decks</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      min-height: 100vh;
      padding: 0 0 48px;
    }

    header {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 20px 32px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    header h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: -0.01em;
    }

    header .badge {
      font-size: 0.75rem;
      font-weight: 600;
      background: #ede9fe;
      color: #6d28d9;
      border-radius: 9999px;
      padding: 2px 10px;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px 0;
    }

    .section-title {
      font-size: 0.8125rem;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    @media (max-width: 1024px) {
      .grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 700px) {
      .grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    }
    @media (max-width: 400px) {
      .grid { grid-template-columns: 1fr; }
    }

    .card {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.12);
      border-color: #c7d2fe;
    }

    .thumb {
      width: 100%;
      aspect-ratio: 16 / 9;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }

    .thumb-text {
      font-size: 0.6875rem;
      font-weight: 700;
      color: rgba(255,255,255,0.85);
      text-align: center;
      word-break: break-word;
      letter-spacing: 0.02em;
      line-height: 1.5;
      text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .card-body {
      padding: 12px 14px 14px;
    }

    .card-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #0f172a;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <header>
    <h1>Ignify RD Slides</h1>
    <span class="badge">${slugs.length} decks</span>
  </header>
  <main>
    <p class="section-title">All Slide Decks</p>
    <div class="grid">
      ${cards}
    </div>
  </main>
</body>
</html>
`;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, html, 'utf8');
  console.log(`Generated ${OUT_FILE} with ${slugs.length} decks.`);
}

generate();
