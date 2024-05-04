module.exports = {
    components: {
      securitySchemes: {
        basicAuth: {
          type: "http",
          scheme: "basic",
        }
      },
      schemas: {
        Map: {
          type: "object",
          properties: {
            _id: {
              type: "ObjectId",
              description: "Map identification number",
              example: "65db1bd4e4c4dcf5df829b1d",
            },
            nombre: {
              type: "string",
              description: "The name of the map",
              example: "El Molar",
            },
            imagen: {
              type: "string",
              description: "URL of the map image",
              example: "http://example.com/map.jpg",
            },
            comunidad: {
              type: "string",
              description: "Community of the map",
              enum: ['Andalucía', 'Aragón', 'Asturias', 'Islas Baleares','Canarias', 'Cantabria', 'Castilla y León', 'Castilla-La Mancha', 'Cataluña', 'Ceuta', 'Comunidad Valenciana', 'Extremadura', 'Galicia', 'La Rioja', 'Comunidad de Madrid', 'Melilla', 'Región de Murcia', 'Comunidad Foral de Navarra', 'País Vasco', 'Principado de Asturias'],
              example: "Andalucía"
            },
            año: {
              type: "string",
              description: "Year of the map",
              example: "2022"
            },
            distancia: {
              type: "string",
              description: "Distance of the map",
              enum: ['Larga', 'Media', 'Sprint', 'Intermedia', 'Otro'],
              example: "Larga"
            },
            modalidad: {
              type: "string",
              description: "Mode of the map",
              enum: ['O-Pie', 'MTB-O', 'Rogaine', 'Raid de Aventura', 'Trail-O', 'Esquí-O', 'Otro'],
              example: "O-Pie"
            },
            escala: {
              type: "string",
              description: "Scale of the map",
              enum: ['1/3.000', '1/4.000', '1/7.500', '1/10.000', '1/15.000', '1/20.000', 'Otro'],
              example: "1/10.000"
            },
            categoria: {
              type: "string",
              description: "Category of the map",
              enum: ['U-10', 'M-12', 'F-12', 'M-14', 'F-14', 'M-16', 'F-16', 'M-18', 'F-18', 'M-18E', 'F-18E', 'M-20E', 'F-20E', 'M-21A', 'F-21A', 'M-21B', 'F-21B', 'M-E', 'F-E', 'M-35', 'F-35', 'M-35A', 'F-35A', 'M-35B', 'F-35B', 'M-40', 'F-40', 'M-45', 'F-45', 'M-50', 'F-50', 'M-60', 'F-60', 'M-65', 'F-65', 'M-70', 'F-70', 'M-75', 'F-75', 'OPEN AMARILLO', 'OPEN NARANJA', 'OPEN ROJO', 'OPEN AZUL', 'OPEN NEGRO'],
              example: "M-16"
            },
            club: {
              type: "string",
              description: "Club of the map",
              example: "Valencia-O"
            },
            localidad: {
              type: "string",
              description: "Location of the map",
              example: "Castalla"
            },
            cartografo: {
              type: "string",
              description: "Cartographer of the map",
              example: "Juan garcia"
            },
            trazador: {
              type: "string",
              description: "Trail marker of the map",
              example: "Pedro Garcia"
            },
            federacion: {
              type: "string",
              description: "Federation of the map",
              enum: ['FEDERACIÓN ANDALUZA DEL DEPORTE DE ORIENTACIÓN (F.A.D.O.)', 'FEDERACIÓ DE CURSES DORIENTACIÓ DE CATALUNYA (F.C.O.C.)', 'FEDERACIÓN DE ORIENTACIÓN DE LA REGIÓN DE MURCIA (F.O.R.M.)', 'FEDERACIÓN DEL DEPORTE DE ORIENTACIÓN DE LA REGIÓN DE MURCIA (FEDO-MURCIA)', 'FEDERACIÓN ESPAÑOLA DE ORIENTACIÓN (F.E.O.)', 'FEDERACIÓN GALLEGA DE ORIENTACIÓN (FEGADO)', 'FEDERACIÓ DORIENTACIÓ DE LES ILLES BALEARS (FEDOIB)', 'FEDERACIÓN MADRILEÑA DE ORIENTACIÓN (FEMADO)', 'FEDERACIÓN NAVARRA DE DEPORTES DE ORIENTACIÓN (F.N.D.O.)', 'FEDERACIÓN TERRITORIAL DE ORIENTACIÓN DE LA COMUNIDAD VALENCIANA (FEDOCV)'],
              example: "FEDERACIÓN ANDALUZA DEL DEPORTE DE ORIENTACIÓN (F.A.D.O.)"
            },
            liga: {
              type: "string",
              description: "League of the map",
              enum: ['LIGA ANDALUZA DE ORIENTACIÓN (L.A.O.)', 'LIGA ANDALUZA DE RAID DE AVENTURA', 'LIGA ESPAÑOLA DE ORIENTACIÓN (L.E.O.)', 'LIGA ESPAÑOLA DE RAID DE AVENTURA'],
              example: "LIGA ESPAÑOLA DE ORIENTACIÓN (L.E.O.)"
            },
          },
        },
        ObjectId: {
          type: "string",
          description: "Map identification number",
          example: "65db1bd4e4c4dcf5df829b1d",
        },
      },
    },
  };