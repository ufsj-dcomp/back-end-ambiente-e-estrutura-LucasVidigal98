const { response, request } = require('express');
var express = require('express');
var app = express();
app.use(express.json());

app.get('/aplicativo', (request, response) => {
    response.json({message: 'Aplicativo Exemplo!'});
});

app.get('/html', (request, response) => {
    response.send(`
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Lista 03 –Tecnologias Web</h1>
        </body>
    </html>
    `);
});

app.post('/imagens', (request, response) => {
    response.json({imagens: 'Imagem 1 –Imagem 2 –Imagem 3'})
});

app.delete('/clientes/10', (request, response) => {
    response.json({message: 'Cliente  número  10  removido com sucesso'})
});

app.listen(3000, function () { 
    console.log('Aplicacao Web rodando na porta3000!');
});