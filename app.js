const fs = require('fs')

// const files = fs.readdirSync('./')

// console.log(files)

fs.readdir('$', (err, filess)=>{
    if(err){
        console.log(err)
    }else{
        console.log(filess)
    }
})