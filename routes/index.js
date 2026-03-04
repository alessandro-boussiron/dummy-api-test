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
const nameRouter = require('./test/name');
const dateRouter = require('./test/date');

// Mount sub-routers
router.use('/test', testRouter);
router.use('/name', nameRouter);
router.use('/date', dateRouter);

module.exports = router;
