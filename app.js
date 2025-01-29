const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');
   const bcrypt = require('bcryptjs');
   const ejs = require('ejs');
   require('dotenv').config();

   const app = express();

   // Connect to MongoDB
   mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('MongoDB connection error:', err));

   // Middleware
   app.use(bodyParser.urlencoded({ extended: true }));
   app.set('view engine', 'ejs');
   app.use(express.static('public'));

   // Routes
   app.get('/', (req, res) => {
     res.render('index');
   });

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   });
