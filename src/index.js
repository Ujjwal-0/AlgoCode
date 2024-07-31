const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHanlder');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.get('/ping' ,(req,res) => {
    return res.json({message: 'Problem service is alive'});
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
    /*try{
        throw new BaseError("Some error", 404, {errorMessage: "Something"});
    }
    catch(error){
        console.log("Something went wrong", error);
    }
    finally{
        console.log("finally executed");
    }*/
});