const express = require("express");
const app = express();

app.use(express.json())

app.post("/webhook", (req, res) => {
    console.log("Request Body: ");
    console.dir(req.body, { depth: 10 });

    console.log("Request Headers: ");
    console.dir(req.headers, { depth: 10 });

    const ok = { message: "OK" };
    res.status(200).json(ok);
})

const PORT = 5000;
app.listen(PORT, () => console.log("Server started at port: ", PORT));
