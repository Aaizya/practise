// Get the paragraph element
const paragraph = document.getElementById("paragraph");

// Task 1: Highlight words over 8 characters with a yellow background
const text = paragraph.innerHTML;
const highlightedText = text.replace(/\b\w{9,}\b/g, '<span class="highlighted">$&</span>');
paragraph.innerHTML = highlightedText;

// Task 2: Add a link back to the source
const sourceLink = document.createElement("a");
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement("afterend", sourceLink);

// Task 3: Split each sentence on a separate line
paragraph.innerHTML = paragraph.innerHTML.replace(/\./g, ".<br>");

// Task 4: Count the number of words and display the count
const words = paragraph.innerText.split(/\s+/);
const wordCount = words.length;
const countDisplay = document.createElement("p");
countDisplay.textContent = `Word Count: ${wordCount}`;
paragraph.insertAdjacentElement("beforebegin", countDisplay);

// Task 5: Replace question marks and exclamation marks
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '&#129300').replace(/\!/g, '	&#128562');
':)'