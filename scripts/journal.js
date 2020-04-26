fetch("http://localhost:8088/entries")
  .then((entries) => entries.json())
  .then((parsedEntry) => {
    console.table(parsedEntry);
    renderJournalEntries(parsedEntry);
  });

const makeJournalEntryComponent = (journal) => {
  return `
  <h1 class="dates">${journal.date}</h1>
  <p class="concepts">${journal.concepts_covered}</p>
  <p class="moods">${journal.mood}</p>
  <p class="briefings">${journal.briefing}</p>
  `;
};

const renderJournalEntries = (entries) => {
  for (let index = 0; index < entries.length; index++) {
    let record = document.querySelector(".entryLog");
    record.innerHTML += makeJournalEntryComponent(entries[index]);
  }
};
