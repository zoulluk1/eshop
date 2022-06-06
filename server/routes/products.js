var express = require('express');
var router = express.Router();
var debug = require('debug')('router:products');
const options={
    verbose:console.debug
}
const db = require('better-sqlite3')('products.sqlite', options);



let products = [
    {
        id: 20,
        image: 'https://cdn.alza.cz/Foto/f8/EN/ENDER01V2.jpg',
        productName: "3D tiskárna",
        productCode: "123-456",
        price:10000,
        inStock: 3,
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
    },
    {
        id: 10,
        image: 'https://cdn.prusa3d.com/content/images/product/default/3325.jpg',
        productName: "3D tiskárna",
        productCode: "123-456",
        price:10000,
        inStock: 3,
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
    },

];
router.get("/", function (req, res, next) {
    const row = db.prepare('SELECT * FROM product').all();

    console.log(row);
    res.send(row);
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const product = products.find((a) => a.id === Number.parseInt(id));
        const row = db.prepare('SELECT * FROM product where id = ?').get(id);
        res.send(row);
    } else {

        res.sendStatus(404);
    }
});
router.post("/", (req, res) => {
    const body = req.body;
    const product = {

        productName: body.productName,
        productCode: body.productCode,
        price: body.price,
        inStock: body.inStock,
        text: body.text,
        image: body.image
    }
    const stm = db.prepare('INSERT INTO product (productName,productCode,price,inStock,text,image) values (?,?,?,?,?,?)');
    stm.run(product.productName,product.productCode,product.price,product.inStock,product.text,product.image)
    console.table(product)
    res.send(product);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const product = db.prepare('SELECT * FROM product where id = ?').get(id);
        if (product) {
            Object.assign(product, body);
            const stm = db.prepare("UPDATE product SET productName=?,productCode=?,price=?,inStock=?,text=?,image=? where id=?");
            stm.run(product.productName,product.productCode,product.price,product.inStock,product.text,product.image,parseInt(id));


        } else {
            res.sendStatus(404)
        }
        res.send(product);
    } else {
        res.sendStatus(404);
    }
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
        db.prepare("DELETE FROM product WHERE id=?").run(id)


        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})
module.exports = router;