import test from 'node:test';
import assert from 'node:assert';
import { JUNIOR_CAPSULES, JUNIOR_THEMES, tramoForGrade, localizeCapsule } from './junior_capsules.js';
import { lifeSkillsGuideUrl } from './guides.js';
test('22 cápsulas: 11 temas × 2 tramos, completas y bilingües', () => {
  assert.equal(JUNIOR_THEMES.length, 11); assert.equal(JUNIOR_CAPSULES.length, 22);
  for (const t of JUNIOR_THEMES) for (const tr of ['4-5', '6-7']) assert.ok(JUNIOR_CAPSULES.find((c) => c.theme === t.id && c.tramo === tr), `${t.id} ${tr}`);
  for (const c of JUNIOR_CAPSULES) {
    assert.ok(c.steps.length >= 3 && c.deliverables.length >= 3 && c.check.options.length >= 2);
    assert.ok(c.check.answer >= 0 && c.check.answer < c.check.options.length);
    const en = localizeCapsule(c, true); assert.notEqual(en.title, c.title, c.id); assert.equal(en.steps.length, c.steps.length, c.id); assert.equal(en.deliverables.length, c.deliverables.length, c.id);
  }
});
test('tramos y guías PDF por grado', () => {
  assert.equal(tramoForGrade(4), '4-5'); assert.equal(tramoForGrade(7), '6-7'); assert.equal(tramoForGrade(3), null);
  for (let g = 1; g <= 12; g++) assert.match(lifeSkillsGuideUrl(g), /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view$/);
  assert.equal(lifeSkillsGuideUrl(13), null);
});
import { JUNIOR_CAPSULE_EXTRA } from './junior_capsules_extra.js';
import { CAPSULE_CLUSTERS, JUNIOR_THEME_CLUSTERS, TRACK_CLUSTERS } from './capsule_clusters.js';
import { CAPSULES_DATA, JUNIORS_RETOS } from './data.js';
test('4 pasos: caso real y evidencia en las 22 cápsulas, ES/EN', () => {
  for (const c of JUNIOR_CAPSULES) {
    const x = JUNIOR_CAPSULE_EXTRA[c.id]; assert.ok(x, c.id);
    for (const l of ['es', 'en']) { assert.ok(x.caso[l].split(/\s+/).length >= 60, c.id + l); assert.ok(x.evidencia[l].length > 20, c.id + l); }
    assert.ok(JUNIOR_THEME_CLUSTERS[c.theme]?.length, 'cluster ' + c.theme);
  }
});
test('clústeres: toda cápsula y reto de data.js está mapeado (data.js intacto)', () => {
  for (const k of Object.keys(CAPSULES_DATA)) assert.ok(CAPSULE_CLUSTERS[k]?.every((n) => n >= 1 && n <= 4), k);
  for (const r of JUNIORS_RETOS) assert.ok(TRACK_CLUSTERS[r.track], r.track);
  assert.deepEqual(CAPSULE_CLUSTERS.padreRico, [1, 4]); assert.deepEqual(CAPSULE_CLUSTERS.saludEmocional, [1]); assert.deepEqual(CAPSULE_CLUSTERS.empatia ?? JUNIOR_THEME_CLUSTERS.empatia, [3]);
});

import { JUNIOR_CAPSULES_G } from './junior_capsules_grade.js';
test('44 cápsulas por grado exacto: 11 temas × grados 4-7, ES/EN, 4 pasos', () => {
  assert.equal(JUNIOR_CAPSULES_G.length, 44);
  for (const g of [4, 5, 6, 7]) for (const t of JUNIOR_THEMES) { const c = JUNIOR_CAPSULES_G.find((x) => x.grade === g && x.theme === t.id); assert.ok(c, `${t.id} g${g}`); assert.equal(c.id, `${t.id}-g${g}`); assert.ok(c.caso.es && c.caso.en && c.evidencia.es && c.evidencia.en && c.en.title && c.en.steps.length === 3, c.id); assert.ok(JUNIOR_THEME_CLUSTERS[t.id]); }
  const ids = new Set(JUNIOR_CAPSULES_G.map((c) => c.id)); assert.equal(ids.size, 44);
  // 4.º y 5.º (y 6.º y 7.º) no son copias: el texto cambia
  for (const t of JUNIOR_THEMES) { assert.notEqual(JUNIOR_CAPSULES_G.find((x) => x.grade === 4 && x.theme === t.id).caso.es, JUNIOR_CAPSULES_G.find((x) => x.grade === 5 && x.theme === t.id).caso.es); assert.notEqual(JUNIOR_CAPSULES_G.find((x) => x.grade === 6 && x.theme === t.id).caso.es, JUNIOR_CAPSULES_G.find((x) => x.grade === 7 && x.theme === t.id).caso.es); }
});
