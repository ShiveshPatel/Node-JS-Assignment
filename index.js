const express = require('express');
const app = express();
require('./db');

const port = 3000;
//middleware
app.use(express.json())

//routes
app.use(require('./routes/router')) 

app.listen(port, () => {
  console.log(`Book backend listening on http://localhost:${port}...`)
})
