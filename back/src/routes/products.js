var express = require('express');
const {Products} = require('../db');
const productDB = require('../../controller/productDB');
const dbFunc = require('../../controller/dbFunc');
var router = express.Router();
module.exports = router;


router.get('/', async(req,res)=>{
    const {name} = req.query;

    let products = await productDB();

    if(name){
        productName = products.filter(d=>{
            return d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
        });

        if(!productName.length){
            return res.status(404).send({msg: "Producto no encontrado"});
        };
        return res.json(productName);
    };

    return res.json(products);
});

router.delete('/:id', async(req, res) =>{
    const {id} = req.params;
    await Products.destroy({where: {id}});
    res.send({message: "Producto eliminado correctamente"});
});

router.put('/:id', async (req, res) => {
    const { stock, descripcion, precio } = req.body;
    const { id } = req.params;
  
    try {
      const product = await Products.findByPk(id);
      if (product) {
        await product.update({ stock, descripcion, precio });
        return res.json(product);
      }
      return res.status(404).json({ message: 'Product not found' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  

router.get('/:id', async(req,res)=>{
    const {id} = req.params;
    const productDB = await dbFunc.productDB()
    try{
        let oneProduct = productDB.find(d => {
            return d.id === id;
        })

        if(oneProduct){
            try{
                return res.json(oneProduct)
            }catch(e){
                console.log('no se creo correctamente');
            }
        }

    }catch(err){
        return res.status(400).send({msg: "Id incorrecto"});
    }
});


router.post('/', async(req, res) =>{
    const{nombre, descripcion, image, stock, precio} = req.body;

    if(nombre && descripcion && image && stock && precio){
        
        try{           
            const newProduct = await Products.create({
                nombre,
                descripcion,
                image,
                stock,
                precio
            });

            return res.json(newProduct);
        }catch(e){
            return res.send({msg: "Error de carga"})
        }
    }else{
        return res.status(404).send({msg: "Faltan valores basicos"});
    }
})