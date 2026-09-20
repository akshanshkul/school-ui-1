/**
 * Generates the placeholder images in /public/images.
 *
 * These exist only so the layout looks complete before real photos arrive.
 * Drop real JPG/WebP photos into /public/images using the same file names
 * (and update the extension in the component or in src/data/site.js).
 *
 * Run with:  node scripts/make-placeholders.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(outDir, { recursive: true });

const scene = ({ w = 1200, h = 800, from, to, label, sky = false }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${sky ? `<circle cx="${w * 0.82}" cy="${h * 0.18}" r="${h * 0.09}" fill="#F5BE2E" opacity="0.65"/>` : ''}
  <g fill="#ffffff" opacity="0.14">
    <rect x="${w * 0.08}" y="${h * 0.45}" width="${w * 0.36}" height="${h * 0.45}" rx="10"/>
    <rect x="${w * 0.5}" y="${h * 0.33}" width="${w * 0.42}" height="${h * 0.57}" rx="10"/>
  </g>
  <g fill="#ffffff" opacity="0.25">
    <rect x="${w * 0.12}" y="${h * 0.52}" width="${w * 0.07}" height="${h * 0.09}" rx="4"/>
    <rect x="${w * 0.23}" y="${h * 0.52}" width="${w * 0.07}" height="${h * 0.09}" rx="4"/>
    <rect x="${w * 0.54}" y="${h * 0.41}" width="${w * 0.08}" height="${h * 0.1}" rx="4"/>
    <rect x="${w * 0.66}" y="${h * 0.41}" width="${w * 0.08}" height="${h * 0.1}" rx="4"/>
    <rect x="${w * 0.78}" y="${h * 0.41}" width="${w * 0.08}" height="${h * 0.1}" rx="4"/>
  </g>
  <path d="M0 ${h * 0.9} L${w} ${h * 0.9} L${w} ${h} L0 ${h} Z" fill="#0B3B6B" opacity="0.25"/>
  <text x="${w / 2}" y="${h * 0.965}" font-family="Poppins, Segoe UI, sans-serif" font-size="${Math.round(h * 0.035)}"
        fill="#ffffff" opacity="0.85" text-anchor="middle">${label}</text>
</svg>
`;

const files = {
  'hero-students.svg': scene({ w: 900, h: 720, from: '#1B6FB8', to: '#0B3B6B', label: 'Replace with hero photo', sky: true }),
  'campus-building.svg': scene({ w: 900, h: 650, from: '#5AA9E6', to: '#0E4F91', label: 'Replace with campus photo', sky: true }),
  'campus-interior.svg': scene({ w: 900, h: 650, from: '#8FB9D9', to: '#284D73', label: 'Replace with interior photo' }),
  'campus-wide.svg': scene({ w: 1600, h: 600, from: '#0E4F91', to: '#07233F', label: 'Replace with wide campus photo' }),
  'og-cover.svg': scene({ w: 1200, h: 630, from: '#0E4F91', to: '#07233F', label: 'The Brahmanand Academy - Kaul, Kaithal', sky: true }),
};

const galleryTints = [
  ['#5AA9E6', '#0E4F91'],
  ['#7FC8A9', '#1F7A5A'],
  ['#F5BE2E', '#B77C11'],
  ['#E98A8A', '#A33C3C'],
  ['#9C8AE9', '#4B3AA3'],
  ['#6FC5D6', '#1B6B7A'],
  ['#8FB9D9', '#284D73'],
  ['#F2A05C', '#A85A1B'],
  ['#C58AE9', '#6B3AA3'],
];

const galleryLabels = [
  'School Building', 'Smart Classroom', 'Annual Sports Day', 'Independence Day', 'Science Exhibition',
  'Computer Lab', 'Playground', 'Cultural Programme', 'Art & Craft Workshop',
];

galleryTints.forEach(([from, to], index) => {
  files[`gallery-${index + 1}.svg`] = scene({ w: 640, h: 440, from, to, label: galleryLabels[index] });
});

// Logo mark + favicon
const mark = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48">
  <rect width="48" height="48" rx="10" fill="#ffffff"/>
  <path d="M24 44C14 40 8 31 9 20c8 1 14 6 16 13 2-9 8-14 17-15 1 12-6 22-18 26z" fill="#0E4F91"/>
  <path d="M24 44c0-11 5-19 14-23 1 11-5 20-14 23z" fill="#F5BE2E"/>
  <path d="M24 44C14 40 8 31 9 20c7 5 12 13 15 24z" fill="#3AA17E" opacity="0.9"/>
</svg>
`;
files['logo.svg'] = mark;
files['favicon.svg'] = mark;

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, name), content);
}

console.log(`  ${Object.keys(files).length} placeholder images written to public/images/`);
