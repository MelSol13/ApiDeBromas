const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000"  
    })
);

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/broma.routes");
misRutas(app);

app.listen(8000, () => {
    console.log("Servidor corriendo");
});