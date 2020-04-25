const entries = [
  {
    date: "03/27/20",
    concepts_covered: "Flexbox",
    briefing:
      "Intro to flexbox. Learned about parent and child containers. Properties placed on parent container affect whole container, while props on child containers only affect targeted child.",
    mood: "Dazed & Confused",
  },
  {
    date: "04/16/20",
    concepts_covered: "Javascript",
    briefing:
      "Intro to javascript. Realized it's an OOPL, like Python. Annoyed it defines a container as 'object' when everything in javascript is considered an object.",
    mood: "Annoyed",
  },
];

const makeJournalEntryComponent = (journal) => {
  return `
  <h1 class="dates">${journal.date}</h1>
  <p class="concepts">${journal.concepts_covered}</p>
  <p class="moods">${journal.mood}</p>
  <p class="briefings">${journal.briefing}</p>
  `;
};

const renderJournalEntries = (JournalEntries) => {
  for (item of entries) {
    let entryLog = document.querySelector(".entryLog");
    entryLog.innerHTML += makeJournalEntryComponent(item);
  }
};

renderJournalEntries(entries);
