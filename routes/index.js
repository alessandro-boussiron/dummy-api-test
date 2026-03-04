/*
** EPITECH PROJECT, 2026
** epytodo-test
** File description:
** main routes
*/

const express = require('express');
const router = express.Router();

// Import all route modules
const testRouter = require('./test/teapot');

// Mount sub-routers
router.use('/test', testRouter);

module.exports = router;
