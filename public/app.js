const messaages = [
  "Yeet!",
  "Breaking things",
  "[object Object]",
  "We do a little trolling",
  "Trolling complete, return to HQ",
  "<em>screams geometrically</em>",
  "It all returns to nothing",
  "Quite possibly coding",
  "Get in the GitHub repo",
  "Fuck you, <em>uncenters your div</em>",
  "There is a pipe bomb in your mailbox",
  "Questionable Researching",
  "I did a thing",
  "PoE go brrr",
  "Whats that burning smell?",
  "My IP is 127.0.0.1",
  "skill issue",
  "Hmm, that wasn't supposed to happen",
  "Im not addicted to coffee, I can stop at any time",
  "High on caffeine",
  "<strong>G R A P</strong>",
];

document.addEventListener("DOMContentLoaded", () => {
  // Force divs that are supposed to be within as inside of as
  [...document.getElementsByClassName("links")].forEach((elm) => {
    const parent_href = elm.getAttribute("parent-a");
    if (!parent_href) {
      return;
    }
    const parent_a = document.querySelector(`a[href="${parent_href}"]`);
    if (parent_a) {
      parent_a.appendChild(elm);
    }
  });

  // Create the MOTD
  const motd_elm = document.getElementById("motd");
  if (motd_elm) {
    motd_elm.innerHTML =
      messaages[Math.floor(Math.random() * (messaages.length - 1))];
  }
});
