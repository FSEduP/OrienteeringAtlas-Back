const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('../config/firebase');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = userCredential.user;
    req.session.uid = uid; 
    res.redirect('/maps');
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    res.redirect('/dashboard');
  }
};

const logout = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      req.session.destroy(err => {
        if (err) {
          console.error('Error al cerrar sesión:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
    res.redirect('/maps');
  } catch (error) {
    res.status(500).send('Error al cerrar sesión');
  }
};

async function registerUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({
      error: "Email and password are required",
    });
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return res.status(200).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    if (error.code === "email-already-in-use") {
      return res.status(409).json({ errorMessage: "El usuario ya existe" });
    }
    return res.status(500).json({ errorMessage: "Error durante el registro. Inténtelo de nuevo más tarde" });
  }
}

module.exports = {
  login,
  logout,
  registerUser,
};