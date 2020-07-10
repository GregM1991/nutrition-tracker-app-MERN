const express = require('express');
const router = express.Router();
const { check, validitionResult } = require('express-validator');
const User = require('models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

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

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users
// @desc    Get list of users
// @access  Public
router.get('/', async (req, res) => {
  let user = await User.findOne({ email });
});

// @route   GET api/users/:id
// @desc    Get a single user
// @access  Public
router.get('/:id', async (req, res) => {
  let user = await User.findOne({ email });
});

// @route   GET api/users
// @desc    Get list of users
// @access  Private
router.put('/:id', (req, res) => {
  // update user and return user/jwt
  // res.send(req.params.id)
});

// @route   GET api/users
// @desc    Get list of users
// @access  Private
router.delete('/:id', (req, res) => {
  // delete specified user
  // res.send(req.params.id)
});
