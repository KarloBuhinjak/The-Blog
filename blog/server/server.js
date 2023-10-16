require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const postRoutes = require('./Routes/post')
const userRoutes = require('./Routes/users')
const authRoutes = require('./Routes/auth')
const commentRoutes = require('./Routes/comments')



require('./Config/DataBaseConfig')


app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);


app.listen(4000, () => {
    console.log('listening on port 4000');
})