const {Products} = require('../src/db');

module.exports = {
    productDB: async function(){
        let productDB = await Products.findAll();

        let result = productDB.map((d)=> {
            return{
                id: d.id,
                nombre: d.nombre,
                descripcion: d.descripcion,
                stock:d.stock,
                image: d.image,
                precio: d.precio
            }
        })
        return result;
    }
}