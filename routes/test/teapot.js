/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** teapot router
*/

const express = require('express');
const router = express.Router();

router.get('/teapot', (req, res) => {
    res.status(418).send("I'm a teapot");
});

module.exports = router;
