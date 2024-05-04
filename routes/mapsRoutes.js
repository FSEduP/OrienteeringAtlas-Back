const express = require('express');
const router = express.Router();
const MapController = require('../controllers/MapController.js')
//const {isAuthenticated} = require('../middlewares/firebaseAuth');
const upload = require('../config/upload.js');

router.get('/maps', MapController.getAllMaps);
router.get('/maps/:id', MapController.getMapById);
router.post('/createmap', upload.single('imagen'), MapController.createMap);
router.post('/maps/edit/:id', MapController.updateMap);
router.post('/maps/delete/:id', MapController.deleteMap);


router.get('/api/maps', MapController.getAllMapsAPI);
router.get('/api/maps/:id', MapController.getMapByIdAPI);
router.post('/api/createmap', upload.single('imagen'), MapController.createMapAPI);
router.post('/api/maps/edit/:id', MapController.updateMapAPI);
router.post('/api/maps/delete/:id', MapController.deleteMapAPI);

module.exports = router