const express = require(`express`);

const router = express.Router();

router.get(`/`, (req, res) => {
    res.send(`Lista Posts`)
    console.log(`ok index`)
});

router.get(`/:id`, (req, res) => {
    res.send(`Dettaglio posts con id ${req.params.id}`)
    console.log(`ok show`)
});

router.delete(`/:id`, (req, res) => {
    res.send(`Cancellazione del posts con id ${req.params.id}`)
    console.log(`ok delete`)
});

module.exports = router;