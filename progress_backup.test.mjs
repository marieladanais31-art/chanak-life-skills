import test from 'node:test';
import assert from 'node:assert/strict';
import { collectProgress, parseBackup, restoreProgress, backupFileName } from './progress_backup.js';

const fakeStorage = (init = {}) => {
  const m = new Map(Object.entries(init));
  return { get length() { return m.size; }, key: (i) => [...m.keys()][i] ?? null, getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), _m: m };
};

test('exporta solo las claves chanak_* y no cambia nada', () => {
  const s = fakeStorage({ chanak_coins: '40', chanak_cap_a: 'done', otra_cosa: 'x', chanak_riasec_result: '{"a":1}' });
  const b = collectProgress(s);
  assert.equal(b.keys, 3);
  assert.deepEqual(Object.keys(b.data).sort(), ['chanak_cap_a', 'chanak_coins', 'chanak_riasec_result']);
  assert.equal(s._m.size, 4);
});

test('exportar y restaurar en otro dispositivo deja el mismo progreso', () => {
  const a = fakeStorage({ chanak_coins: '40', chanak_tracker_days: '[true,false]', chanak_done_m1_s2: 'done' });
  const text = JSON.stringify(collectProgress(a));
  const b = fakeStorage({ chanak_coins: '20' });
  const n = restoreProgress(b, parseBackup(text));
  assert.equal(n, 3);
  assert.equal(b.getItem('chanak_coins'), '40');
  assert.equal(b.getItem('chanak_done_m1_s2'), 'done');
});

test('un archivo ajeno o dañado se rechaza y solo se aceptan claves chanak_*', () => {
  assert.throws(() => parseBackup('no es json'), /copia válida/);
  assert.throws(() => parseBackup(JSON.stringify({ format: 'otro', data: {} })), /copia válida/);
  const ok = parseBackup(JSON.stringify({ format: 'chanak-life-skills-progress', data: { chanak_coins: '5', admin: 'x', chanak_n: 9 } }));
  assert.deepEqual(ok, { chanak_coins: '5' });
});

test('el nombre del archivo no lleva datos personales', () => {
  assert.equal(backupFileName(new Date('2026-11-02T10:00:00Z')), 'chanak-life-skills-progreso-2026-11-02.json');
});
