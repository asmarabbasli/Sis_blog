require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Xesynotes backend is running 🎉');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const Note = require('./models/Note');

// Yeni mesaj əlavə etmək
app.post('/api/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Mesaj əlavə edilə bilmədi' });
  }
});

// Bütün mesajları göstərmək
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Mesajlar alınmadı' });
  }
});