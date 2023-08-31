const BromaController = require("../controllers/broma.controller")

module.exports = (app) => {
    app.get("/api/bromas/", BromaController.ver_todos);

    app.get("/api/bromas/:id", BromaController.ver_broma);

    app.post("/api/bromas/", BromaController.crear_broma);

    app.put("/api/bromas/:id", BromaController.editar_broma);

    app.delete("/api/bromas/:id", BromaController.borrar_broma);
}