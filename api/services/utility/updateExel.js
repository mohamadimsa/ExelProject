const  xlsx = require("xlsx")


const wb = xlsx.readFile("test.xlsx",{cellDates:true})

const wf = wb.Sheets['Feuil1']

const data  = xlsx.utils.sheet_to_json(wf)

data.push({ nom: 'jamra', prenom: 'msa ', ville: 'herblay' })
console.log(data)
let newWB = xlsx.utils.book_new()
let newWF =xlsx.utils.json_to_sheet(data)

xlsx.utils.book_append_sheet(newWB,newWF,'new Data')

xlsx.writeFile(newWB,"test.xlsx")