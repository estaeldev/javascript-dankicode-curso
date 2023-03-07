const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/src/views'))

var tarefas = ['Arrumar o quarto', 'Comprar no supermercado']

app.post('/', (request, response) => {
    tarefas.push(request.body.tarefa)
    response.render('index', {tarefasList: tarefas})
})

app.get('/', (request, response) => {
    response.render('index', {tarefasList: tarefas})
})

app.get('/deletar/:id', (request, response) => {
    
    tarefas = tarefas.filter((value, index) => {
        if(index != request.params.id) {
            return value
        }
    })
    
    response.render('index', {tarefasList: tarefas})
})

app.listen(5000, () => {
    console.log('Server rodando');
})

