const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    imagen: {
        type: String,
    },
    comunidad: {
        type: String,
        enum: ['Andalucía', 'Aragón', 'Asturias', 'Islas Baleares','Canarias', 'Cantabria', 'Castilla y León', 'Castilla-La Mancha', 'Cataluña', 'Ceuta', 'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La Rioja', 'Comunidad de Madrid', 'Melilla', 'Región de Murcia', 'Comunidad Foral de Navarra', 'País Vasco', 'Principado de Asturias'],
    },
    año: {
        type: String,
    },
    distancia: {
        type: String,
        enum: ['Larga', 'Media', 'Sprint', 'Intermedia', 'Otro'],
    },
    modalidad: {
        type: String,
        enum: ['O-Pie', 'MTB-O', 'Rogaine', 'Raid de Aventura', 'Trail-O', 'Esquí-O', 'Otro'],
    },
    escala: {
        type: String,
        enum: ['1/3.000', '1/4.000', '1/7.500', '1/10.000', '1/15.000', '1/20.000', 'Otro'],
    },
    categoria: {
        type: String,
        enum: ['U-10', 'M-12', 'F-12', 'M-14', 'F-14', 'M-16', 'F-16', 'M-18', 'F-18', 'M-18E', 'F-18E', 'M-20E', 'F-20E', 'M-21A', 'F-21A', 'M-21B', 'F-21B', 'M-E', 'F-E', 'M-35', 'F-35', 'M-35A', 'F-35A', 'M-35B', 'F-35B', 'M-40', 'F-40', 'M-45', 'F-45', 'M-50', 'F-50', 'M-60', 'F-60', 'M-65', 'F-65', 'M-70', 'F-70', 'M-75', 'F-75', 'OPEN AMARILLO', 'OPEN NARANJA', 'OPEN ROJO', 'OPEN AZUL', 'OPEN NEGRO'],
    },
    club: {
        type: String,
    },
    localidad: {
        type: String,
    },
    cartografo: {
        type: String,
    },
    trazador: {
        type: String,
    },
    federacion: {
        type: String,
        enum: ['FEDERACIÓN ANDALUZA DEL DEPORTE DE ORIENTACIÓN (F.A.D.O.)', 'FEDERACIÓ DE CURSES DORIENTACIÓ DE CATALUNYA (F.C.O.C.)', 'FEDERACIÓN DE ORIENTACIÓN DE LA REGIÓN DE MURCIA (F.O.R.M.)', 'FEDERACIÓN DEL DEPORTE DE ORIENTACIÓN DE LA COMUNIDAD VALENCIANA (FEDOCV)',' FEDERACIÓN EXTREMEÑA DE ORIENTACIÓN (FEXO)', 'FEDERACIÓ BALEAR DORIENTACIÓ (FBO)', 'FEDERACIÓN DE ORIENTACIÓN DE CASTILLA Y LEÓN (FOCYL)', 'FEDERACIÓN MADRILEÑA DE ORIENTACIÓN (FEMADO)', 'FEDERACIÓN ARAGONESA DE ORIENTACIÓN (FARO)', 'FEDERACIÓN DE ORIENTACIÓN DE CASTILLA-LA MANCHA (FECAMADO)', 'FEDERACIÓN GALLEGA DE ORIENTACIÓN (FEGADO)', 'DELEGACIÓN TERRITORIAL DE EUSKADI', 'DELEGACIÓN TERRITORIAL F.E.D.O. CANARIAS', 'DELEGACIÓN TERRITORIAL DE ASTURIAS', 'DELEGACIÓN TERRITORIAL F.E.D.O. CANTABRIA'],
    },
    liga: {
        type: String,
        enum: ['Nacional', 'Autonómica', 'Provincial', 'City Race Euro Tour', 'WRE', 'Sureste', 'Norte', 'Otro'],
    },
});

const Map = mongoose.model('Map', MapSchema);

module.exports = Map;