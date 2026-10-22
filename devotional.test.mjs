import test from 'node:test';
import assert from 'node:assert/strict';
import { DEVOTIONAL_WEEKS, DEVOTIONAL_MONTHS } from './devotional.js';
import { AGENDA_2026_2027 as A } from './agenda.js';

test('devocional de las 42 semanas en español e inglés, con porción, versículos, aplicación y oración', () => {
  assert.equal(Object.keys(DEVOTIONAL_WEEKS).length, 42);
  for (const w of A) {
    const d = DEVOTIONAL_WEEKS[w.week]; assert.ok(d, `semana ${w.week}`);
    for (const l of ['es', 'en']) for (const k of ['portion', 'support', 'definition', 'devotional', 'application', 'prayer']) assert.ok(String(d[l][k]).trim().length > 3, `${w.week} ${l} ${k}`);
    assert.match(d.en.prayer, /Amen\.?$/); assert.match(d.es.prayer, /Amén\.?$/);
    assert.equal(d.es.questions.length, d.en.questions.length);
  }
});
test('ficha bíblica de los 10 meses del curso con libro, autor, contexto y preguntas', () => {
  const meses = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  assert.deepEqual(Object.keys(DEVOTIONAL_MONTHS), meses);
  for (const m of meses) for (const l of ['es', 'en']) {
    const f = DEVOTIONAL_MONTHS[m][l];
    for (const k of ['passage', 'book', 'author', 'genre', 'characters', 'context', 'reveals', 'application', 'theme', 'focus']) assert.ok(String(f[k]).trim().length > 2, `${m} ${l} ${k}`);
    assert.ok(f.keywords.length >= 4 && f.questions.length === 3, `${m} ${l}`);
  }
  for (const w of A) assert.ok(DEVOTIONAL_MONTHS[w.month], `mes ${w.month} de la semana ${w.week}`);
});
