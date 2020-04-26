fetch("http://localhost:8088/entries")
  .then((entries) => entries.json)
  .then((entries) => {
    const entry = makeJournalEntryComponent(entries);
    renderJournalEntries(entry);
  });

const makeJournalEntryComponent = (journal) => {
  return `
  <h1 class="dates">${journal.date}</h1>
  <p class="concepts">${journal.concepts_covered}</p>
  <p class="moods">${journal.mood}</p>
  <p class="briefings">${journal.briefing}</p>
  `;
};

const renderJournalEntries = (journalEntries) => {
  for (item of journalEntries) {
    let entryLog = document.querySelector(".entryLog");
    entryLog.innerHTML += makeJournalEntryComponent(item);
  }
};
