var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function (req, res) {
    res.send('Hola desde la luna');
});

app.get('/334259', function(req, res) {
    res.json({"name":"Melissa García Mendoza",
        "bio":"Nací el 03/12/1999 en Chihuahua Chihuahua",
        "studies":"Instituto Educativo Morelos 2005-2011. Secundaria Técnica #61 2011-2014. Colegio de bachilleres Plantel 1 2014-2017. Universidad Autónoma de Chihuahua 2018-2022",
        "list":"Programación. Trabajo en equipo"
    })   
})

app.get('/329898', function(req, res) {
    res.json({"name":"Ximena Romero Chavez",
        "bio":"Naci el 01/06/00, en la ciudad de Cuauhtémoc, Chih. Actualmente tengo 20 años y estudio en la Uach",
        "studies":"Adolfo López Mateos 2006-2012. Sécundaria Tecnica #71 2012-2015. CBTis 117 2015-2018. UACh 2018-2022",
        "list":"Aprendo rapido. Tengo un amplio conocimiento en la computación"
    })   
})

app.get('/329782', function(req, res) {
    res.json({
        "name":"Raúl Alejandro Díaz Gutiérrez",
        "bio":"I'm Alejandro Díaz, I'm a 21-year-old Computer Science student who also does streaming and youtube video as a hobby but loves programming",
        "studies":"Federico Stallforth #2102 2006-2012, Secundaria Valentín Gómez Farías 2012-2015, CBTis 228 2015-2018, UACh 2018-2022",
        "list": "I'm a person who likes to work as a team and can get use to any workflow or ambient and I also like to learn from others."
    })   
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)