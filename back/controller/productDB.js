const dbFunc =require('./dbFunc')

async function productDB(){
    let products = await dbFunc.productDB();

    products = products.map((d) =>{
        return {
            id: d.id,
            image: d.image,
            nombre: d.nombre,
            descripcion: d.descripcion,
            stock: d.stock,
            precio: d.precio
        };
    });

    return products;
};

module.exports = productDB;