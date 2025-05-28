const index = (req, res) => {
    res.send(`Lista Posts`)
};

const show = (req, res) => {
    res.send(`Dettaglio Posts con id ${req.params.id}`)
};

const destroy = (req, res) => {
    res.send(`Cancellazione Posts con id ${req.params.id}`)
};

module.exports = { index, show, destroy };