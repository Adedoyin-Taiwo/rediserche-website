# RediSerche Website Implementation Steps

## Phase 1 - Local setup

1. Install Node.js 20.9 or newer.
2. Install VS Code.
3. Open the project folder in VS Code.
4. Run `npm install`.
5. Run `npm run dev`.
6. Visit `http://localhost:3000`.

Do not run `npm audit fix --force`. See `TROUBLESHOOTING_NPM.md`.

## Phase 2 - Brand cleanup

1. Export the logo from Figma as SVG or PNG.
2. Place it in `public/`.
3. Replace the temporary R mark in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
4. Confirm the colors `#191919` and `#390b76` match the brand.
5. Review all cards, spacing, and mobile layouts.

## Phase 3 - Website content review

Review these routes:

- `/`
- `/about`
- `/platform`
- `/services`
- `/industries`
- `/grants-and-partnerships`
- `/participant-network`
- `/insights`
- `/contact`
- `/payments`
- `/privacy`
- `/terms`

## Phase 4 - CMS setup for Insights

The v3 website uses a Git-based CMS-ready structure instead of embedding Sanity Studio inside the main website app. This keeps the public website lighter and avoids CMS package conflicts.

1. Push this website to GitHub.
2. Open `public/admin/config.yml`.
3. Replace `YOUR_GITHUB_USERNAME/rediserche-website` with the real GitHub repo name.
4. Deploy the website.
5. Configure GitHub OAuth for Decap CMS or use your hosting provider's Git-based CMS instructions.
6. Visit `/admin/index.html` to manage posts.

The public site reads posts from:

```text
content/insights
```

Recommended first insight posts:

- Why Africa needs better research execution infrastructure
- What data quality means in field research
- How RediSerche can support health research and public health studies
- Why financial inclusion research needs local participant access
- Building a trusted participant network for African research

## Phase 5 - Contact form integration

The current contact form sends data to `/api/lead` and logs it. Choose one next integration:

- Send email notification with Resend or SendGrid
- Save leads to Google Sheets
- Save leads to a database
- Send leads to a CRM
- Forward leads into the future Django backend

## Phase 6 - Launch on rediserche.com

1. Push code to GitHub.
2. Import GitHub repository into Vercel.
3. Deploy.
4. Add `rediserche.com` and `www.rediserche.com` in Vercel.
5. Update DNS records at your domain registrar.
6. Confirm SSL works.
7. Test all pages on mobile and desktop.

## Phase 7 - After launch

1. Add downloadable capability statement.
2. Add grant readiness resources.
3. Add case studies as RediSerche executes projects.
4. Add a newsletter capture form.
5. Start building the full platform in a separate codebase.
