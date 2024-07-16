// backend/routes/auth.js
import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password,
        });

        await user.save();
        const redirectUrl = "/signin"
        res.status(201).json({ msg: 'User registered successfully', redirectUrl });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});
router.post('/signin', async (req, res) => {
    const { username } = req.body;

    try {
        let user = await User.findOne({ username });
        if (user) {
            const redirectUrl = "/"
            return res.status(201).json({msg:'thanks for sining in', redirectUrl});
        }
        res.status(400).json({ msg: 'User not registered' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

export default router;
