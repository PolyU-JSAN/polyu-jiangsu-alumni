global.window = {};
require('./timeline-data.js');
const R = global.window.REVIEWS;
for (let i = 0; i < R.length; i++) {
  const r = R[i];
  console.log(i.toString().padStart(2), '|', (r.monthLabel || '').padEnd(14), '|', r.publish || '', '|', r.link ? 'LINK' : 'NOLINK', '|', (r.cover || '(none)').slice(0, 70));
}
