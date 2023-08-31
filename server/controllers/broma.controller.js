const Broma = require("../models/broma.model");

module.exports.ver_todos = (req, res) => {
    Broma.find()
    .then(bromas => res.json(bromas))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.ver_broma = (req, res) =>{
    Broma.findOne({_id: req.params.id})
    .then(broma => res.json(broma))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.crear_broma = (req, res) => {
    Broma.create(req.body)
    .then(broma => res.json(broma))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.editar_broma = (req, res) => {
    Broma.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(broma => res.json(broma))
        .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.borrar_broma = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
    .then(broma => res.json(result))
    .catch(err => res.json({message:"Hubo un error"+err}));
}