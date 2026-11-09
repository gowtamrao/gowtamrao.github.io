# Working on this repo

## Ask before acting
- Always ask before editing, creating or deleting files. Describe the change and wait for approval.
- Always ask before committing or pushing, including to working branches.
- Never push to `main` directly. Changes go to a working branch and reach `main` via a pull request that the owner merges.
- Never change repository settings, branches, workflows or deployments without explicit approval.
- Approval covers only the change described. Ask again for any follow-up or extra change.

## About the project
- Personal site and blog built with Astro, deployed to GitHub Pages at https://gowtamrao.github.io.
- Bio, links, skills and topics: `src/data/site.ts`.
- Posts: Markdown files in `src/content/posts/` (front matter: title, description, date, topic, tags, draft).
- Pushing to `main` publishes the site via `.github/workflows/deploy.yml`.
- Before proposing a commit, run `npm run build` and confirm it succeeds.
