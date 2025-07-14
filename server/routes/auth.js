const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, (req, res) => {
  res.json({ msg: 'This is a protected route', user: req.user });
});

module.exports = router;
