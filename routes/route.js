const express = require('express');
const app = express();

const controller = require('../controller/pokemon');

app.get('/', (req, res, next) => {
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
            res.render('pokemon', {
                pokemonList: pokemon,
                page: 1
            });
    });
})
.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
            res.render('pokemon', {
                pokemonList: pokemon,
                page: page
            });
    });
});

module.exports = app;