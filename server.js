const express=require('express')
const parser=require('body-parser')
const app=express();
const path=require('path')
const fs=require('fs')
const database=require('./app/data/database.json');


app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
app.use(express.static(path.resolve(__dirname,'contents')));
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(express.static(path.join(__dirname,'/app/icons')))
app.use(express.static(path.join(__dirname,'/app/scripts')))
app.use(express.static(path.join(__dirname,'/app/style')))
//app.use(express.static(path.join(__dirname,'./app')));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/app/index.html'))
})

app.get('/datatable.html',(req,res)=>{
  if(database.user.isLogin){
    res.sendFile(path.join(__dirname+'/app/datatable.html'))
  }else{
    res.redirect('/')
  }
})


app.get('/get-data',(req,res)=>{
  res.json(database.datas)
})

app.post('/login',(req,res)=>{
  let loginData=req.body;
  if(loginData.name===database.user.name&&loginData.password===database.user.password){
    database.user.isLogin=true;
    fs.writeFileSync('./app/data/database.json',JSON.stringify(database));
    res.redirect('/datatable.html')
  }else{
    res.redirect('/')
  }
})

app.get('/logout',(req,res)=>{
  database.user.isLogin=false;
  fs.writeFileSync('./app/data/database.json',JSON.stringify(database));
  res.redirect('/')  
})

app.post('/create-paipulate',(req,res)=>{
 let data=req.body;
     data['dateTime']=new Date().toGMTString();
     console.log(data)
 database.datas.push(data);
 fs.writeFileSync('./app/data/database.json',JSON.stringify(database));
 res.redirect('/index.html')
})

app.listen(5500,()=>{
 console.log(__dirname)
})