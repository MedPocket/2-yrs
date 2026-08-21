import type { OGImageOptions } from "astro-og-canvas";

export const ogCardConfig = {
  bgGradient: [
    [11, 11, 12],
    [26, 26, 28],
  ],
  border: { color: [39, 39, 42], width: 2, side: "inline-start" },
  padding: 96,
  fonts: ["./src/assets/fonts/DejaVuSans.ttf"],
  logo: {
    path: "./src/assets/logo.png",
    size: [60, 60],
  },
  font: {
    title: {
      color: [250, 250, 250],
      size: 64,
      weight: "Bold",
      lineHeight: 1.1,
      families: ["DejaVu Sans"],
    },
    description: {
      color: [161, 161, 170],
      size: 32,
      weight: "Bold",
      lineHeight: 1.3,
      families: ["DejaVu Sans"],
    },
  },
  format: "PNG",
} satisfies Partial<OGImageOptions>;
