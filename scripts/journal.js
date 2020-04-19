/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journal_entry = {
  date: "",
  concepts_covered: "",
  briefing: "",
  mood: "",
};

// Define an appropriately named variable that will have the value of an array.
let entries = [];

// Once you define that variable and give it a default value of a blank array,
// use the push() method to add the journalEntry object you defined above to the array.

entries.push(journal_entry);

// Take a few minutes and define two or three more JavaScript objects to represent journal
// entries for some other things that you have learned about so far at NSS.

const flexbox = {
  date: "03/27/20",
  concepts_covered: "flexbox",
  briefing:
    "Intro to flexbox. Learned about parent and child containers. Properties placed on parent container affect whole container, while props on child containers only affect targeted child.",
  mood: "dazed & confused",
};

const javascript = {
  date: "04/16/20",
  concepts_covered: "javascript",
  briefing:
    "Intro to javascript. Realized it's an OOPL, like Python. Annoyed it defines a container as 'object' when everything in javascript is considered an object.",
  mood: "tranquil",
};

// Add those new objects to your journal entries array.

entries.push(flexbox);
entries.push(javascript);

console.log(entries);
