const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4040;

app.use(express.json());
app.use(cors());
app.use('/', require('./src/routes'));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running at ${PORT}`);
});

