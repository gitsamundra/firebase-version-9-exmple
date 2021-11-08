const express = require('express');
const multer = require('multer');
const addImage = require('./controller');
const {getDownloadURL} = require('firebase/storage');

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({storage: storage}).single('file')

router.post('/upload', upload, addImage);
router.get('/download', (req, res) => {
    
});

module.exports = router;