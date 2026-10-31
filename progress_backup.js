// Copia de seguridad del progreso del estudiante. Todo lo que guarda la app (cápsulas, metas, hábitos, escudo, test de dones,
// cuaderno…) vive en el navegador (claves «chanak_*»). Estas funciones lo exportan a un archivo y lo restauran, sin tocar
// ninguna clave existente al exportar.
export const PREFIX = 'chanak_';
export const FORMAT = 'chanak-life-skills-progress';

/** Lee todas las claves chanak_* del almacenamiento. */
export function collectProgress(storage) {
  const data = {};
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i);
    if (key && key.startsWith(PREFIX)) data[key] = storage.getItem(key);
  }
  return { format: FORMAT, version: 1, exportedAt: new Date().toISOString(), keys: Object.keys(data).length, data };
}

/** Valida un archivo exportado y devuelve sus datos, o lanza un error legible. */
export function parseBackup(text) {
  let obj;
  try { obj = JSON.parse(text); } catch { throw new Error('El archivo no es una copia válida de Life Skills.'); }
  if (!obj || obj.format !== FORMAT || typeof obj.data !== 'object' || obj.data === null) throw new Error('El archivo no es una copia válida de Life Skills.');
  const data = {};
  Object.entries(obj.data).forEach(([k, v]) => { if (k.startsWith(PREFIX) && typeof v === 'string') data[k] = v; });
  return data;
}

/** Escribe los datos en el almacenamiento. Devuelve cuántas claves restauró. */
export function restoreProgress(storage, data) {
  const entries = Object.entries(data).filter(([k]) => k.startsWith(PREFIX));
  entries.forEach(([k, v]) => storage.setItem(k, v));
  return entries.length;
}

export const backupFileName = (date = new Date()) => `chanak-life-skills-progreso-${date.toISOString().slice(0, 10)}.json`;

/** Descarga el progreso como archivo (solo navegador). */
export function downloadProgress(storage = localStorage) {
  const backup = collectProgress(storage);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = backupFileName(); document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return backup.keys;
}

/** Restaura desde un archivo elegido por el estudiante; recarga la página al terminar. */
export async function restoreFromFile(file, storage = localStorage) {
  const data = parseBackup(await file.text());
  return restoreProgress(storage, data);
}
