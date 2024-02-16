const fs = require('fs');

// Write to file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created successfully');
});

// Read from file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Content of "welcome.txt":', data);
});