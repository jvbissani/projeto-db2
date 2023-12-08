// import Express from "express";
// import Routes from "./routes"; // use require
const Routes = require("./routes").default;
const Express = require("express");

import { connectToMongoDB, closeMongoDBConnection } from "./config/mongoose.js";

connectToMongoDB().then(r => console.log(r)).catch(e => console.log(e));

const app = Express();

app.use(Express.urlencoded());
app.use(Express.json());

Routes(app);
app.use((req, res) => {
    return res.status(404).send('pagina nao encontrada')
})
app.listen(3333, () => {
    console.log('rodando na http://localhost:3333');
})