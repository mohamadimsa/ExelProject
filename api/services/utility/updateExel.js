const  xlsx = require("xlsx")


const wb = xlsx.readFile("E2E_database.xlsx",{cellDates:true})

const wf = wb.Sheets['Inventory List']

const data  = xlsx.utils.sheet_to_json(wf)

console.log(data)

data.push(  {
    __EMPTY_1: 12,
    __EMPTY_2: 22,
    __EMPTY_3: 22,
    __EMPTY_4: 22,
    __EMPTY_5: 22,
    __EMPTY_6: 2,
    __EMPTY_7: 2,
    __EMPTY_8: 33,
    __EMPTY_9: 33,
    __EMPTY_10: 33,
    __EMPTY_11: 'Yes',
    ' ': 122530,
    __EMPTY_12: 'KKzlkzlzklz',
    __EMPTY_13: 'zzklzkz',
    __EMPTY_14: 'zkzkzklkz',
    __EMPTY_15: '*122530*'
  }
)

console.log(data)

let newWB = xlsx.utils.book_new()
let newWF =xlsx.utils.json_to_sheet(data)

xlsx.utils.book_append_sheet(newWB,newWF,'new Data')

xlsx.writeFile(newWB,"test.xlsx")