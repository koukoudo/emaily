const express = require('express');
require('./services/passport');

const app = express();

console.log("HELLO WORLD");

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);