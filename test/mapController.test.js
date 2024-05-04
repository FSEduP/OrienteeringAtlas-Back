const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const Map = require('../models/Map');
const cheerio = require('cheerio');
require('dotenv').config();


describe('Pruebas sobre la API de mapas', () => {
    beforeAll(async () => {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    });
  
    afterAll(async () => {
      await mongoose.disconnect();
    });
  
    describe('GET /maps', () => {
      let response;
      let maps;
  
      beforeEach(async () => {
        response = await request(app).get('/maps').send();
        maps = await Map.find();
      });
  
      it('La ruta funciona correctamente', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
      });
  
      it('La petición muestra el JSON correcto', async () => {
        const mapData = JSON.parse(response.text);
        expect(mapData.length).toBe(maps.length);
      });
    });
  
    describe('GET /maps/:id', () => {
      it('La ruta funciona correctamente', async () => {
        const mockMap = {
          _id: 'mockId',
          nombre: 'Mock Mapa',
          comunidad: 'Andalucía',
          año: 2023,
          distancia: 'Larga',
          modalidad: 'MTB-O',
          escala: '1/4.000',
          categoria: 'M-21A',
          club: 'Mock Club',
          localidad: 'Mock localidad',
          cartografo: 'Mock cartografo',
          trazador: 'Mock trazador',
          federacion: 'Mock federacion',
          liga: 'Mock liga'
        };
        jest.spyOn(Map, 'findById');
        Map.findById.mockResolvedValue(mockMap);
        const response = await request(app).get('/maps/mockId').send();
  
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(Map.findById).toHaveBeenCalledWith('mockId');
        const responseData = JSON.parse(response.text);
        expect(responseData.nombre).toBe(mockMap.nombre);
        expect(responseData.comunidad).toBe(mockMap.comunidad);
      });
    });
  
    describe('POST /createmap', () => {
      it('debería crear un nuevo mapa con los datos proporcionados', async () => {
        const response = await request(app)
          .post('/createmap')
          .send({
            nombre: 'Nuevo Mapa',
            comunidad: 'Andalucía',
            año: 2024,
            distancia: 'Larga',
            modalidad: 'MTB-O',
            escala: '1/4.000',
            categoria: 'M-21A',
            club: 'Mock Club',
            localidad: 'Mock localidad',
            cartografo: 'Mock cartografo',
            trazador: 'Mock trazador',
            federacion: 'FEDERACIÓN DEL DEPORTE DE ORIENTACIÓN DE LA COMUNIDAD VALENCIANA (FEDOCV)',
            liga: 'Sureste'
          });
  
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.message).toBe('Mapa creado correctamente');
      });
    });
});