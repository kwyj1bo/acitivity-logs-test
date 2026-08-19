# activity-logs-test

A disposable Vercel project with nothing to protect — built purely to trigger
and observe Activity Log events while exploring what a well-designed activity
timeline should look like.

## What's in here
- `index.html` — static homepage
- `api/hello.js` — a serverless function that echoes `TEST_MESSAGE`, so
  editing env vars has a visible, testable effect after redeploy
- `vercel.json` — minimal zero-build config

## Actions to trigger (see checklist)
- [ ] Deploy `main` to production
- [ ] Push to a branch (`feature/test-branch`) → preview deployment
- [ ] Add `TEST_MESSAGE` env var → redeploy → confirm it shows at `/api/hello`
- [ ] Edit the env var value → redeploy → confirm it changed
- [ ] Delete the env var
- [ ] Add a project domain / alias
- [ ] Remove a domain / alias
- [ ] Toggle Deployment Protection (Vercel Authentication)
- [ ] Create a shareable protection-bypass link
- [ ] Create a Deploy Hook, `curl` it to trigger a deploy without a push
- [ ] Delete the Deploy Hook
- [ ] Change Function Region / Memory / Max Duration for `api/hello.js`
- [ ] Add a project member / collaborator
- [ ] Delete an old deployment
- [ ] Roll back production to a previous deployment
