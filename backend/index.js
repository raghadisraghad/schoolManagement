const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = express();

await connectDB();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
