const express = require('express');
const router = express.Router();
const { check, validitionResult } = require('express-validator');
const User = require('models/User');
const bcrypt = require('bcryptjs');

// @route   GET api/users
// @desc    Get users
// @access  Public
router.get('/', (req, res) => {
  res.send('User route');
});

// @route   POST api/users
// @desc    Register user
// @access Public
router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrupt.hash(password, salt);

      await user.save();

      res.send('User registered');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);
