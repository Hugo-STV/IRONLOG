# Peak

A free, private workout tracker inspired by Hevy and Alpha Progress. It runs entirely in your browser, needs no account or server, and is hosted for free on GitHub Pages.

## Features

**Logging**
- **1,480 exercises** in 21 muscle groups, picked from body-diagram tiles (front, side and rear delts, upper back, lats, abductors and so on) or by search. Each exercise row shows a small figure with the muscle highlighted.
- **How-to photos and steps** for 737 exercises (start and finish photos plus written instructions), with form cues and a video-demo link for every exercise. Tap the figure, "How to", or the ? in the picker.
- **Supersets and giant sets**: link exercises in a workout or routine. The rest timer waits until the round is done and tells you which exercise is next.
- **Drop sets** in one tap (about 20% lighter, no rest), plus warm-up and failure set types.
- **RPE bar** above the keyboard while you enter a set: tap 5–10 to rate effort (tap ? for what each number means). It feeds Smart Weights.
- **Rest timer** with smart defaults that keeps counting after it ends, so every set records how long you actually rested.
- **Warm-up calculator**, **barbell calculator with a picture of the loaded bar**, **kg/lb switch** and a **previous column**.

- **Quick log**: type workouts the way you'd write them, one exercise per line (`Bench 135x8 135x8 135x7`, `Squat 3x5@225`, `Pull-ups BW x10 x8`, `Plank 60s`). Date lines start new workouts. Each line is matched to the right exercise, with its how-to and video.
- **Import photo**: photograph a notebook page or printed log and the app reads it into Quick log for you to check before saving (needs an internet connection; printed text reads best).
- **Last time** line on every exercise with one-tap **Match**, and **Smart Weights** that go up by the right step for each lift and hold when you miss.

- **Exercise pages** show muscles worked (front/back figures with primary and secondary muscles), your strength rank for that lift with what it takes to reach the next level, and your strength progress chart.

**Plans**
- **Plan generator**: answer a few questions (sex, experience, body weight, goal, days per week, session length, equipment, focus muscles, plan length) and get a complete program. It picks a split (full body, upper/lower, push/pull/legs or a mix), chooses exercises for your equipment, and sets sets and rep ranges from your goal and experience. Short sessions pair accessories as supersets.
- **Expert settings**: Track RIR (rate sets by reps in reserve, with a target per phase), Periodization (Volume → Build → Peak blocks) and Deload weeks.
- **Custom programs** from your own routines, with a week-by-week grid, skip or reorder days, and an "up next" card on the Workout tab.

**Progress** (tabs: Overview, This week, Trends, Exercises)
- **Strength score**: each muscle group ranked Beginner → World Class (levels I–III) from your best lifts vs body weight, a colored body map, per-muscle detail with what you need for the next level, progress over 12 weeks, and goals.
- **Lifting legacy**: total weight lifted with milestone badges (from an African elephant to the Great Pyramid of Giza) and a journey view.
- **Your journey** totals, **training split** donut, **top lifts**, **weekly momentum** vs last week, **new records**, **consistency** heatmap and streaks, **volume trend** with an optimal zone, **plateau check**, and a **PR timeline**.
- **Session impact** after every workout: session volume compared to real objects, muscles worked, strength score change, milestone progress and per-exercise sets.
- **Weight suggestions** for every set: double progression inside your rep range, an increase when sets felt easy (RIR 3+), a 10% reset after two misses, and starting estimates from your profile for exercises you've never done.
- **Performance metric** of your choice (1RM, 3RM, 5RM, 8RM, 10RM or 12RM estimate) on charts and records, and a **reference workout** setting (last time you did the exercise, or the same plan day).
- **Muscle map and balance chart**: a front-and-back body map that lights up each muscle by this week's sets (tap one for details), a 30-day radar of every muscle group, and "where to focus" lists with suggested exercises and a one-tap workout builder.
- **Recovery zone**: estimates which muscle groups still need rest (with time left) and which are ready to train, based on how many sets each one did recently.
- **Workout streaks** (weeks in a row), weekly goal, personal records, weekly sets per muscle, body-weight log, training calendar.
- Works offline, installs to your home screen, JSON backup.

**Credits.** Exercise illustrations (the `ill/` folder) are from [Everkinetic](https://github.com/everkinetic/data), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); they were cropped and converted to WebP. Exercise photos and steps come from the public-domain [free-exercise-db](https://github.com/yuhonas/free-exercise-db). Body-map outlines are adapted from [react-body-highlighter](https://github.com/giavinh79/react-body-highlighter) (MIT).

## Put it on GitHub Pages (5 minutes, free)

1. Sign in at [github.com](https://github.com) and click **New repository**. Name it `ironlog`, set it to **Public** (Pages is free for public repos), and create it.
2. On the new repo page, click **uploading an existing file**. Drag in everything from this folder, including the `ill` folder: `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`, `README.md` and `ill/`. Click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then **Save**.
4. After a minute or two your app is live at `https://<your-username>.github.io/ironlog/`.
5. On your phone, open that link and choose **Add to Home Screen** (Safari share menu, or Chrome's ⋮ menu). It then opens full-screen like an app and works offline.

Your workout data never goes to GitHub. The repo only holds the app; your logs live in your phone's browser storage.

## Keep your data safe

Browser storage can be wiped if you clear site data or uninstall the browser. Every few weeks, go to **Settings → Export backup** and save the file (or copy the text into a note). Use **Import backup** to restore it, or to move your history to a new phone.

## Updating the app

Edit `index.html` in GitHub (pencil icon) or upload a new version. If your phone still shows the old version, close and reopen the app once; the offline cache refreshes in the background. To force it, bump the number in `CACHE='ironlog-v9'` in `sw.js`.

## Notes

- Estimated 1RM uses the Epley formula: weight × (1 + reps / 30).
- Warm-up sets don't count toward volume, set counts or records.
- The weekly muscle chart counts working sets for each exercise's main muscle; the shaded 10–20 band is a common guideline for muscle growth.
