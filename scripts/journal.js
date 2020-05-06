import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

// Use a conditional to ensure no blank entries
document.querySelector("#submitButton").addEventListener("click", (event) => {
  event.preventDefault();

  if (
    document.querySelector("#journalDate").checkValidity() == false ||
    document.querySelector("textarea").checkValidity() == false
  ) {
    window.alert("Please use valid characters.");
  } else {
    if (
      document.querySelector("#journalDate").value !== "" &&
      document.querySelector("#conceptsCovered").value !== "" &&
      document.querySelector("textarea").value !== "" &&
      document.querySelector("#moodForTheDay").value !== ""
    ) {
      const date = document.querySelector("#journalDate").value;
      const concepts = document.querySelector("#conceptsCovered").value;
      const journal = document.querySelector("textarea").value;
      const mood = document.querySelector("#moodForTheDay").value;

      const newJournalEntry = createJournalEntry(date, concepts, journal, mood);
      API.saveJournalEntry(newJournalEntry)
        .then((dataJS) => {
          return API.getJournalEntries(dataJS);
        })
        .then((entries) => renderJournalEntries(entries));
    } else {
      window.alert("Please complete all fields.");
    }
  }
});

const createJournalEntry = (date, concepts, journal, mood) => ({
  date: date,
  concepts: concepts,
  journal: journal,
  mood: mood,
});

API.getJournalEntries().then(renderJournalEntries);
