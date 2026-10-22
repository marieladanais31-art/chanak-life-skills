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
