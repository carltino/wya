const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const cors = require('cors');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors())

const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Marker = require('./models/Marker')

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        const isPasswordMatch = (user.password == req.body.password);


        if (!isPasswordMatch) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id }, 'IrisGrace0816'); // Replace with a strong secret
        res.send({ token });
    } catch (error) {
        res.status(403).send(error);
    }
});

app.get('/markers', async (req, res) => {
    try {

        const markers = await Marker.find();
        res.json(markers);
    } catch (error) {
      res.status(500).send(error);

    }

})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));