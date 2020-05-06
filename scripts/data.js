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
};

export default API;
