const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/branchOffices.routes')(app);


app.listen(port, () => console.log(`Hi ninjas, we are listening to you in the port ${port}`));