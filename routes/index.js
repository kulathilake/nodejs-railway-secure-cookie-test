const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.cookie('secure_cookie','hello',{
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path:'/'
  })
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
