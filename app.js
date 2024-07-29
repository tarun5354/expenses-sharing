const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/expenses-sharing', {
    useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(userRoutes);
app.use(expenseRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
