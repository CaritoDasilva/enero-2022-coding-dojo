const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./server/routes/branchOffice.routes')(app);




app.listen(port, () => console.log(`🚀 We are listen in the port ${port}`));

