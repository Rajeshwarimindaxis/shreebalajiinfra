const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

// Find occurrences of requirement or popup on right
const matches = [...content.matchAll(/class="[^"]*(?:footerPopup|submit|requirement|drawer|sideTab|enq)[^"]*"/gi)];
console.log('Matches:', matches.slice(0, 10).map(m => m[0]));

const fpIdx = content.indexOf('footerPopup');
if (fpIdx !== -1) {
  console.log('footerPopup snippet:');
  console.log(content.substring(fpIdx - 50, fpIdx + 500));
}

// Check where "Submit Your Requirement" appears in index.html
const reqIdx = content.indexOf('Submit Your Requirement');
if (reqIdx !== -1) {
  console.log('Submit Your Requirement snippet:');
  console.log(content.substring(reqIdx - 150, reqIdx + 250));
}

