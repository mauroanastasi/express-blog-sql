const express = require(`express`);

const app = express();

const port = 3000;

const postsRouter = require(`./router/postsRouter`);

app.use(`/posts`, postsRouter);

app.get(`/`, (req, res) => {
    res.send(`Api post`)
})

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})