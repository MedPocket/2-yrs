import { generateOpenGraphImage } from "astro-og-canvas";

import { ogCardConfig } from "./_og-card-config";

export async function renderOgCard(input: {
  title: string;
  description: string;
}): Promise<Uint8Array> {
  const body = await generateOpenGraphImage({
    title: input.title,
    description: input.description,
    ...ogCardConfig,
  });

  return body as unknown as Uint8Array;
}
