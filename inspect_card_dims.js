const fs = require('fs');

// Let's inspect index.html card width and height
// In desktop: grid-template-columns: repeat(4, 1fr) in a container of ~1200px -> each card is ~270px wide, ~160px tall
// But on tablet it is 2x2, on mobile it is 1fr!
// So the width of each card is RESPONSIVE! It changes from ~260px on desktop to ~500px on mobile!
console.log('Responsive cards mean width is dynamic');

