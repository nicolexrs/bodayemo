"use client";

import { useEffect } from "react";

export default function ThemeFromLogo({ src = "/by.jpg" }) {
  useEffect(() => {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      img.onload = () => {
        const w = 80;
        const hpx = Math.max(1, Math.round((img.height / img.width) * w));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = hpx;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, w, hpx);
        const { data } = ctx.getImageData(0, 0, w, hpx);

        const buckets = new Map();
        const q = 24; 
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 128) continue;
     
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          if (max > 240 && min > 200) continue; // too white
          if (max < 25 && min < 25) continue; // too black
          const rq = Math.round(r / q) * q;
          const gq = Math.round(g / q) * q;
          const bq = Math.round(b / q) * q;
          const key = `${rq},${gq},${bq}`;
          buckets.set(key, (buckets.get(key) || 0) + 1);
        }

        let best = "124,58,237"; 
        let bestCount = 0;
        for (const [key, count] of buckets) {
          if (count > bestCount) {
            best = key;
            bestCount = count;
          }
        }

        const [r, g, b] = best.split(",").map((n) => parseInt(n, 10));

        // Helpers: RGB <-> HSL
        const rgbToHsl = (r, g, b) => {
          r /= 255; g /= 255; b /= 255;
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          let h, s, l = (max + min) / 2;
          if (max === min) { h = s = 0; }
          else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max - min);
            switch (max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
          }
          return [h * 360, s, l];
        };
        const hslToRgb = (h, s, l) => {
          h /= 360;
          let r, g, b;
          if (s === 0) { r = g = b = l; }
          else {
            const hue2rgb = (p, q, t) => {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1/6) return p + (q - p) * 6 * t;
              if (t < 1/2) return q;
              if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
              return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
          }
          return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        };

        const [hHue, sSat, lLum] = rgbToHsl(r, g, b);
        const toCss = (rr, gg, bb) => `rgb(${rr} ${gg} ${bb})`;
        const clamp = (v) => Math.min(1, Math.max(0, v));
        const lighten = (percent) => {
          const [rr, gg, bb] = hslToRgb(hHue, sSat, clamp(lLum + percent));
          return toCss(rr, gg, bb);
        };
        const darken = (percent) => {
          const [rr, gg, bb] = hslToRgb(hHue, sSat, clamp(lLum - percent));
          return toCss(rr, gg, bb);
        };

        const brand = toCss(r, g, b);
        const brandSoft = lighten(0.35); 
        const brandDeep = darken(0.2);   

        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b);
        const contrast = luminance > 150 ? "#111111" : "#ffffff";

        const root = document.documentElement.style;
        root.setProperty("--brand", brand);
        root.setProperty("--brand-soft", brandSoft);
        root.setProperty("--brand-deep", brandDeep);
        root.setProperty("--brand-contrast", contrast);
      };
    } catch (_) {

    }
  }, [src]);

  return null;
}
