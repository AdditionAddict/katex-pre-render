import katex from "katex";

// measure time to render 5000 math examples
performance.mark("start");

// render lots of math examples
const NUM_EXAMPLES = 1000;

// Define an array of 10 LaTeX strings, randomly pick one to render each time
const latexStrings = [
  "c = \\pm\\sqrt{a^2 + b^2}",
  "\\frac{d}{dx} \\left( \\int_{0}^{x} f(u)\\,du\\right) = f(x)",
  "\\sum_{n=1}^{\\infty} 2^{-n} = 1",
  "e^{i\\pi} + 1 = 0",
  "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
  "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}",
  "\\lim_{x \\to \\infty} \\frac{1}{x} = 0",
  "\\int_{a}^{b} x^2 dx = \\frac{1}{3}(b^3 - a^3)",
  "\\log_b x = \\frac{\\log_a x}{\\log_a b}",
  "\\Phi(x) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^{x} e^{-\\frac{t^2}{2}} dt",
];

const container = document.createElement("div");
document.body.appendChild(container);

// loop and render
for (let i = 0; i < NUM_EXAMPLES; i++) {
  const p = document.createElement("p");
  container.appendChild(p);

  // pick a random LaTeX string from the array
  const randomIndex = Math.floor(Math.random() * latexStrings.length);
  p.innerHTML = katex.renderToString(latexStrings[randomIndex]);
}

performance.mark("end");
performance.measure("start to end", "start", "end");
const measure = performance.getEntriesByName("start to end")[0];
console.log(measure.duration);
