//add comments for promise assignment
//add readme.txt file
//promise allows us to use sycronus as asyncronus
let fs = require('fs');

function getBeers() {

    return new Promise((resolve, reject) => {

        fs.readFile('beers.txt', 'UTF8', (error, data) => {

            if (error != null) {
                reject(error)
            } else {
                resolve(data)
            }
        }) //end of readFile
    })
}// end of getBeers
module.exports = getBeers


