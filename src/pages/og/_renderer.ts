import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import satori from "satori";

const [interViet400, interViet700, interLatin400, interLatin700] = await Promise.all([
  readFile("./node_modules/@fontsource/inter/files/inter-vietnamese-400-normal.woff"),
  readFile("./node_modules/@fontsource/inter/files/inter-vietnamese-700-normal.woff"),
  readFile("./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"),
  readFile("./node_modules/@fontsource/inter/files/inter-latin-700-normal.woff"),
]);

const truncate = (s: string, max: number) =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + "…";

export async function renderOgCard(input: {
  title: string;
  description: string;
}): Promise<Uint8Array> {
  const title = truncate(input.title || "2 Years", 55);
  const description = truncate(input.description || "Kiến thức sản phụ khoa.", 150);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F0F0F",
          color: "#F5F5F5",
          padding: "70px 60px",
          fontFamily: "Inter, system-ui, sans-serif",
          boxSizing: "border-box",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                fontSize: 28,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                color: "#F5F5F5",
              },
              children: "2 Years",
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 20,
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      margin: 0,
                      fontSize: 72,
                      fontWeight: 700,
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                      color: "#F5F5F5",
                    },
                    children: title,
                  },
                },
                description
                  ? {
                      type: "p",
                      props: {
                        style: {
                          margin: 0,
                          fontSize: 28,
                          fontWeight: 400,
                          lineHeight: 1.4,
                          color: "#CBCBCB",
                        },
                        children: description,
                      },
                    }
                  : null,
              ].filter(Boolean),
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interViet400, weight: 400, style: "normal" },
        { name: "Inter", data: interViet700, weight: 700, style: "normal" },
        { name: "Inter", data: interLatin400, weight: 400, style: "normal" },
        { name: "Inter", data: interLatin700, weight: 700, style: "normal" },
      ],
    },
  );

  const png = new Resvg(svg).render().asPng();
  return new Uint8Array(png);
}
