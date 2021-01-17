const yargs=require("yargs")
//const fs=require('fs')
//yargs=yargs.argv
console.log(yargs.command)

yargs.command({
 command:'add',
 describe:'add1',
 builder(){
   title:{
     title:'note title',
     demandOption:true,
     type: string
   },
   body(){
     title:'note title',
     demandOption:true,
     type: string
   },
   handler() {
   console.log();
   }
   
 },
 
})
yargs.parse()