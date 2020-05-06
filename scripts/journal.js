import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

// Use a conditional to ensure no blank entries
document.querySelector("#submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  debugger;
  const date = document.querySelector("#journalDate").value;
  const concepts = document.querySelector("#conceptsCovered").value;
  const journal = document.querySelector("textarea").value;
  const mood = document.querySelector("#moodForTheDay").value;

  const newJournalEntry = createJournalEntry(date, concepts, journal, mood);
  API.saveJournalEntry(newJournalEntry)
    .then((dataJS) => {
      return API.getJournalEntries();
    })
    .then((entries) => renderJournalEntries(entries));
});

const createJournalEntry = (date, concepts, journal, mood) => ({
  date: date,
  concepts: concepts,
  journal: journal,
  mood: mood,
});

API.getJournalEntries().then(renderJournalEntries);
