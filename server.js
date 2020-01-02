const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
// This used to be body-parser requied for, but now is part of express
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/records', require('./routes/timeRecords'));

// app.get('/test', function(req, res){
//   res.send('gotcha')
// })

app.get('/die', function(req, res, next){
  console.log('nic');
  next();
}, function(req, res){
  // res.send('gotcha 2')
  res.send({title: 'gotcha'})
  console.log('done?');
} )

app.get('/test', function (req, res, next) {
  console.log(1)
  next()
}, function (req, res, next) {
  console.log(2)
  next()
  // res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/test', function (req, res, next) {
  console.log(3);
  res.end('done')
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
