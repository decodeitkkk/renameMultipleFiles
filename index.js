const fs = require('fs');
const path = require('path');



console.log(__dirname)
const folderPath = path.join(__dirname, '/THISFOLDER'); // Specify the path to the parent folder
if (!fs.existsSync(path.join(__dirname,'All_item'))) {
  fs.mkdirSync(path.join(__dirname,"ZIVA",'All_items'));
}

let folders =fs.readdir(folderPath,(err,data)=>{
  // console.log(data[2])
  for(a in data){
    let fn = data[a]
    let item = path.join(folderPath,data[a]);
    let mm = fs.readdir(item,(err,res)=>{
      for(let b in res){
        // console.log(res[b])
        let commonPath = `${folderPath}/${fn}`
        let oldPath =`${folderPath}/${fn}/${res[b]}`;
        let newPath =`${folderPath}/${fn}/${fn}_${b+1}`;
        let np2 = `${folderPath}/All_items/${fn}_${b+1}`;
        let newFolderFiles = path.join(__dirname,'All_items') //`${__dirname}/AllItem/${fn}_${b+1}`
        console.log(oldPath)
        // console.log(commonPath)
        console.log(newPath)

        // after renaming all the files move them to new location from all folders
        // creating a new folder to store all renamed files 
        

          // RENAMING FUNCTION 
          fs.rename(oldPath,newPath,(e)=>{
            if(e){
              console.log(e)
            }else{
            
              console.log("Renamed & moved Successfully")
            }


            
           
          })
      }
    })
  }
})