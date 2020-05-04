import makeJournalEntryComponent from "./entryComponent.js";

const renderJournalEntries = (entries) => {
  for (let index = 0; index < entries.length; index++) {
    let record = document.querySelector(".entryLog");
    record.innerHTML += makeJournalEntryComponent(entries[index]);
  }
};

export default renderJournalEntries;
