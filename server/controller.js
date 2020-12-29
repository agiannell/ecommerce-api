let products = require('./products.json');

module.exports = {
    getProducts: (req, res) => {
        if(req.query.price) {
            const filteredProducts = products.filter(e => e.price >= parseInt(req.query.price))
            return res.status(200).send(filteredProducts)
        }
        res.status(200).send(products)
    },
    getItem: (req, res) => {
        const {id} = req.params;
        const item = products.find(e => e.id === +id)
        if(!item) return res.status(404).send('Item not in list');
        res.status(200).send(item)
    }
}