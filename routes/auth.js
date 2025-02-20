// routes/auth.js
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// router.post('/register', async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).send({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });
//         if (!user) {
//             return res.status(400).send({ message: 'Invalid credentials' });
//         }
//         const isPasswordMatch = await user.comparePassword(req.body.password);
//         if (!isPasswordMatch) {
//             return res.status(400).send({ message: 'Invalid credentials' });
//         }
//         const token = jwt.sign({ _id: user._id }, 'IrisGrace0816'); // Replace with a strong secret
//         res.send({ token });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// module.exports = router;