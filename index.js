const express =require('express');
const app=express();
const cors =require('cors')
const port =process.env.PORT||5000;

app.use(cors())

const user =[
    {id:1,name:'Janina',gmail:'janina@gmail.com'},
    {id:2,name:'Pappo',gmail:'pappo@gmail.com'},
    {id:3,name:'Alamin',gmail:'alamin@gmail.com'},
    {id:4,name:'Noman',gmail:'noman@gmail.com'},
]


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/user',(req,res)=>{
    res.send(user)
  })

app.listen(port,()=>{
    console.log('server is runing', port);
})