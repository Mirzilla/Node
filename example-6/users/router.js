import { Router } from "express";

const router = Router();

router.post('/login', (req, res) => {
    res.send('login')
})

router.post('/registration', (req, res) => {
    res.send('registration')
})

export {router}