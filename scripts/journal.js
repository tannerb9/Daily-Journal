fetch("http:localhost:3000") // Fetch from the API
  .then((entries) => entries.json) // Parse as JSON
  .then((entries) => {
    // What should happen when we finally have the array?
  });

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
