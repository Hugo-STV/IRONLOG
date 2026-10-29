# Ironlog

A free, private workout tracker inspired by Hevy and Alpha Progress. It runs entirely in your browser, needs no account or server, and is hosted for free on GitHub Pages.

## Features

**Logging**
- **1,480 exercises** in 21 muscle groups, picked from body-diagram tiles (front, side and rear delts, upper back, lats, abductors and so on) or by search. Each exercise row shows a small figure with the muscle highlighted.
- **How-to photos and steps** for 737 exercises (start and finish photos plus written instructions), with form cues and a video-demo link for every exercise. Tap the figure, "How to", or the ? in the picker.
- **Supersets and giant sets**: link exercises in a workout or routine. The rest timer waits until the round is done and tells you which exercise is next.
- **Drop sets** in one tap (about 20% lighter, no rest), plus warm-up and failure set types.
- **Rest timer** with smart defaults that keeps counting after it ends, so every set records how long you actually rested.
- **Warm-up calculator**, **barbell calculator with a picture of the loaded bar**, **kg/lb switch** and a **previous column**.

**Plans**
- **Plan generator**: answer a few questions (sex, experience, body weight, goal, days per week, session length, equipment, focus muscles, plan length) and get a complete program. It picks a split (full body, upper/lower, push/pull/legs or a mix), chooses exercises for your equipment, and sets sets and rep ranges from your goal and experience. Short sessions pair accessories as supersets.
- **Expert settings**: Track RIR (rate sets by reps in reserve, with a target per phase), Periodization (Volume → Build → Peak blocks) and Deload weeks.
- **Custom programs** from your own routines, with a week-by-week grid, skip or reorder days, and an "up next" card on the Workout tab.

**Progress**
- **Weight suggestions** for every set: double progression inside your rep range, an increase when sets felt easy (RIR 3+), a 10% reset after two misses, and starting estimates from your profile for exercises you've never done.
- **Performance metric** of your choice (1RM, 3RM, 5RM, 8RM, 10RM or 12RM estimate) on charts and records, and a **reference workout** setting (last time you did the exercise, or the same plan day).
- **Workout streaks** (weeks in a row), weekly goal, personal records, weekly sets per muscle, body-weight log, training calendar.
- Works offline, installs to your home screen, JSON backup. Exercise photos and steps come from the public-domain [free-exercise-db](https://github.com/yuhonas/free-exercise-db).

## Put it on GitHub Pages (5 minutes, free)

1. Sign in at [github.com](https://github.com) and click **New repository**. Name it `ironlog`, set it to **Public** (Pages is free for public repos), and create it.
2. On the new repo page, click **uploading an existing file**. Drag in every file from this folder: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`, `README.md`. Click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then **Save**.
4. After a minute or two your app is live at `https://<your-username>.github.io/ironlog/`.
5. On your phone, open that link and choose **Add to Home Screen** (Safari share menu, or Chrome's ⋮ menu). It then opens full-screen like an app and works offline.

Your workout data never goes to GitHub. The repo only holds the app; your logs live in your phone's browser storage.

## Keep your data safe

Browser storage can be wiped if you clear site data or uninstall the browser. Every few weeks, go to **Settings → Export backup** and save the file (or copy the text into a note). Use **Import backup** to restore it, or to move your history to a new phone.

## Updating the app

Edit `index.html` in GitHub (pencil icon) or upload a new version. If your phone still shows the old version, close and reopen the app once; the offline cache refreshes in the background. To force it, bump `CACHE='ironlog-v4'` to `v5` in `sw.js`.

## Notes

- Estimated 1RM uses the Epley formula: weight × (1 + reps / 30).
- Warm-up sets don't count toward volume, set counts or records.
- The weekly muscle chart counts working sets for each exercise's main muscle; the shaded 10–20 band is a common guideline for muscle growth.
