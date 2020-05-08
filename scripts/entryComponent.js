const makeJournalEntryComponent = (journal) => {
  return `
  <h1 class="concepts">${journal.concepts}</h1>
  <p class="dates">${journal.date}</p>
  <p class="moods">${journal.mood}</p>
  <p class="briefings">${journal.journal}</p>
  <hr/>
  `;
};

export default makeJournalEntryComponent;
