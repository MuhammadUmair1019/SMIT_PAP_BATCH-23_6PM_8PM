# Repository Guidelines

## Project Structure & Module Organization

This is a small, static browser quiz application with no build system.

- `index.html` contains the page structure, quiz questions, Bootstrap classes, and script includes.
- `script.js` is the active client-side quiz logic loaded by `index.html`.
- `app.js` is an alternate/reference implementation; do not assume it runs unless the HTML script include is changed deliberately.

Keep markup, styling classes, and question inputs aligned: each radio group must use the `q1`, `q2`, and so on naming pattern expected by the JavaScript.

## Build, Test, and Development Commands

There is no `package.json`, compiler, linter, or automated test suite. Run the application by opening `index.html` in a modern browser, or serve the directory locally when testing browser behavior:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`. Use browser DevTools to check the console and verify submissions. Confirm that the score percentage, reveal animation, and page scroll work for both correct and incorrect selections.

## Coding Style & Naming Conventions

Use JavaScript with two-space indentation, semicolons, `const` for references that do not change, and `let` for mutable values. Prefer clear camelCase names such as `correctAnswers`, `totalQuestions`, and `scorePerQuestion`.

Use double quotes for JavaScript strings and preserve the existing HTML indentation. Write event handlers as concise arrow functions. Avoid adding dependencies for simple DOM work; Bootstrap is supplied through the CDN in `index.html`.

## Testing Guidelines

Manually test every quiz update in a browser. At minimum, submit an all-correct attempt, an all-incorrect attempt, and a mixed attempt. If changing the number of questions, update both the HTML input names and the `correctAnswers` array, then verify the calculated percentage reaches the expected value.

## Commit & Pull Request Guidelines

Recent commits use short, lowercase, imperative summaries, for example `add quiz app project` and `sort method`. Keep commits focused and describe the main change in the subject line.

Pull requests should explain the user-visible behavior changed, identify affected files, and include screenshots or a short recording for interface changes. Link the relevant issue or task when one exists, and mention the manual test cases performed.
