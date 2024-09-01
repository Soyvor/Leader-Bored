const express = require('express');
const app = express();
app.use(express.json());

let users = []; // This should be replaced with your actual data source

app.post('/updateUserPoints', (req, res) => {
  const { points } = req.body;

  // Update user's points in the database
  // For simplicity, we use a hardcoded example
  const user = users.find(u => u.email === 'student@sitpune.edu.in');
  if (user) {
    user.points = points;
    res.json({ message: 'Points updated successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Add more routes and server configurations as needed

app.listen(5000, () => console.log('Server is running on port 5000'));