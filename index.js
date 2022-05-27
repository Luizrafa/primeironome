const express=require('express');
const app=express();
const path=require ('path');
const router=express.Router();

const {engine} = require("express-handlebars");


app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },

}))
app.set('view engine', 'handlebars');
router.get('/',function(req,res){
    res.render('index');
})
router.get('/about', function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})

app.use('/',router);
app.use('/aobut',router);
app.listen(process.env.port||3000);
console.log('Servidor Rodando')