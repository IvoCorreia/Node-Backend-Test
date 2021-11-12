const express = require('express')
const app = express()
 app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
});


 app.get('/oi', function (req, res) {
  res.send('Oi você')
});

const herois = ["Mulher Maravilha","Capitã Marvel"," Homem de Ferro"]

 app.get('/herois', function (req, res) {
  res.send(herois)
});
 
 app.get('/herois/:id', function (req, res) {
  
  const id = +req.params.id -1;
  console.log(id, typeof id);

  const item = herois[id];
  res.send(item);
  
  //req.get(id)
  
});


app.post("/herois", function(req, res){
const item = req.body;

 // res.send("criar heroi");
 herois.push(item.nome);
 
 res.send(herois);



});

app.put("/herois/:id", function(req, res){

res.send("atualiza heroi");


});


app.listen(3000)
