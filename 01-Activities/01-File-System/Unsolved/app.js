const fs = require('fs');

fs.writeFile(process.argv[2], process.argv[3], function(err) {
    if(err) 
        return console.log(err)
    console.log('Done!');
});

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
    if(err)
        return console.log(err);
    
    console.log(data);
});