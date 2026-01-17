# Phase 5: Performance & Build Optimization Guide

## WebP Image Conversion

For optimal performance, convert all images to WebP format:

### Manual Conversion (Recommended)
```bash
# Install cwebp (macOS)
brew install webp

# Install cwebp (Ubuntu/Debian)
sudo apt-get install webp

# Convert single image
cwebp -q 80 public/og-image.png -o public/og-image.webp

# Batch convert all images in a folder
for file in public/*.png; do cwebp -q 80 "$file" -o "${file%.png}.webp"; done
for file in public/*.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
for file in src/assets/*.png; do cwebp -q 80 "$file" -o "${file%.png}.webp"; done
for file in src/assets/*.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

### Using Sharp (Node.js)
```bash
npm install sharp
```

```javascript
// scripts/convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = ['public', 'src/assets'];

directories.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Converted: ${file} -> ${path.basename(outputPath)}`))
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  });
});
```

## Browserslist Update

Keep browser targets up to date for optimal bundle size:

```bash
# Check current targets
npx browserslist

# Update browserslist database
npx update-browserslist-db@latest
```

Add to your regular maintenance schedule (monthly recommended).

## GA4 Setup Instructions

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for BoloAstro
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Replace `G-XXXXXXXXXX` in `index.html` with your actual ID

### Key Events to Monitor
- `whatsapp_click` - Tracks all WhatsApp CTA clicks
- `birth_form_submit` - Tracks form submissions
- `pricing_select` - Tracks pricing plan selections
- `teaser_result_view` - Tracks when users see results
- `scroll_depth` - Tracks engagement depth (25%, 50%, 75%, 100%)

## Lighthouse Targets

| Metric | Target | Notes |
|--------|--------|-------|
| Performance | ≥ 85 | Lazy loading + WebP images |
| Accessibility | ≥ 90 | ARIA labels + contrast |
| Best Practices | ≥ 90 | HTTPS + secure headers |
| SEO | ≥ 95 | Meta tags + structured data |

## Bundle Size Optimization Tips

1. **Already Implemented:**
   - React.lazy for non-critical pages
   - Preconnect for Google Fonts
   - Suspense fallback for code splitting

2. **Additional Recommendations:**
   - Use `import()` for heavy components (charts, modals)
   - Consider using `react-intersection-observer` for scroll animations
   - Remove unused icon imports from lucide-react

3. **Check Bundle Size:**
   ```bash
   npm run build
   # Check dist folder size
   du -sh dist/
   ```

## Lazy Loading for Images

Add `loading="lazy"` to all non-critical images:

```tsx
<img 
  src="/path/to/image.webp" 
  alt="Description"
  loading="lazy"
  decoding="async"
/>
```

For hero/above-the-fold images, use `loading="eager"` or remove the attribute.

## Preload Critical Assets

Already added to index.html:
```html
<link rel="preload" href="/logo.png" as="image" />
```

Consider adding:
```html
<link rel="preload" href="/fonts/plus-jakarta-sans.woff2" as="font" type="font/woff2" crossorigin />
```

## Content Delivery

For production, consider:
1. Using a CDN (Cloudflare, Vercel Edge)
2. Enabling Brotli compression
3. Setting appropriate cache headers
4. Using service workers for offline support
