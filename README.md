# Jarvis Pocket Free

Prepared static frontend. Not published or installed yet. No paid service, AI backend, API key or server is required.

## Features
- Tasks and quick notes, saved in the current browser where supported
- Focus timer (keep the app open; not a background alarm)
- Safe arithmetic calculator, unit conversion and spending plan
- Typed everyday commands; optional browser voice recognition with consent
- Read replies aloud where browser speech output is available
- Backup and restore using copyable JSON
- Bottom power switch pauses the timer, stops speech/listening and disables tools
- Starts OFF every time it is opened, even when data is restored
- Offline caching after a successful first hosted visit

This is a command-based helper, NOT an AI chatbot or an Android system assistant. It cannot read messages, operate other apps, run autonomous agents or listen in the background.

## Free GitHub Pages deployment from a phone
Do not make the existing private jarvis-pocket repository public.
1. Create a SEPARATE public repository, e.g. jarvis-pocket-free. Only the clean static files from this folder belong there. Publishing makes the app and its source visible to everyone.
2. Upload index.html, styles.css, core-0.js through core-3.js, power.js, sw.js, manifest.webmanifest, icon.svg and .nojekyll to the repository root. README.md can be included. No build step is needed.
3. Open repository Settings > Pages. Choose Deploy from a branch, main, /(root), Save.
4. Open the HTTPS address GitHub provides after deployment finishes.
5. On Android Chrome, choose the browser menu > Add to Home screen (wording varies). Installation availability depends on the browser.
6. Switch on, add a sample task, reload, switch on again and confirm it remains. Visit once online before testing airplane mode.

GitHub Pages is static hosting. It does not provide the missing AI backend. No workflow is included that publishes automatically.

## Privacy
No personal data, API keys, tokens, analytics or external libraries are bundled. Tasks and notes use localStorage on the device, not GitHub. Browser storage is NOT encrypted; someone with access to the same browser can read it. Export a backup before clearing site data or changing the hosting address. Backups contain private text, so never commit them. Hosting providers still receive normal page requests and associated network information. Search leaves the app only when you tap the results link. Optional browser voice recognition may send audio to the browser provider after permission; it is not guaranteed offline. Switching OFF does not revoke microphone permissions already granted, close a search tab, or erase stored data.

## Package
Only this directory's static files are needed for deployment. The separate tests are not deployment files. ZIP contains no backend, database, user export, environment file or credential.
