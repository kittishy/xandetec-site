import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcDir = path.join(root, 'src');

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (/\.(tsx|ts|jsx|js|mjs)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const allSrcFiles = getAllFiles(srcDir);
const allSrcContent = allSrcFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
const pagePath = path.join(srcDir, 'app', 'page.tsx');
const layoutPath = path.join(srcDir, 'app', 'layout.tsx');

test('commercial page exists and composes all sections', () => {
  assert.ok(fs.existsSync(pagePath), 'src/app/page.tsx must exist');
  const page = fs.readFileSync(pagePath, 'utf8');
  assert.match(page, /<Header\s*\/>/);
  assert.match(page, /<Hero\s*\/>/);
  assert.match(page, /<Services\s*\/>/);
  assert.match(page, /<About\s*\/>/);
  assert.match(page, /<Gallery\s*\/>/);
  assert.match(page, /<Brands\s*\/>/);
  assert.match(page, /<Process\s*\/>/);
  assert.match(page, /<Faq\s*\/>/);
  assert.match(page, /<CallToAction\s*\/>/);
  assert.match(page, /<SiteFooter\s*\/>/);
});

test('page preserves verified XandeTEC identity, phone and Instagram', () => {
  assert.match(allSrcContent, /XandeTEC/);
  assert.match(allSrcContent, /5547999412086/);
  assert.match(allSrcContent, /\(47\)\s*99941-2086/);
  assert.match(allSrcContent, /instagram\.com\/xandetecsolucoes/);
  assert.match(allSrcContent, /Jaraguá do Sul/);
});

test('images used are local official files and free from remote stock banks', () => {
  assert.match(allSrcContent, /higienizacao-ar-condicionado\.jpg/);
  assert.match(allSrcContent, /equipamentos-intelbras\.webp/);
  assert.match(allSrcContent, /logo-xandetec/);
  assert.doesNotMatch(allSrcContent, /images\.unsplash\.com|source\.unsplash|pexels\.com|loremflickr|pixabay/i);
});

test('layout carries noindex preview metadata', () => {
  const layout = fs.readFileSync(layoutPath, 'utf8');
  assert.match(layout, /index:\s*false/);
  assert.match(layout, /follow:\s*false/);
});

test('no invented address or credentials are published', () => {
  // Must not invent street address or unverifiable certifications
  assert.doesNotMatch(allSrcContent, /Rua João Planincheck/i);
  assert.doesNotMatch(allSrcContent, /CEP\s*89252/i);
  assert.doesNotMatch(allSrcContent, /CREA-SC/i);
  assert.doesNotMatch(allSrcContent, /especialistas certificados/i);
  assert.doesNotMatch(allSrcContent, /atendimento imediato/i);
});

test('no placeholders, lorem ipsum or test stubs remain in UI files', () => {
  assert.doesNotMatch(allSrcContent, /lorem ipsum/i);
  assert.doesNotMatch(allSrcContent, /placeholder/i);
  assert.doesNotMatch(allSrcContent, /commercial page has not been created/i);
});

test('interactive CTAs point to WhatsApp or valid in-page anchors', () => {
  const validAnchors = ['#inicio', '#frentes', '#sobre', '#registros', '#como-funciona', '#duvidas', '#contato'];
  const anchorRegex = /href="(#[a-z0-9-]+)"/g;
  let match;
  while ((match = anchorRegex.exec(allSrcContent)) !== null) {
    assert.ok(
      validAnchors.includes(match[1]),
      `Anchor ${match[1]} must be one of the known section IDs: ${validAnchors.join(', ')}`,
    );
  }
});

test('telephone links are correctly formatted and do not duplicate country code', () => {
  assert.match(allSrcContent, /tel:\+5547999412086/);
  assert.doesNotMatch(allSrcContent, /tel:\+5555/);
});

test('unsubstantiated claims and internal meta-labels are removed from public UI', () => {
  assert.doesNotMatch(allSrcContent, /manutenção autorizada/i);
  assert.doesNotMatch(allSrcContent, /equipamentos calibrados/i);
  assert.doesNotMatch(allSrcContent, /projetos de qualquer escala/i);
  assert.doesNotMatch(allSrcContent, /REGISTRO REAL/);
  assert.doesNotMatch(allSrcContent, /sem fotos genéricas/i);
  assert.doesNotMatch(allSrcContent, /conteúdo verificado no material oficial/i);
});

test('gallery items and CSS prevent mobile horizontal overflow', () => {
  const cssPath = path.join(srcDir, 'app', 'globals.css');
  const css = fs.readFileSync(cssPath, 'utf8');
  assert.match(css, /grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  assert.match(css, /\.gitem\s*\{[^}]*min-width:\s*0/s);
});
