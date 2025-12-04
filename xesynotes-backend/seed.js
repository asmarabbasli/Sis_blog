require('dotenv').config(); // Bu mütləq ən yuxarıda olmalıdır
// seed.js
const mongoose = require('mongoose');
require('dotenv').config();

// Mongo bağlantısı
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB bağlantısı uğurludur ✅');

  // Burada test məlumatı əlavə edə bilərsən
  // Məsələn:
  // const Note = require('./models/Note');
  // await Note.create({ title: 'Birthday Letter', content: 'Happy Birthday!' });

  mongoose.connection.close();
})
.catch(err => {
  console.error('Bağlantı xətası:', err);
});