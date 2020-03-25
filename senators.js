import { senators } from './data/senators'

export const republicans = () => {

  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.party === "Republican") { rtnValue = true }

    return rtnValue

  })
}



export const democrats = () => {
  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.party === "Democrat") { rtnValue = true }

    return rtnValue

  })

}

export const independents = () => {
  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.party === "Independent") { rtnValue = true }

    return rtnValue

  })

}

export const males = () => {

  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.person.gender === "male") { rtnValue = true }

    return rtnValue

  })


}

export const females = () => {
  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.person.gender === "female") { rtnValue = true }

    return rtnValue

  })
}

export const byState = () => {
  return senators.filter((senator) => {

    let rtnValue = false
    if (senator.state === "UT") { rtnValue = true }
    return rtnValue

  })
}

//start of mapping
// 2. Map the array to format each object to look like this: 
//     ```js
//       { firstName: '', lastName: '', party: '', gender: ''}

// let final = lagers.map((beer) =>{
//   return new Beer(beer)
// })
//var arr = Object.keys(obj).map(key => { if (obj[key]) return { key: obj[key] } })
//array.map(person => { let newPerson = {} })
export const mapping = () => {

  let array = senators.map(senator => {
    let newPerson = {
      firstName: senator.person.firstname,
      lastName: senator.person.lastname,
      party: senator.party,
      gender: senator.person.gender
    }

    // console.log(newPerson)
    // console.log(person)
    return newPerson


  })
  return array
}



// describe(`Reducing`, () => {

//   it(`should out an object identifying party counts`, () => {
//     const results = Exercise.reducedCount()
//     expect(results).to.not.be.false()
//     expect(results).to.be.an.object()
//     expect(results.republican).to.be.equal(52)
//     expect(results.democrat).to.be.equal(46)
//     expect(results.independent).to.be.equal(2)
//   })


//array1.reduce((acc, curr) =>{ your code here },{})
// let result = {
//   republican:52,
//   democrat:46,
//   independent:2
// }
export const reducedCount = () => {
  let result = senators.reduce((acc, cur) => {
    console.log("acc", acc)
if (cur.party === "Republican") {
  console.log(cur.party)
  acc.republican = acc.republican+1

  return acc
}
if (cur.party === "Democrat") {
  console.log(cur.party)
  acc.democrat = acc.democrat+1

  return acc
}
if (cur.party === "Independent") {
  console.log(cur.party)
  acc.independent = acc.independent+1

  return acc
}
return acc
  }, { republican: 0, democrat: 0, independent: 0 })

  //console.log(result)
  return result
}


//const REPLACE_ME_WITH_CODE = false
