const canvas = document.getElementById('logo-canvas');
const ctx = canvas.getContext('2d');
const form = document.getElementById('logo-form');
const downloadBtn = document.getElementById('download-btn');

const palettes = {
  sunset: ['#ff6b6b', '#ff8e72', '#ffd93d', '#273c75'],
  ocean: ['#00a8e8', '#007ea7', '#003459', '#f4faff'],
  forest: ['#004643', '#4c956c', '#f2e8cf', '#1d2d44'],
  mono: ['#1a1a1a', '#343434', '#f5f5f5', '#9a9a9a'],
  candy: ['#ff66c4', '#ffde59', '#72f1b8', '#845ec2'],
};

const fonts = [
  "600 64px 'Space Grotesk'",
  "600 60px 'Poppins'",
  "600 58px 'Montserrat'",
  "600 60px 'Raleway'",
];

const taglineFonts = [
  "400 26px 'Poppins'",
  "400 24px 'Space Grotesk'",
  "400 24px 'Inter'",
];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const brand = data.get('brand')?.trim();
  const tagline = data.get('tagline')?.trim();
  const palette = data.get('palette');
  const shape = data.get('shape');

  if (!brand) {
    return;
  }

  renderLogo({ brand, tagline, palette, shape });
  downloadBtn.disabled = false;
});

downloadBtn.addEventListener('click', () => {
  if (downloadBtn.disabled) return;
  const link = document.createElement('a');
  link.download = 'logo-crafter.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

function renderLogo({ brand, tagline, palette, shape }) {
  const colors = palettes[palette] ?? palettes.sunset;
  const [primary, accent, background, dark] = shuffle(colors);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createBackgroundGradient(background, accent);
  drawShape(shape, accent, primary);
  drawText(brand, tagline, dark ?? '#1a1a1a');
}

function createBackgroundGradient(baseColor, accentColor) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, withAlpha(baseColor, 0.92));
  gradient.addColorStop(1, withAlpha(accentColor, 0.15));

  ctx.fillStyle = gradient;
  roundedRect(ctx, 40, 40, canvas.width - 80, canvas.height - 80, 42);
  ctx.fill();
}

function drawShape(shape, fillColor, strokeColor) {
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2 - 30);

  ctx.shadowColor = withAlpha(strokeColor, 0.35);
  ctx.shadowBlur = 40;
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 12;

  switch (shape) {
    case 'diamond':
      polygon(ctx, 4, 120, 0);
      break;
    case 'hexagon':
      polygon(ctx, 6, 120, Math.PI / 6);
      break;
    case 'wave':
      wave(ctx, 150, 90);
      break;
    default:
      circle(ctx, 110);
  }

  ctx.restore();
}

function drawText(brand, tagline, color) {
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2 + 90);
  ctx.textAlign = 'center';
  ctx.fillStyle = color;

  ctx.font = randomItem(fonts);
  ctx.fillText(brand.toUpperCase(), 0, 0);

  if (tagline) {
    ctx.font = randomItem(taglineFonts);
    ctx.fillStyle = withAlpha(color, 0.75);
    ctx.fillText(tagline, 0, 48);
  }
  ctx.restore();
}

function circle(context, radius) {
  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.closePath();
}

function polygon(context, sides, radius, rotation = 0) {
  context.beginPath();
  for (let i = 0; i < sides; i += 1) {
    const angle = (i / sides) * Math.PI * 2 + rotation;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function wave(context, width, height) {
  context.beginPath();
  context.moveTo(-width / 2, 0);
  context.quadraticCurveTo(-width / 4, -height, 0, -height / 2);
  context.quadraticCurveTo(width / 4, 0, width / 2, -height / 3);
  context.quadraticCurveTo(width / 3, height / 2, 0, height / 2);
  context.quadraticCurveTo(-width / 3, height / 3, -width / 2, 0);
  context.closePath();
  context.fill();
  context.stroke();
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function shuffle(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function withAlpha(hex, alpha) {
  const rgb = hex.replace('#', '');
  const bigint = parseInt(rgb, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
