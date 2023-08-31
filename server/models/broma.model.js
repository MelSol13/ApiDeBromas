const mongoose = require("mongoose");

const EsquemaBroma = new mongoose.Schema({
    setup: String,
    punchline: String
},{timestamps: true, versionKey:false});

const Broma = mongoose.model("bromas", EsquemaBroma);

module.exports = Broma;

/* Esto aparece en el localhost:8000/api/bromas
[{"_id":"64f118133a7024b49218ab01","setup":"Where do programmers hang out?","punchline":"The Foo Bar","createdAt":"2023-08-31T22:45:39.328Z","updatedAt":"2023-08-31T22:45:39.328Z"},
{"_id":"64f118403a7024b49218ab03","setup":"What sort of music do planets listen to?","punchline":"Nep-tunes","createdAt":"2023-08-31T22:46:24.941Z","updatedAt":"2023-08-31T22:46:24.941Z"},
{"_id":"64f1188d3a7024b49218ab05","setup":"A SQL query walks into a bar, walks up to two tables and asks...","punchline":"Can I join you?","createdAt":"2023-08-31T22:47:41.888Z","updatedAt":"2023-08-31T22:47:41.888Z"}]
*/