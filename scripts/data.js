const apiUrl = "http://localhost:8088/entries";

const API = {
  getJournalEntries() {
    return fetch(`${apiUrl}`).then((response) => response.json());
  },
  getEntryById(entryId) {
    return fetch(`${apiUrl}/${entryId}`).then((data) => data.json());
  },
  saveJournalEntry(entry) {
    return fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    }).then((response) => response.json());
  },
  filteredJournalEntries(mood) {
    return fetch(`${apiUrl}?q=${mood}`).then((moods) => moods.json());
  },
  updateEntry(entryObj, id) {
    return fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entryObj),
    });
  },
  deleteEntryById(entryId) {
    return fetch(`${apiUrl}/${entryId}`, {
      method: "DELETE",
    });
  },
};

export default API;
