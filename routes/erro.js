module.exports = {
    notFound: (req, res) => res.status(404).send('Not found - 404'),

    serverError: (err, req, res, next) => res.status(500).send('Internal Server Error - 500')
};