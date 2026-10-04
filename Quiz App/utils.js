export const htmlQuestions = [
  {
    question: "Which tag is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: "<ul>",
  },
  {
    question: "Which HTML tag is used to create a table row?",
    options: ["<td>", "<th>", "<tr>", "<table-row>"],
    correct: "<tr>",
  },
  {
    question: "Which attribute specifies the destination of a link?",
    options: ["src", "href", "link", "target"],
    correct: "href",
  },
  {
    question: "Which tag is used to create a form in HTML?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    correct: "<form>",
  },
  {
    question: "Which input type hides the characters entered by a user?",
    options: ["text", "hidden", "password", "secure"],
    correct: "password",
  },
  {
    question: "Which tag is used to create a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    correct: "<br>",
  },
  {
    question: "Which HTML tag is used to define a navigation section?",
    options: ["<navigate>", "<nav>", "<navigation>", "<menu-bar>"],
    correct: "<nav>",
  },
  {
    question: "Which attribute provides alternative text for an image?",
    options: ["title", "alt", "name", "description"],
    correct: "alt",
  },
  {
    question: "Which tag is used to play video in HTML5?",
    options: ["<media>", "<movie>", "<video>", "<play>"],
    correct: "<video>",
  },
  {
    question: "Which declaration specifies that an HTML document uses HTML5?",
    options: ["<html5>", "<doctype html>", "<!DOCTYPE html>", "<document>"],
    correct: "<!DOCTYPE html>",
  },
];

export const cssQuestions = [
  {
    question: "Which CSS property changes the size of text?",
    options: ["font-style", "font-size", "text-size", "text-weight"],
    correct: "font-size",
  },
  {
    question: "Which property makes text bold?",
    options: ["font-weight", "text-decoration", "font-style", "text-align"],
    correct: "font-weight",
  },
  {
    question: "Which property adds space inside an element's border?",
    options: ["margin", "padding", "gap", "spacing"],
    correct: "padding",
  },
  {
    question: "Which property adds space outside an element's border?",
    options: ["padding", "border-spacing", "margin", "gap"],
    correct: "margin",
  },
  {
    question: "Which CSS property rounds the corners of an element?",
    options: ["border-style", "border-radius", "corner-radius", "outline"],
    correct: "border-radius",
  },
  {
    question: "Which value of display enables CSS Grid?",
    options: [
      "display: flex",
      "display: block",
      "display: grid",
      "display: inline",
    ],
    correct: "display: grid",
  },
  {
    question: "Which CSS property controls the space between flex items?",
    options: ["padding", "gap", "margin-top", "border"],
    correct: "gap",
  },
  {
    question: "Which CSS unit is relative to the root element's font size?",
    options: ["px", "vh", "rem", "cm"],
    correct: "rem",
  },
  {
    question:
      "Which pseudo-class applies styles when the mouse is over an element?",
    options: [":active", ":focus", ":hover", ":visited"],
    correct: ":hover",
  },
  {
    question: "Which CSS rule is used to apply styles based on screen size?",
    options: ["@keyframes", "@media", "@import", "@font-face"],
    correct: "@media",
  },
];

export const javascriptQuestions = [
  {
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: ["<!--", "//", "**", "##"],
    correct: "//",
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correct: "JSON.parse()",
  },
  {
    question: "Which array method removes the last element?",
    options: ["push()", "shift()", "pop()", "unshift()"],
    correct: "pop()",
  },
  {
    question: "Which method converts a string to lowercase?",
    options: ["toLowerCase()", "lowerCase()", "toSmall()", "changeCase()"],
    correct: "toLowerCase()",
  },
  {
    question: "Which loop executes a block while a condition is true?",
    options: ["if", "while", "switch", "function"],
    correct: "while",
  },
  {
    question: "Which statement is used to make a decision between conditions?",
    options: ["return", "break", "if...else", "import"],
    correct: "if...else",
  },
  {
    question: "Which operator returns the remainder of a division?",
    options: ["/", "*", "%", "**"],
    correct: "%",
  },
  {
    question: "Which method selects the first element matching a CSS selector?",
    options: [
      "getElementById()",
      "querySelector()",
      "querySelectorAll()",
      "getElementsByClassName()",
    ],
    correct: "querySelector()",
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["func", "method", "function", "define"],
    correct: "function",
  },
  {
    question: "What does addEventListener('click', ...) do?",
    options: [
      "Creates a new HTML element",
      "Runs a callback when a click event occurs",
      "Changes an element's CSS automatically",
      "Deletes an event permanently",
    ],
    correct: "Runs a callback when a click event occurs",
  },
];
