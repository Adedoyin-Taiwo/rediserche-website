# RediSerche Website v3

A clean public website for RediSerche: research execution, fieldwork infrastructure, participant access, data analysis consultancy, grants and partnerships, and thought leadership.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Important npm note

Do not run `npm audit fix --force`. It can upgrade Next, React, and CMS packages into incompatible major versions. See `TROUBLESHOOTING_NPM.md`.

## Website structure

- Home
- About
- Platform
- Services
- Industries
- Grants & Partnerships
- Participant Network
- Insights
- Contact
- Payments
- Privacy
- Terms

## Insights / CMS

The website reads Insight posts from:

```text
content/insights
```

Each post is a Markdown file with frontmatter. A Decap CMS configuration is included at:

```text
public/admin/config.yml
```

Before using the CMS, update the GitHub repo setting in `public/admin/config.yml`.

## Brand colours

- `#390b76` primary RediSerche purple
- `#191919` primary dark/ink

## Deployment

Deploy the website to Vercel and connect `rediserche.com`. After deployment, update domain/DNS settings in Vercel and your domain registrar.
