const Roles = require('../models/roles.model');

exports.getRoles = async (req, res)=>{
    const roles = await Roles.findAll();
    
    res.json({
      data:roles
    })
}