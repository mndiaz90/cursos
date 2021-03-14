const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const uri = process.env.MONGODB_URI;

require('./models/Curso')

const Curso = mongoose.model('curso')
const server = express();

server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  server.use(cors())
  next()
})

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('funfou')
}).catch((error) => {
  console.log('nao funfou' + error)
});

server.get('/cursos', (req, res) => {
  Curso.find({}).then((curso) => {
    res.json(curso)
  }).catch((error) => {
    return res.status(400).json({
      error: true,
      message: 'Nao tem curso cadastrado'
    })
  })
})

server.post('/curso/create', (req, res) => {
  const curso = Curso.create(req.body, (error) => {
    if (error) return res.status(400).json({
      error: true,
      message: 'Curso nao cadastrado com sucesso'
    })

    return res.status(200).json({
      error: false,
      message: 'Curso cadastrado com sucesso'
    })
  })

})

server.listen(8080)