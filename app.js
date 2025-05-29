const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.use(express.json());

const preferenceRoutes = require('./routes/preferences');
app.use('/api', preferenceRoutes);

const newsRoutes = require('./routes/news');
app.use('/api', newsRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});