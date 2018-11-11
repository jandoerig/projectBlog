"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/*", (req, res) => {
   res.send("here should be the index");
});

app.listen(port, () => {
    console.log(`App listening on port ${ port }`)
});

