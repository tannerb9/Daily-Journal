import makeJournalEntryComponent from "./entryComponent.js";

const renderJournalEntries = (entries) => {
  let record = document.querySelector(".entryLog");
  record.innerHTML = "";
  entries.forEach(entry => {
    record.innerHTML += makeJournalEntryComponent(entry);
  })
}

export default renderJournalEntries;
