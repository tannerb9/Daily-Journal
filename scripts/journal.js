import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

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
        .then(API.getJournalEntries)
        .then(renderJournalEntries);
      clearForm();
    } else {
      window.alert("Please complete all fields.");
    }
  }
});

document.getElementsByName("moods").forEach((mood) =>
  mood.addEventListener("click", (event) => {
    const mood = event.target.value;
    API.filteredJournalEntries(mood).then((entries) =>
      renderJournalEntries(entries)
    );
  })
);

const createJournalEntry = (date, concepts, journal, mood) => ({
  date: date,
  concepts: concepts,
  journal: journal,
  mood: mood,
});

const entryOutputContainer = document.querySelector("#entryContainer");

entryOutputContainer.addEventListener("click", (event) => {
  openEditor();
  if (event.target.id.startsWith("edit--")) {
    const entryId = event.target.id.split("--")[1];
    API.getEntryById(entryId).then((entry) => prepopulateForm(entry));
  }
});

const entryIdInput = document.querySelector("#entryId");
const conceptsInput = document.querySelector("#editConcepts");
const dateInput = document.querySelector("#editDate");
const moodInput = document.querySelector("#editMood");
const journalInput = document.querySelector("#editJournal");

function prepopulateForm(entry) {
  conceptsInput.value = entry.concepts;
  dateInput.value = entry.date;
  moodInput.value = entry.mood;
  journalInput.value = entry.journal;
  entryIdInput.value = entry.id;
}

function openEditor() {
  document.getElementById("editForm").style.display = "block";
}

const submitEdit = document.querySelector("#submitBtn");

submitEdit.addEventListener("click", (event) => {
  event.preventDefault();
  const entryId = entryIdInput.value;
  const entryObj = {
    date: dateInput.value,
    concepts: conceptsInput.value,
    journal: journalInput.value,
    mood: moodInput.value,
  };
  API.updateEntry(entryObj, entryId)
    .then(API.getJournalEntries)
    .then(renderJournalEntries)
    .then(closeForm);
});

const cancelEdit = document.getElementById("cancelBtn");

cancelEdit.addEventListener("click", (event) => {
  event.preventDefault();
  closeForm();
});

function closeForm() {
  document.getElementById("editForm").style.display = "none";
}

const deleteEntry = document.getElementById("deleteBtn");

deleteEntry.addEventListener("click", (event) => {
  event.preventDefault();
  const entryId = entryIdInput.value;
  API.deleteEntryById(entryId)
    .then(API.getJournalEntries)
    .then(renderJournalEntries)
    .then(closeForm);
});

function clearForm() {
  dateInput.value = "";
  conceptsInput.value = "";
  journalInput.value = "";
  moodInput.value = "";
}

API.getJournalEntries().then(renderJournalEntries);
