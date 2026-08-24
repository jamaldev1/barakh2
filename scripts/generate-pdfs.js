import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.join(__dirname, '..', 'public', 'docs');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Brand Colors
const brandGreen = rgb(0.106, 0.29, 0.176); // #1b4a2d
const goldColor = rgb(0.835, 0.655, 0.137);  // #d5a723
const darkText = rgb(0.12, 0.12, 0.12);
const grayText = rgb(0.4, 0.4, 0.4);
const lightBg = rgb(0.965, 0.965, 0.945);

async function createBrochurePDF() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]); // A4
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  // Top Header Banner
  page.drawRectangle({
    x: 0,
    y: 740,
    width: 595.28,
    height: 101.89,
    color: brandGreen,
  });

  page.drawText('AL BARAKH ORGANICS', {
    x: 40,
    y: 800,
    size: 20,
    font: fontBold,
    color: goldColor,
  });

  page.drawText('Official Product Catalogue & Solutions Guide', {
    x: 40,
    y: 778,
    size: 12,
    font: fontRegular,
    color: rgb(1, 1, 1),
  });

  page.drawText('Phone / WhatsApp: 0316 8803363  |  Coverage: All Over Pakistan', {
    x: 40,
    y: 755,
    size: 9,
    font: fontRegular,
    color: rgb(0.9, 0.9, 0.9),
  });

  // Section 1: About Al Barakh
  let y = 705;
  page.drawText('About Al Barakh Organics', { x: 40, y, size: 14, font: fontBold, color: brandGreen });
  y -= 18;
  const introText = [
    'Founded in 2024 by Mr. Sohaib Ahmed Khatti, Al Barakh Organics provides premium-quality',
    'vermicompost to farmers, growers, B2B, exporters, and retailers across Pakistan. Our vision is to',
    'revive Pakistan’s declining agricultural soils and empower farming communities.',
  ];
  for (const line of introText) {
    page.drawText(line, { x: 40, y, size: 10, font: fontRegular, color: darkText });
    y -= 14;
  }

  // Section 2: Core Products
  y -= 10;
  page.drawText('1. Premium-Quality Vermicompost (Core Product)', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 18;
  const vermiText = [
    '• Description: Premium-quality organic fertilizer produced through vermicomposting, enriched with',
    '  natural nutrients and organic matter to improve soil health, enhance plant growth, and support',
    '  sustainable agriculture.',
    '• Available Bag Sizes: 40 KG Bags (Commercial Field Size) & 5 KG Bags (Gardening & Nurseries).',
    '• Key Benefits: 100% pure organic matter, enhances water retention, rich in humic & fulvic acids,',
    '  suppresses root diseases, and safe for all crops without burning roots.',
  ];
  for (const line of vermiText) {
    page.drawText(line, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 13;
  }

  y -= 8;
  page.drawText('2. Red Wiggler Worms (Eisenia fetida)', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 18;
  const wormText = [
    '• Description: Efficient composting earthworms that convert organic waste into nutrient-rich vermicompost.',
    '• Availability: 1 KG Active Starter Colonies & Commercial Breeder Lots.',
    '• Applications: On-farm composting beds, livestock manure valorization, and rooftop compost units.',
  ];
  for (const line of wormText) {
    page.drawText(line, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 13;
  }

  // Section 3: Operations & Community
  y -= 8;
  page.drawText('Operations & "Zaraat Kach’heri" Platform', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 18;
  const opsText = [
    '• Tando Ghulam Ali Facility (Main Branch): 200+ active vermicomposting beds & research setup.',
    '• Hyderabad Branch Facility: 20+ active beds and regional dispatch center.',
    '• "Zaraat Kach’heri": Community dialogue platform connecting and educating farmers across Pakistan.',
    '• Future Pipeline: Organic Vermiwash (Liquid Gold) & Agricultural Activated Biochar.',
  ];
  for (const line of opsText) {
    page.drawText(line, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 13;
  }

  // Footer Box
  page.drawRectangle({
    x: 40,
    y: 40,
    width: 515.28,
    height: 70,
    color: lightBg,
    borderColor: goldColor,
    borderWidth: 1,
  });

  page.drawText('Order & Consultation Hotline: 0316 8803363 (WhatsApp / Call)', {
    x: 60,
    y: 85,
    size: 11,
    font: fontBold,
    color: brandGreen,
  });
  page.drawText('Business Hours: 09:00 to 17:00 (Mon - Sat) | Delivery: All Over Pakistan', {
    x: 60,
    y: 68,
    size: 9,
    font: fontRegular,
    color: grayText,
  });
  page.drawText('Branches: Tando Ghulam Ali & Hyderabad, Sindh | Web: www.albarakhorganics.com', {
    x: 60,
    y: 52,
    size: 9,
    font: fontRegular,
    color: grayText,
  });

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(docsDir, 'al-barakh-product-catalogue.pdf'), pdfBytes);
  console.log('Created al-barakh-product-catalogue.pdf');
}

async function createDosageGuidePDF() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  // Top Header Banner
  page.drawRectangle({ x: 0, y: 740, width: 595.28, height: 101.89, color: brandGreen });
  page.drawText('AL BARAKH ORGANICS', { x: 40, y: 800, size: 20, font: fontBold, color: goldColor });
  page.drawText('Farmer’s Application & Crop Dosage Guide', { x: 40, y: 778, size: 12, font: fontRegular, color: rgb(1, 1, 1) });
  page.drawText('Practical Field Application Guidelines for Maximum Yield & Cost Reduction', { x: 40, y: 755, size: 9, font: fontRegular, color: rgb(0.9, 0.9, 0.9) });

  let y = 705;
  page.drawText('Recommended Field Dosage by Crop Type (40 KG Bags)', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 20;

  const dosages = [
    { crop: '1. Field Crops (Wheat, Rice, Cotton, Maize, Sugarcane)', rate: '4 to 6 Bags (40 KG) per Acre', time: 'Apply during land preparation / basal furrow before sowing.' },
    { crop: '2. Fruit Orchards (Mango, Citrus, Guava, Dates)', rate: '5 to 10 KG per Mature Tree', time: 'Applied twice a year around the drip line (Pre-flowering & Post-harvest).' },
    { crop: '3. Vegetables & High-Value Tunnels (Tomato, Chili, Potato)', rate: '8 to 10 Bags (40 KG) per Acre', time: 'Bed preparation and root zone furrow incorporation.' },
    { crop: '4. Plant Nurseries & Seedling Beds', rate: '25% to 30% Blend with Soil', time: 'Mix thoroughly with soil/sand for potting and nursery germination trays.' },
    { crop: '5. Kitchen Gardens & Potted Plants (5 KG Bag)', rate: '2 to 3 Tablespoons per Pot', time: 'Top-dress around plant roots once every 3 to 4 weeks, followed by light watering.' },
  ];

  for (const d of dosages) {
    page.drawText(d.crop, { x: 40, y, size: 11, font: fontBold, color: brandGreen });
    y -= 14;
    page.drawText(`• Dosage Rate: ${d.rate}`, { x: 55, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 13;
    page.drawText(`• Application Timing: ${d.time}`, { x: 55, y, size: 9.5, font: fontRegular, color: grayText });
    y -= 16;
  }

  y -= 5;
  page.drawText('Key Rules for Successful Application:', { x: 40, y, size: 12, font: fontBold, color: brandGreen });
  y -= 16;
  const rules = [
    '1. Soil Moisture: Apply vermicompost when soil is slightly moist or irrigate within 24-48 hours.',
    '2. Root Zone Placement: Incorporate 2-4 inches into the soil so living microbes are shielded from direct sun.',
    '3. Chemical Reduction: Gradually reduce synthetic Urea and DAP by 40% to 60% in Year 1.',
    '4. Storage: Always store vermicompost bags in cool shade; avoid direct sun exposure to keep microbes alive.',
  ];
  for (const r of rules) {
    page.drawText(r, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 14;
  }

  // Footer Box
  page.drawRectangle({ x: 40, y: 40, width: 515.28, height: 70, color: lightBg, borderColor: goldColor, borderWidth: 1 });
  page.drawText('For Custom Soil Assessments & Bulk Delivery: 0316 8803363', { x: 60, y: 85, size: 11, font: fontBold, color: brandGreen });
  page.drawText('Al Barakh Organics — Tando Ghulam Ali & Hyderabad Branches | Serving All Over Pakistan', { x: 60, y: 65, size: 9, font: fontRegular, color: grayText });
  page.drawText('Website: www.albarakhorganics.com | Mon - Sat: 09:00 - 17:00', { x: 60, y: 50, size: 9, font: fontRegular, color: grayText });

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(docsDir, 'vermicompost-application-dosage-guide.pdf'), pdfBytes);
  console.log('Created vermicompost-application-dosage-guide.pdf');
}

async function createTrainingSyllabusPDF() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: 740, width: 595.28, height: 101.89, color: brandGreen });
  page.drawText('AL BARAKH ORGANICS', { x: 40, y: 800, size: 20, font: fontBold, color: goldColor });
  page.drawText('“Zaraat Kach’heri” — Training Programme Syllabus', { x: 40, y: 778, size: 12, font: fontRegular, color: rgb(1, 1, 1) });
  page.drawText('Over 100+ Sessions Conducted & 500+ Farmers Empowered Across Pakistan', { x: 40, y: 755, size: 9, font: fontRegular, color: rgb(0.9, 0.9, 0.9) });

  let y = 705;
  page.drawText('12 Core Training Topics Covered in Zaraat Kach’heri:', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 20;

  const topics = [
    '01. Vermicomposting & Organic Fertilizers — Bed setup, temperature, moisture and harvesting.',
    '02. Soil Health & Soil Restoration — Rebuilding depleted microbiology and reversing salinity.',
    '03. Modern & Sustainable Agriculture — Low-cost inputs and high-efficiency farm systems.',
    '04. Organic Farming Practices — Non-chemical pest control and biological crop nutrition.',
    '05. Composting & Organic Waste Management — Turning farm residues and cattle manure into wealth.',
    '06. Integrated Nutrient Management — Optimizing biological and organic fertilizer combinations.',
    '07. Vermiwash & Biochar — Production and foliar spray techniques for flower and fruit retention.',
    '08. Farm Waste to Farm Wealth — Commercial economics of on-farm composting.',
    '09. Climate-Smart Agriculture — Resilient practices against extreme summer heatwaves and drought.',
    '10. Women & Youth in Agriculture — Fostering female leadership, training, and entrepreneurship.',
    '11. Entrepreneurship in Agriculture — Packaging, branding, and commercial organic marketing.',
    '12. Practical Farm Demonstrations — Live hands-on work on active 200+ vermicomposting beds.',
  ];

  for (const t of topics) {
    page.drawText(t, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 14;
  }

  y -= 10;
  page.drawText('Locations & Who Can Request Training:', { x: 40, y, size: 12, font: fontBold, color: brandGreen });
  y -= 16;
  const locs = [
    '• Active Hubs: Tando Ghulam Ali (Main Facility - 200+ Beds) and Hyderabad Branch.',
    '• On-Demand Training: Delivered on-site at commercial farms and educational institutions across Pakistan.',
    '• Eligible Participants: Smallholders, commercial growers, schools, colleges, and agriculture universities.',
  ];
  for (const l of locs) {
    page.drawText(l, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 14;
  }

  // Footer Box
  page.drawRectangle({ x: 40, y: 40, width: 515.28, height: 70, color: lightBg, borderColor: goldColor, borderWidth: 1 });
  page.drawText('To Book or Inquire About a Zaraat Kach’heri Batch: 0316 8803363', { x: 60, y: 85, size: 11, font: fontBold, color: brandGreen });
  page.drawText('WhatsApp / Call: 0316 8803363 | Hours: 09:00 - 17:00 (Mon - Sat)', { x: 60, y: 65, size: 9, font: fontRegular, color: grayText });
  page.drawText('Al Barakh Organics — Reviving Soil Health & Empowering Agricultural Communities', { x: 60, y: 50, size: 9, font: fontRegular, color: grayText });

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(docsDir, 'zaraat-kachheri-training-syllabus.pdf'), pdfBytes);
  console.log('Created zaraat-kachheri-training-syllabus.pdf');
}

async function createHandbookPDF() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: 740, width: 595.28, height: 101.89, color: brandGreen });
  page.drawText('AL BARAKH ORGANICS', { x: 40, y: 800, size: 20, font: fontBold, color: goldColor });
  page.drawText('On-Farm Vermiculture & Worm Bed Setup Handbook', { x: 40, y: 778, size: 12, font: fontRegular, color: rgb(1, 1, 1) });
  page.drawText('Technical Field Manual for Eisenia Fetida Breeding & Castings Production', { x: 40, y: 755, size: 9, font: fontRegular, color: rgb(0.9, 0.9, 0.9) });

  let y = 705;
  page.drawText('Essential Steps for Setting Up an On-Farm Vermicomposting Bed:', { x: 40, y, size: 13, font: fontBold, color: brandGreen });
  y -= 20;

  const steps = [
    '1. Site Selection & Shading: Choose an elevated, well-drained area shaded with 75% agro-green net.',
    '2. Bed Dimensions: Standard windrow bed dimensions are 10-20 ft length, 3-4 ft width, and 1.5 ft height.',
    '3. Bedding Preparation: Base layer of dry straw/leaves (3-4 inches) followed by pre-composted aged cow manure.',
    '4. Pre-Composting Cow Dung: Decompose fresh cattle dung for 10-15 days to release thermogenic heat.',
    '5. Inoculating Red Wigglers: Introduce 1-2 kg of pure Eisenia fetida per 10 ft bed under damp jute burlap.',
    '6. Moisture & Aeration: Maintain 60-70% moisture (damp sponge feel). Water every 1-2 days in summer.',
    '7. Harvesting Castings: After 45-60 days, top 6-8 inches converts into granular, odor-free black castings.',
    '8. Screening & Storage: Screen through a 3mm mesh to separate worms and viability cocoons; store in cool shade.',
  ];

  for (const s of steps) {
    page.drawText(s, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 15;
  }

  y -= 10;
  page.drawText('Summer Heat Protection Protocols (Pakistani Climate):', { x: 40, y, size: 12, font: fontBold, color: brandGreen });
  y -= 16;
  const heatTips = [
    '• Natural Jute Covers: Always keep moist natural jute burlap on bed tops to cool surface temperatures.',
    '• Micro-Misting: Install simple overhead mister sprays running 2-3 mins during peak afternoon hours.',
    '• Bed Height: Never exceed 1.5 ft height to avoid internal anaerobic heat accumulation.',
  ];
  for (const h of heatTips) {
    page.drawText(h, { x: 40, y, size: 9.5, font: fontRegular, color: darkText });
    y -= 14;
  }

  // Footer Box
  page.drawRectangle({ x: 40, y: 40, width: 515.28, height: 70, color: lightBg, borderColor: goldColor, borderWidth: 1 });
  page.drawText('For Worm Starter Colonies & Technical Bed Support: 0316 8803363', { x: 60, y: 85, size: 11, font: fontBold, color: brandGreen });
  page.drawText('Al Barakh Organics — 200+ Beds Main Facility Tando Ghulam Ali & Hyderabad Branch', { x: 60, y: 65, size: 9, font: fontRegular, color: grayText });
  page.drawText('Website: www.albarakhorganics.com | All Over Pakistan Delivery', { x: 60, y: 50, size: 9, font: fontRegular, color: grayText });

  const pdfBytes = await doc.save();
  fs.writeFileSync(path.join(docsDir, 'on-farm-vermiculture-handbook.pdf'), pdfBytes);
  console.log('Created on-farm-vermiculture-handbook.pdf');
}

async function run() {
  await createBrochurePDF();
  await createDosageGuidePDF();
  await createTrainingSyllabusPDF();
  await createHandbookPDF();
  console.log('All 4 PDFs successfully generated in public/docs/');
}

run().catch(console.error);
