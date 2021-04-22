const path = require('path');
const router = require('express').Router();

// route for index.html to server.js
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
    });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

module.exports = router;