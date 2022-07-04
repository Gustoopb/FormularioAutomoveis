const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const lista = [];
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use('/cadastro',(req,res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
  });
app.get('/carros',(req,res)=>{
      res.send(lista);
  })
app.post('/carros',(req,res)=>{
  lista.push(req.body)
    console.log(lista);
    res.send(lista);

})
app.post('/excluirCarros',(req,res)=>{
  lista.splice(parseInt(req.body.i),1)
    console.log(lista);
    res.send(lista);

})

app.post('/alterarCarros',(req,res)=>{
  const carro = lista[parseInt(req.body.i)]
  console.log(carro)
  lista.splice(parseInt(req.body.i),1)
    res.send(carro);
})
app.listen(3333,()=>{console.log('run')});




