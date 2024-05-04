# OrienteeringAtlas - Backend

<p align="center"><img src="/public/uploads/Logo2.png" width="200"></p>

## Autor

-  [Edu](https://github.com/FSEduP) ⚡


## Colaboradores
- GitHub: [Data](https://github.com/CarlosDiazGirol)
- GitHub: [Sofía](https://github.com/SofiaPinilla)
- GitHub: [Reyes](https://github.com/Reyeslim)
- GitHub: [Yolanda](https://github.com/yolovi)

## TABLA DE CONTENIDOS 📖

1. Descripción general del proyecto
2. Objetivo del proyecto
3. Dependencias
4. Tecnologías
5. Archivos Principales
6. La API

### 1. Descripción general del proyecto
Project Break es una aplicación de gestión de mapas para el deporte de orientación . Este repositorio contiene el código del backend de la aplicación, que proporciona la lógica de negocio y la interacción con la base de datos.

### 2. Objetivo del proyecto
Crear una aplicación que permita a los usuarios gestionar mapas utilizados en el deporte de orientación, incluyendo funciones como la creación, actualización, eliminación y obtención de mapas.

### 3. Dependencias 💻

#### Backend:
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)

#### Base de datos:
- [mongoose](https://www.npmjs.com/package/mongoose)

#### Almacenamiento de archivos:
- [multer](https://www.npmjs.com/package/multer)

#### Documentación de API:
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

#### Pruebas:
- [jest](https://www.npmjs.com/package/jest)
- [supertest](https://www.npmjs.com/package/supertest)
- [cheerio](https://cheerio.js.org/)

#### Autenticación:
- [firebase](https://firebase.google.com/)
- [firebase-admin](https://firebase.google.com/)
- [firebase-auth](https://firebase.google.com/)

### 4. Tecnologías 🔧

#### Herramientas de gestión de proyectos:
- [Github](https://github.com/)

#### Control de versiones y desarrollo colaborativo:
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

#### Bases de datos:
- [mongodb](https://www.mongodb.com/es)
- [Postman](https://www.postman.com/)

#### Herramientas de deploy:
- [GitHub Pages](https://pages.github.com/)
- [Railway](https://railway.app/)

#### Otras:
- [CSS Analyzer](https://www.projectwallace.com/analyze-css)

### Configuración y Ejecución

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y npm instalados.
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.
4. Instala las dependencias del proyecto ejecutando `npm install`.
5. Ejecuta la aplicación con el comando `npm start`.


### 5. Archivos Principales

### `config/`

- **config.js:** Configuración de conexión a la base de datos MongoDB.
- **firebase.js:** Configuración de Firebase Authentication.
- **upload.js:** Configuración para el manejo de archivos multimedia.

### `controllers/`

- **AuthController.js:** Controlador para la autenticación de usuarios.
- **MapController.js:** Controlador para la gestión de mapas.

### `docs/`

- **basicInfo.js:** Este archivo contiene la información básica para la documentación del proyecto.
- **components.js:** Aquí se encuentran los componentes utilizados en la documentación, como descripciones detalladas de las funciones y métodos.
- **index.js:** Este archivo sirve como punto de entrada para la generación de la documentación del proyecto.
- **maps.js:** Contiene la documentación específica relacionada con la gestión de mapas en la aplicación.

### `middlewares/`

- **firebaseAuth.js:** Middleware para verificar la autenticación de usuarios.

### `models/`

- **Map.js:** Definición del modelo de datos para los mapas.

### `routes/`

- **authRoutes.js:** Rutas relacionadas con la autenticación de usuarios.
- **mapsRoutes.js:** Rutas relacionadas con la gestión de mapas.

### `test/`

- **mapController.test.js:** Este archivo contiene las pruebas unitarias para el controlador MapController.js, que se encarga de la gestión de mapas en la aplicación. Las pruebas incluyen casos para asegurar el correcto funcionamiento de las funciones relacionadas con la creación, actualización, eliminación y obtención de mapas. Se utilizan herramientas como Jest y supertest para realizar las pruebas de forma automatizada y verificar el comportamiento esperado del controlador en diferentes escenarios.






### **_6. API_**: :page_with_curl:
Para acceder a la documentación con swagger hay que acceder a través de la siguiente ruta:

```
https://orienteeringatlas.up.railway.app/api-docs/
```

<br>

### Client
| Route Name       | Request Type | RequestBody                                                                                                                        | Request Path           |
|------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| `showMapsAPI`    | GET          | null                                                                                                                               | `/api/maps`            |
| `showMapByIdAPI` | GET          | null                                                                                                                               | `/api/maps/:id`        |
| `createMapAPI`   | POST         | (nombre, imagen, comunidad, año, distancia, modalidad, escala, categoria, club, localidad, cartografo, trazador, federacion, liga) | `/api/createmap`       |
| `editMapAPI`     | POST         | (nombre, imagen, comunidad, año, distancia, modalidad, escala, categoria, club, localidad, cartografo, trazador, federacion, liga) | `/api/maps/edit/:id`   |
| `deleteMapAPI`   | POST         | null                                                                                                                               | `/api/maps/delete/:id` |