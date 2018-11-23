function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function backspaceText(container) {
  container.classList.toggle("typing");
  const textArray = container.textContent.split("");
  const letterDuration = 2500 / textArray.length;

  for (const textLetter in textArray) {
    const index = textArray.length - textLetter;
    container.innerHTML = container.innerHTML.slice(0, index - 1);
    await sleep(letterDuration);
  }

  container.classList.toggle("typing");
}

async function typeItThere(container, text, duration) {
  const textArray = text.split("");
  const letterDuration = duration / textArray.length;

  container.classList.toggle("typing");
  container.innerHTML = "";

  for (const textLetter of textArray) {
    container.innerHTML += textLetter;
    await sleep(letterDuration);
  }

  container.classList.toggle("typing");
}

(async () => {
  const myInfoContainer = document.querySelector("#my-info");
  const myInfoArray = [
    "Full-Stack Web Developer",
    "Computer Sci. Student at UET KSK"
  ];
  while (true) {
    for (const myInfoString of myInfoArray) {
      await typeItThere(myInfoContainer, myInfoString, 2500);
      await sleep(500);
      await backspaceText(myInfoContainer);
    }
  }
})();
