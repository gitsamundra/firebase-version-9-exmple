const app = require('./db');
// require('firebase/storage');
const {getStorage, ref, uploadBytes, getDownloadURL} = require('firebase/storage')


// const storage = firebase.storage().ref();
// global.XMLHttpRequest = require("xhr2")

const addImage = async(req, res) => {
    const file = req.file;
    const filename = new Date().toISOString().replace(/:/g, '-') + file.originalname;
    const storage = getStorage();
    const storageRef = ref(storage, `cv/${filename}`);
    // console.log(storageRef);
    
    try {
        // const imageRef = storage.child(filename);
        // const snapshot = await imageRef.put(file.buffer);
        // const getURL = await snapshot.ref.getDownloadURL();
        // res.status(201).json(getURL);
        const snapshot = await uploadBytes(storageRef, file.buffer)
        const getURL = await getDownloadURL(storageRef)
        res.status(201).json(getURL)
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const downloadImage = async(req, res) => {
    try {
        const getURL = await getDownloadURL(storageRef);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = addImage;