import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import satori from "satori";

const [interViet400, interViet700, interLatin400, interLatin700, cloudBuffer] = await Promise.all([
  readFile("./public/fonts/inter-vietnamese-400-normal.ttf"),
  readFile("./public/fonts/inter-vietnamese-700-normal.ttf"),
  readFile("./public/fonts/inter-latin-400-normal.ttf"),
  readFile("./public/fonts/inter-latin-700-normal.ttf"),
  readFile("./public/bg-cloud.png"),
]);

const cloudInkSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="690" height="425">' +
  '<filter id="ink" color-interpolation-filters="sRGB">' +
  '<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" result="opaque"/>' +
  '<feColorMatrix in="opaque" type="luminanceToAlpha" result="luma"/>' +
  '<feComponentTransfer in="luma" result="mask"><feFuncA type="linear" slope="-1.06" intercept="1.05"/></feComponentTransfer>' +
  '<feFlood flood-color="#F5F5F5" result="ink"/>' +
  '<feComposite in="ink" in2="mask" operator="in"/>' +
  "</filter>" +
  `<image xlink:href="data:image/png;base64,${cloudBuffer.toString("base64")}" width="690" height="425" filter="url(#ink)"/>` +
  "</svg>";

const cloudDarkPng = new Resvg(cloudInkSvg).render().asPng();
const cloudDataUri = `data:image/png;base64,${Buffer.from(cloudDarkPng).toString("base64")}`;

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
          position: "relative",
          backgroundColor: "#0F0F0F",
          color: "#F5F5F5",
          fontFamily: "Inter, system-ui, sans-serif",
          boxSizing: "border-box",
          overflow: "hidden",
        },
        children: [
          {
            type: "img",
            props: {
              src: cloudDataUri,
              alt: "",
              width: 690,
              height: 425,
              style: {
                position: "absolute",
                top: 0,
                right: 0,
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: 70,
                left: 50,
                fontSize: 28,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                color: "#F5F5F5",
              },
              children: "2 Years",
            },
          },
          {
            type: "h1",
            props: {
              style: {
                position: "absolute",
                left: 50,
                right: 80,
                bottom: 241,
                margin: 0,
                fontSize: 80,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#F5F5F5",
                display: "flex",
              },
              children: title,
            },
          },
          description
            ? {
                type: "p",
                props: {
                  style: {
                    position: "absolute",
                    left: 50,
                    right: 80,
                    top: 413,
                    margin: 0,
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "#CBCBCB",
                    display: "flex",
                  },
                  children: description,
                },
              }
            : null,
        ].filter(Boolean),
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
