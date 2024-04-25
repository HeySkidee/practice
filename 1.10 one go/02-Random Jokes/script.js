var jokes = require('one-liner-joke');
var figlet = require('figlet');

var heading = new figlet("Dank Bot", (err, data) => {
        if(err){
            console.log("something went wrong...");
            console.dir(err)
            return;
        }
        console.clear();
        console.log(data);
    }) 

heading.then(()=>{
    console.log(`\n` + jokes.getRandomJoke().body + `\n`);
})
