const makeJournalEntryComponent = (journal) => {
  return `
  <h1 class="dates">${journal.date}</h1>
  <p class="concepts">${journal.concepts}</p>
  <p class="moods">${journal.mood}</p>
  <p class="briefings">${journal.journal}</p>
  `;
};

export default makeJournalEntryComponent;
