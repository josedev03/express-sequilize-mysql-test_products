const Productos = require('../models/productos.model');

exports.getProductos = async (req, res)=>{
    const productos = await Productos.findAll();
    
    res.json({
      data:productos
    })
}

exports.registro = async (req, res)=>{
  try {
    let producto = {
      numero_lote: req.body.numero_lote,
      nombre: req.body.nombre,
      precio: req.body.precio,
      cantidad_disponible: req.body.cantidad_disponible,
      fecha_ingreso: req.body.fecha_ingreso
    }
    const nuevoProducto = await Productos.create(producto);
    
    res.json({
      data: nuevoProducto
    })
    
  } catch (error) {
    return res.json({
      errors: error
    })
  }
}

exports.actualizar = async (req, res)=>{
  try {
    await Productos.update({
      numero_lote: req.body.numero_lote,
      nombre: req.body.nombre,
      precio: req.body.precio,
      cantidad_disponible: req.body.cantidad_disponible,
      fecha_ingreso: req.body.fecha_ingreso,
    },
    {
      where: {id: req.params.id}
    });

    res.status(200).json({
      data: "ok"
    })
  } catch (error) {
    return res.json({
      errors: error
    })
  }
}

exports.eliminar = async (req, res)=>{
  try {
    await Productos.destroy({
      where: {id: req.params.id}
    });

    res.status(200).json({
      data: "ok"
    })
  } catch (error) {
    return res.json({
      errors: error
    })
  }
}