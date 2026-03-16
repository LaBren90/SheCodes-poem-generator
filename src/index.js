function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Watch your poem appear here...",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
