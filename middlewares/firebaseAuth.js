const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.uid) {
    return next();
  } else {
    return res.redirect('/dashboard');
  }
};
  
module.exports = {
  isAuthenticated,
};