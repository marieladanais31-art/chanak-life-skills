import test from 'node:test';
import assert from 'node:assert/strict';
import { JUNIOR_TRACKS, JUNIOR_PROJECTS } from './projects.js';

test('80 mini proyectos en 10 tracks de 8, numerados 1 a 80', () => {
  assert.equal(JUNIOR_TRACKS.length, 10); assert.equal(JUNIOR_PROJECTS.length, 80);
  assert.deepEqual(JUNIOR_PROJECTS.map((p) => p.n), Array.from({ length: 80 }, (_, i) => i + 1));
  for (const t of JUNIOR_TRACKS) assert.equal(JUNIOR_PROJECTS.filter((p) => p.track === t.id).length, 8, t.id);
});
test('todos los proyectos están completos en español y en inglés', () => {
  for (const p of JUNIOR_PROJECTS) for (const l of ['es', 'en']) for (const k of ['title', 'desc', 'deliverable', 'verse', 'ref']) assert.ok(p[l][k] && p[l][k].trim().length > 2, `${p.n} ${l} ${k}`);
  for (const t of JUNIOR_TRACKS) { assert.ok(t.es && t.en && t.icon && /^#/.test(t.color)); }
});
