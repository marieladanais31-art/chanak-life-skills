import assert from 'node:assert';
import { DAILY_DEVOTIONALS as D } from './daily.js';
const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
const expectType = { mon: 'passage_portion', tue: 'cluster', wed: 'month_passage', thu: 'cluster', fri: 'cluster' };
assert.equal(Object.keys(D).length, 42);
for (let w = 1; w <= 42; w++) {
  for (const d of days) {
    const c = D[w]?.[d];
    assert.ok(c, `falta semana ${w} ${d}`);
    assert.equal(c.type, expectType[d], `tipo semana ${w} ${d}`);
    if (c.type === 'cluster') assert.ok(c.cluster >= 1 && c.cluster <= 4, `clúster semana ${w} ${d}`);
    for (const l of ['es', 'en']) for (const k of ['title', 'text', 'practice']) assert.ok(String(c[l]?.[k] || '').trim().length > 5, `vacío ${w} ${d} ${l} ${k}`);
  }
  const cl = days.filter(d => D[w][d].type === 'cluster').map(d => D[w][d].cluster);
  assert.equal(new Set(cl.slice(1)).size, 2, `semana ${w}: jueves y viernes deben ser clústeres distintos`);
}
console.log('daily OK: 210 cápsulas ES/EN');
