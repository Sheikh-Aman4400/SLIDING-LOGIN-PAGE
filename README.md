# Sliding Login Page

A responsive front-end sliding login/signup UI built with HTML, CSS and a small JavaScript helper. Includes a multilingual greeting rotator.

## Features
- Smooth sliding transition between Sign In and Sign Up panels.
- Multilanguage greeting rotation (configurable list).
- Pure CSS layout + minimal JS to toggle panels and rotate greetings.
- Mobile-friendly and easy to customize.

## Files
- `index.html` — main markup (contains forms, overlay and greeting element).
- `stylesheet.css` — all styles and transition rules.
- `script.js` — toggles the sliding panels and rotates greetings.
- `README.md` — this file.

## Installation / Run (macOS)
1. Clone or copy the project folder to your machine.
2. Open the folder in VS Code.
3. Option A — open in browser:
   - Double-click `index.html` or right-click → Open With → Safari/Chrome.
4. Option B — run a local server (recommended):
   - Install Live Server extension in VS Code and click "Go Live", or run:
     - python3 -m http.server 5500
     - open http://localhost:5500/ in your browser

## Usage
- Click "Sign Up" / "Sign In" overlay buttons to toggle panels.
- The greeting in the overlay cycles through configured greetings every few seconds (0.5s transition).

## Customize
- Edit greetings: open `script.js` and modify the `greetings` array.
- Transition timing: match `transitionMs` in `script.js` with CSS (currently 500ms).
- Styling: change colors, sizes and layout in `stylesheet.css`.

Suggested greetings example:
- English: Hello
- German: Hallo
- Russian: Здравствуйте / Привет
- Turkish: Merhaba
- Hindi (India): नमस्ते
- Bhutan: Tashi Delek (བཀྲ་ཤིས་བདེ་ལེགས།)
- Mandarin (China): 你好
- Spanish: Hola
- French: Bonjour
- Japanese: こんにちは

## Troubleshooting
- If sliding doesn't work:
  - Open Developer Tools (Cmd+Option+I) → Console for errors.
  - Ensure `script.js` is referenced at the end of `index.html` and path is correct.
  - Confirm elements with IDs `container`, `signUp`, `signIn`, and the greeting ID exist.
  - Ensure button types are `type="button"` to prevent form submission interfering.
- If greeting transition looks off, verify CSS transition durations match `script.js` `transitionMs`.

## Accessibility & Notes
- Forms are placeholders — integrate with your backend and add validation before use.
- Improve accessibility by adding labels, aria-attributes and focus styles.

## Author
Built by SHEIKH AMAN

## License
Free to use and adapt for personal or educational projects.