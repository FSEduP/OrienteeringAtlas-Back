const Map = require('../models/Map')

const MapController = {
  async createMap (req, res) {
    try {
      const uploadedFile = req.file;
      let filePath = '';

      if (uploadedFile) {
        filePath = 'http://localhost:3000/uploads/' + uploadedFile.filename;
      }

        const map = await Map.create({
          nombre: req.body.nombre,
          imagen: filePath,
          comunidad: req.body.comunidad,
          año: req.body.año,
          distancia: req.body.distancia,
          modalidad: req.body.modalidad,
          escala: req.body.escala,
          categoria: req.body.categoria,
          club: req.body.club,
          localidad: req.body.localidad,
          cartografo: req.body.cartografo,
          trazador: req.body.trazador,
          federacion: req.body.federacion,
          liga: req.body.liga
      })
      res.status(201).json({ message: 'Mapa creado correctamente', data: map });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al crear el mapa' });
    }
  },
  async getAllMaps (req, res) {
    try {
      const map = await Map.find();
      res.json(map);
    } catch (error) {
      console.log(error)
    }
  },
  async getMapById (req, res) {
    try {
      const map = await Map.findById(req.params.id);
      res.json(map);
    } catch (error) {
      console.log(error)
    }
  },

  async updateMap (req, res) {
    try {
      await Map.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Mapa actualizado correctamente' });
    } catch (err) {
      console.log(error) 
    }
  },

  async deleteMap (req, res) {
    try {
      const id = req.params.id
      const deletedMap = await Map.findByIdAndDelete(id)
      if (!deletedMap) {
        return res.status(404).json({message: "Map with that id not found"})
      }  
      res.json({message: "Map deleted successfully", deletedMap})
    } catch (error) {
      console.log(error)
    }
  },

  /* controladores de la API */
  async getAllMapsAPI(req, res) {
    try {
      const maps = await Map.find();
      res.json(maps);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  },

  async getMapByIdAPI(req, res) {
    try {
      const map = await Map.findById(req.params.id);
      if (!map) {
        return res.status(404).json({ message: "Map with that id not found" });
      }
      res.json(map);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  },

  async createMapAPI(req, res) {
    try {
      const uploadedFile = req.file;
      let filePath = '';

      if (uploadedFile) {
        filePath = 'http://localhost:3000/uploads/' + uploadedFile.filename;
      }

      const map = new Map({
        nombre: req.body.nombre,
        imagen: filePath,
        comunidad: req.body.comunidad,
        año: req.body.año,
        distancia: req.body.distancia,
        modalidad: req.body.modalidad,
        escala: req.body.escala,
        categoria: req.body.categoria,
        club: req.body.club,
        localidad: req.body.localidad,
        cartografo: req.body.cartografo,
        trazador: req.body.trazador,
        federacion: req.body.federacion,
        liga: req.body.liga
      });

      await map.save();
      res.status(201).send(map);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  },

  async updateMapAPI(req, res) {
    try {
      const id = req.params.id;
      const updatedMap = await Map.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedMap) {
        return res.status(404).json({ message: "Map with that id not found" });
      }
      res.json(updatedMap);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  },

  async deleteMapAPI(req, res) {
    try {
      const id = req.params.id;
      const deletedMap = await Map.findByIdAndDelete(id);
      if (!deletedMap) {
        return res.status(404).json({ message: "Map with that id not found" });
      }
      res.json({ message: "Map deleted successfully", deletedMap });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  }

}

module.exports = MapController