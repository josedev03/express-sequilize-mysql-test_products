const bycript = require('bcrypt');
const Usuarios = require('../models/usuarios.model');

exports.getUsuarios = async (req, res)=>{
    try {
      const usuarios = await Usuarios.findAll();
      res.json({
        data:usuarios
      })
    } catch (error) {
      return res.json({
        errors: error
      })
    }
}

exports.registro = async (req, res)=>{
  try {
    let passwordHash = await bycript.hash(req.body.password, 8);
    let user = {
      id_roles: req.body.id_roles,
      nombre: req.body.nombre,
      correo: req.body.correo,
      password: passwordHash
    }
    const nuevoUsuario = await Usuarios.create(user);
    
    res.json({
      data: nuevoUsuario
    })
    
  } catch (error) {
    return res.json({
      errors: error
    })
  }
}

exports.autenticacion = async (req, res) =>{

  try {
    const usuario = await Usuarios.findOne({
        where: {
            correo: req.body.correo
        }
    })

    if(usuario){
      let validationPassword = await bycript.compare(req.body.password, usuario.dataValues.password);

      if(!validationPassword){
        res.json({
          errors: 'Failded login'
        })
      }
      else{
        res.json({
          data: 'login successfull'
        })
      }
    }
    else{
      res.json({
        errors: 'Failded login'
      })
    }
  } catch (error) {
    return res.json({
      errors: error
    })
  }
}

/*exports.nosotros = (req, res)=>{
    res.render('nosotros', {
        nombrePagina: 'nosotrosTitle'
    });
}

exports.formularioProyecto = async  (req, res)=>{
    const proyectos = await Proyectos.findAll();

    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    });
}

exports.nuevoProyecto = async (req, res)=>
{
    let errores = [];
    const {nombre} = req.body;

    if(!nombre){
        errores.push({"text": "Agrega un Nombre al proyecto"});
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        const proyecto = await Proyectos.create({nombre});
        res.redirect('/');
    }
}

exports.formularioEditar = async (req, res) =>{
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    // render a la vista
    res.render('nuevoProyecto', {
        nombrePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    })
}

exports.actualizarProyecto = async (req, res)=>
{
    let errores = [];
    const {nombre} = req.body;

    if(!nombre){
        errores.push({"text": "Agrega un Nombre al proyecto"});
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        await Proyectos.update(
            {nombre: nombre},
            {where: {id: req.params.id}}
        );
        res.redirect('/');
    }
}

exports.eliminarProyecto = async (req, res, netx)=>{
    const {urlProyecto} = req.query;
    const resultado = await Proyectos.destroy({where: {url: urlProyecto}});

    if(!resultado){
        return netx();
    }

    res.status(200).send('Proyecto eliminado correctamente');
}*/