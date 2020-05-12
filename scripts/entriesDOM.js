import makeJournalEntryComponent from "./entryComponent.js";

const renderJournalEntries = (entries) => {
  let record = document.querySelector(".entryLog");
  record.innerHTML = "";
  for (let index = 0; index < entries.length; index++) {
    record.innerHTML += makeJournalEntryComponent(entries[index]);
  }
};

export default renderJournalEntries;
