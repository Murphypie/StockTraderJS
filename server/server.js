const express = require('express');
const app = express();
const path = require("path");

const performanceRouter = require('./Routers/performance')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/performance', performanceRouter)

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
  });

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

function errorHandler(err, req, res, next) {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error has occured" },
    };
    const errorObj = Object.assign(err, defaultErr);
    return res.status(errorObj.status).json(errorObj.message);
}


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  
module.exports = app;