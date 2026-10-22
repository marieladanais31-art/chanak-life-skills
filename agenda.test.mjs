import test from 'node:test';
import assert from 'node:assert/strict';
import { floridaIsoDate, AGENDA_2026_2027 as A, CLUSTER_BY_TRAIT, CHARACTER_CLUSTERS, getCurrentAgendaWeek, clusterOfTrait } from './agenda.js';

test('42 semanas bilingües con las fechas oficiales y sin huecos', () => {
  assert.equal(A.length, 42);
  assert.equal(A[0].startDate, '2026-09-07'); assert.equal(A[41].endDate, '2027-06-27');
  for (const w of A) for (const k of ['trait', 'traitEn', 'passage', 'passageEn', 'monthlyTheme', 'monthlyThemeEn', 'definicion', 'definicionEn', 'versiculo', 'versiculoEn']) assert.ok(w[k], `${w.week} ${k}`);
  for (let i = 1; i < A.length; i++) assert.equal(new Date(A[i].startDate) - new Date(A[i - 1].startDate), 7 * 86400000);
});
test('cada rasgo pertenece a uno de los 4 clústeres y los 4 tienen rasgos', () => {
  for (const w of A) assert.ok([1, 2, 3, 4].includes(w.cluster) && w.cluster === CLUSTER_BY_TRAIT[w.trait], w.trait);
  for (const c of [1, 2, 3, 4]) { assert.ok(A.some((w) => w.cluster === c)); assert.ok(CHARACTER_CLUSTERS[c].es && CHARACTER_CLUSTERS[c].en); }
  assert.equal(clusterOfTrait('Lealtad'), 3);
});
test('semana actual por fecha: hoy 22-oct-2026 es la semana 7 (Lealtad / Loyalty)', () => {
  const w = getCurrentAgendaWeek(new Date(2026, 9, 22, 12));
  assert.equal(w.week, 7); assert.equal(w.trait, 'Lealtad'); assert.equal(w.traitEn, 'Loyalty'); assert.equal(w.passage, 'Romanos 12:1-13');
  assert.equal(getCurrentAgendaWeek(new Date(2026, 7, 1)).week, 1);
  assert.equal(getCurrentAgendaWeek(new Date(2027, 8, 1)).week, 42);
  assert.equal(getCurrentAgendaWeek(new Date(2027, 0, 5)).trait, 'Respetuoso'); // vacaciones: sigue la agenda oficial
});

test('sin fecha explícita se usa el día de Florida (America/New_York)', () => {
  assert.equal(floridaIsoDate(new Date('2026-10-26T03:30:00Z')), '2026-10-25'); // 23:30 del domingo en Florida
  assert.equal(floridaIsoDate(new Date('2026-10-26T04:30:00Z')), '2026-10-26'); // 00:30 del lunes en Florida
  assert.equal(getCurrentAgendaWeek().week >= 1, true);
});
