# Agents Instructions

This project provides a highly professional, accurate, and structured medical knowledge base on Obstetrics (Sản khoa), Gynecology (Phụ khoa), and Reproductive Medicine (Hỗ trợ sinh sản).

## Tech Stack

- **Framework:** `Nimbus Docs` (`nimbus-docs`) built on top of Astro.
- **Package Manager:** `pnpm` (workspace and dependencies).
- **Linter & Formatter:** `oxlint` and `oxfmt`.

## Directory Structure

This is directory structure:

```text
├── .github/                   # GitHub Actions / Workflows configurations
├── public/                    # Static public assets (Logo, Favicon, etc.)
├── src/
│   ├── assets/                # App assets, logos, fonts
│   ├── components/            # Custom Astro / UI Components
│   ├── content/
│   │   ├── docs/              # Medical documentation files (.md, .mdx)
│   │   │   ├── san-khoa.mdx   # Obstetrics documentation
│   │   │   ├── phu-khoa.mdx   # Gynecology documentation
│   │   │   ├── ho-tro-sinh-san.mdx # Reproductive Medicine documentation
│   │   │   ├── 404.mdx
│   │   │   └── index.mdx      # Homepage of docs
│   │   └── content.config.ts  # Schema definition for Nimbus docs
│   ├── layouts/               # Page Layouts (DocsLayout, BaseLayout)
│   ├── pages/                 # Dynamic Astro Pages
│   └── styles/                # Global CSS styles
├── astro.config.ts            # Astro & Nimbus configuration
├── package.json               # Package dependencies & scripts
├── STYLEGUIDE.md              # Medical document style guide
└── README.md                  # Quick setup and local development guide
```

## Content

All documentation files created or modified under `src/content/docs/` **must strictly adhere to 100% of the style rules defined in the official Style Guide**.

Please read and follow the detailed rules in [**STYLEGUIDE.md**](./STYLEGUIDE.md):

## Development

### CLI Commands

- `pnpm install` - Installs workspace dependencies.
- `pnpm dev` - Starts the local development server at `http://localhost:4321`.
- `pnpm check` - Runs `oxlint` (linter) and `oxfmt` (formatter) simultaneously.
- `pnpm build` - Performs a full production build.
- `pnpm preview` - Local preview of the production build.

### AI Assistant

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.
