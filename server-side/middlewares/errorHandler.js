const errorHandler = (err, req, res, next) => {
  console.log("masuk kedalam error handler nih bray");

  switch (err.name) {
    case 'LoginError':
        res.status(401).json({message: 'Invalid Email Or Password'})
        break;
  
    case 'unauthenticated':
        res.status(400).json({message: 'Forbiden'})
        break

    case 'unauthenticated':
        res.status(403).json({message: 'Forbiden'})
        break

    default:
        res.status(401).json({message: 'Internal Server Error'})
        break;
  }
};


module.exports = errorHandler
