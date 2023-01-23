const fs = require('fs');


// // Read file
// const file = fs.readFileSync('./usa.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     });
    
//     console.log(file.toString());

// Delete file
fs.unlink('canada.txt', (err) => {
    if (err) throw err;
    console.log('canada.txt was deleted');
  });

  // Delete file
fs.unlink('usa.txt', (err) => {
    if (err) throw err;
    console.log('usa.txt was deleted');
  });