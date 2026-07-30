/* Verifies window.I18N.es and .en have identical key shapes. Run: node scripts/check-i18n.mjs */
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/i18n.jsx', import.meta.url), 'utf8');
const window = {};
new Function('window', src.replace(/^\/\*[\s\S]*?\*\//, ''))(window);

/* The brief's original version excluded arrays from recursion, treating
   `!Array.isArray(o)` objects as the only recursable case and any array
   (faq.items, included.rows, arc.parts, footer.cols[].links, ...) as an
   opaque leaf. That silently hid mismatches *inside* array elements — e.g.
   an EN FAQ item missing its `q` key never surfaced, because the whole
   `faq.items` array was one leaf path on both sides. Fixed by recursing
   into arrays too, tagging each element by index so a shorter/longer
   array, or a missing key on one element, shows up as a real path diff. */
const paths = (o, p = '') => {
  if (Array.isArray(o)) return o.flatMap((v, i) => paths(v, `${p}[${i}]`));
  return o && typeof o === 'object'
    ? Object.entries(o).flatMap(([k, v]) => paths(v, p ? `${p}.${k}` : k))
    : [p];
};

const es = new Set(paths(window.I18N.es));
const en = new Set(paths(window.I18N.en));
const missingEn = [...es].filter((k) => !en.has(k));
const missingEs = [...en].filter((k) => !es.has(k));

if (missingEn.length || missingEs.length) {
  if (missingEn.length) console.error('Missing in EN:\n  ' + missingEn.join('\n  '));
  if (missingEs.length) console.error('Missing in ES:\n  ' + missingEs.join('\n  '));
  process.exit(1);
}
console.log(`i18n OK — ${es.size} keys in both locales`);
