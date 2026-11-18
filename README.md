# Siddharoodha Dhatti — portfolio site

A one-page portfolio built with [Astro](https://astro.build). It produces plain, fast HTML; the animation uses GSAP and Lenis.

## Run it

You need Node.js 20 or newer.

```bash
npm install        # once
npm run dev        # work on it, opens at http://localhost:4321
npm run build      # make the final site in the dist/ folder
npm run preview    # look at the built site
```

## Change the words

Every word on the home page is in **`src/data/site.ts`**. Open it, change the text between the quotes, save. The two case studies keep their words in their own files: `src/pages/work/studysync.astro` and `src/pages/work/antcluster.astro`.

- `person` — name, email, phone, LinkedIn, resume link
- `hero` — headline, intro, the three tiles, the notes around the phone
- `work.projects` — the two projects, their numbers and links
- `about`, `process`, `contact`, `footer`

One line is still a draft and must be checked by Siddharoodha before the site goes public: the **Role** of the Antcluster project (marked `DRAFT` in the file).

## Swap in the real photo

1. Make a transparent-background PNG (or WebP) of the upper body, about 600 × 750 px or larger.
2. Save it as **`src/assets/cutout.png`** (or `cutout.webp`).
3. Rebuild. The drawing is replaced automatically, and the white sticker outline follows the real silhouette.

Delete the file to go back to the drawing.

## Change the accent colour

Open **`src/styles/tokens.css`** and change one line:

```css
--accent:#C8F250;
```

Buttons, highlights, the sticker and the badge all follow. If the new colour is dark, also set `--accent-ink` to a light colour so text on it stays readable.

## Replace the resume

Replace `public/siddharoodha-resume.pdf` with the new PDF, keeping the same file name.

## Replace project images

Images are in `src/assets/studysync/` and `src/assets/antcluster/`. Replace a file with a new one of the same name and rebuild; Astro resizes and compresses them. The hero phone uses `sketch-home.png`, `wire-home.png` and `final-home.png`.

## Where things are

```
src/
  data/site.ts          all content
  styles/tokens.css     colours, fonts, spacing (accent colour here)
  styles/global.css     all layout and component styles
  layouts/Base.astro    <head>, SEO tags, fonts
  components/           Nav, Hero, Sticker, Work, About, Contact, Footer
  scripts/main.ts       scroll effects, the sketch-to-final slider, the sticker
  pages/index.astro     the page
  assets/               images (optimised at build time)
public/                 favicon, resume PDF, social-share image
```

Case-study pages are `src/pages/work/studysync.astro` and `src/pages/work/antcluster.astro`. They share `src/layouts/Case.astro` and `src/styles/case.css`. The Antcluster text is a draft that Siddharoodha must confirm before the site goes public.

## Put it online

First set the real address in `astro.config.mjs` (`site: 'https://…'`).

- **Netlify** — New site from Git, build command `npm run build`, publish directory `dist`. Or drag the `dist` folder onto app.netlify.com/drop.
- **Vercel** — Import the repository; it detects Astro and needs no settings.
- **GitHub Pages** — Follow https://docs.astro.build/en/guides/deploy/github/ (add the official GitHub Action; if the site lives at `username.github.io/repo`, also set `base: '/repo'` in `astro.config.mjs`).

## Search engines and sharing

- **The address is set in one place.** `siteUrl` in `src/data/site.ts` is `https://sid.dhatti.com`; change it there if the domain changes. The sitemap, `robots.txt`, canonical links and the share image all read it.
- `npm run build` writes `sitemap-index.xml` and `robots.txt` into `dist/`. After the site is live, submit the sitemap in Google Search Console.
- The share image is `public/og.png`; the favicons are in `public/` and were made from his avatar.
- The nav avatar is `src/assets/avatar.png`; the hero sticker is `src/assets/cutout.png`.
- Tool icons are in `src/data/icons.ts`; the list of tools is `toolkit` in `src/data/site.ts`.
