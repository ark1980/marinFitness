const app = require('express')();

app.get('/', (req, res) => {
  res.json('Welcome, please come on in');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
