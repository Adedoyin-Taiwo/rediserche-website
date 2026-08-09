# RediSerche Website npm Troubleshooting

## What happened

The first install succeeded, but npm reported warnings and vulnerabilities. The problem started when `npm audit fix --force` was run. That command is allowed to make breaking major upgrades, and it upgraded framework/CMS packages into incompatible versions.

## What to do now

Use Node.js 20.9 or newer. From the project folder, run:

```bash
rmdir /s /q node_modules
 del package-lock.json
npm install
npm run dev
```

PowerShell alternative:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run dev
```

## Do not use this command

```bash
npm audit fix --force
```

Use it only when we intentionally plan a framework upgrade and update the code at the same time.

## Why this version is cleaner

This v3 website removes the embedded Sanity Studio dependency from the main website app. The website still has an Insights/CMS-ready structure, but the content system is separated from the public website dependencies so the public site is easier to install, run, and deploy.
