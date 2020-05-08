const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries").then((response) =>
      response.json()
    );
  },
  saveJournalEntry(entry) {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    }).then((response) => response.json());
  },
  filteredJournalEntries(mood) {
    return fetch(`http://localhost:8088/entries?q=${mood}`).then((moods) =>
      moods.json()
    );
  },
};

export default API;
