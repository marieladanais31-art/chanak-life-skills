import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ES_EN_DYNAMIC } from './i18n_en.js';

test('el diccionario inglés de la app tiene más de 600 textos y ninguno vacío', () => {
  const k = Object.keys(ES_EN_DYNAMIC);
  assert.ok(k.length > 600, `${k.length}`);
  for (const key of k) assert.ok(String(ES_EN_DYNAMIC[key]).trim().length > 0, key);
});
test('el inglés es el idioma principal: estado inicial, html, selector EN | ES y ficha imprimible', () => {
  const app = readFileSync(new URL('./app.js', import.meta.url), 'utf8');
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  assert.match(app, /lang: 'en', \/\/ el inglés es el idioma principal/);
  assert.match(app, /: \(saved === 'es' \|\| saved === 'en' \? saved : 'en'\)/);
  assert.match(html, /<html lang="en" translate="no">/);
  assert.ok(html.indexOf('id="btn-lang-en"') < html.indexOf('id="btn-lang-es"'), 'EN debe ir antes que ES');
  assert.match(html, /id="btn-lang-en" class="active"/);
  assert.match(app, /Private School Registration FLDOE #134620/);
  assert.match(app, /Evidence Link \(Google Drive \/ Video\)/);
});
