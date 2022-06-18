const express = require('express');
const path = require('path')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
   return res.json({user: 'geek'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));