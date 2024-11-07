const notFound = (req, res)=> {
    res.status(404).send('Page do not exist');

};
module.exports = notFound;