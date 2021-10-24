const middleware = (schema)=>{
  return (req, res, next) => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    }
    const { error } = schema.validate(req.body, options);

    if(error){
      const message = error.details.map(i => i.message).join(',' );
      res.status(422).json({errors: message});
    }
    else{
      next();
    }
  }
}

module.exports = middleware;