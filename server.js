var http =require('http')
var fs= require('fs')
var path= require('path')
const options={
   hostname: 'jsonplaceholder.typicode.com',
   port: 80,
   path:'/posts',
   method: 'GET'
}

var server=http.get(options, (res)=>{
   let data=''
   res.on('data', (chunk)=>{
      data+=chunk
   })
   res.on('end', ()=>{
      folder=path.join(__dirname, 'result')
      fs.mkdir(folder, (err)=>{
         if (!err){
            console.log('success')
         }else{
            console.error(err);
         }
         fs.writeFile(path.join(folder, 'posts.txt'), data, err=>{
            if (err){
               console.log(err)
               return
            }else{
               console.log('done writing')
            }
         })
      })
   })
})
 