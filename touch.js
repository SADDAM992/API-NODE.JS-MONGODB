const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const postsRoutes = require('./routes/api/post_controller')
const bodyParser = require('body-parser')
const app = express();

app.use(express.json());


mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));
app.use('/api/crud', postsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));