import express from "express";
import { router } from "./users/router.js";

const PORT = 8000

const app = express()

app.get('/hello', (req, res) => {
    res.send("Hello")
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Server was started on http://localhost:${PORT}`);

})