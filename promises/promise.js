let getBeers = require('./fileIO')

async function main() {
    getBeers()
        .then(result => {
            return JSON.parse(result)
        })
        .then(objBeers => {
            console.log(objBeers[0])
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log('fianlly run')
        })

        let newBeers = await getBeers()
        
        console.log('new beers')
        console.log(JSON.parse(newBeers)[1])
       
        console.log('end of program')
}
main()