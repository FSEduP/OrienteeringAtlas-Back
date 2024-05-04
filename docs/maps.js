module.exports = {
    paths: {
      "/maps": {
        get: {
          tags: ["Map"],
          summary: "Obtener todos los mapas",
          responses: {
            200: {
              description: "Operación exitosa",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Map"
                  }
                }
              }
            },
            500: {
              description: "Error interno del servidor"
            }
          }
        }
      },
      "/maps/{mapId}": {
        get: {
          tags: ["Map"],
          summary: "Obtener un mapa por ID",
          parameters: [
            {
              name: "mapId",
              in: "path",
              description: "ID del mapa a recuperar",
              schema: {
                $ref: "#/components/schemas/ObjectId"
              }
            }
          ],
          responses: {
            200: {
              description: "Operación exitosa",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Map"
                  }
                }
              }
            },
            404: {
              description: "Mapa no encontrado"
            },
            500: {
              description: "Error interno del servidor"
            }
          }
        }
      },
      "/createmap": {
        post: {
          tags: ["Map"],
          summary: "Crear un nuevo mapa",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Map"
                }
              }
            }
          },
          responses: {
            201: {
              description: "Mapa creado correctamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Map"
                  }
                }
              }
            },
            500: {
              description: "Error interno del servidor"
            }
          }
        }
      },
      "/maps/edit/{mapId}": {
        post: {
          tags: ["Map"],
          summary: "Editar un mapa",
          parameters: [
            {
              name: "mapId",
              in: "path",
              description: "ID del mapa a editar",
              required: true,
              schema: {
                 type: "string"
              }
            }
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Map"
                }
              }
            }
          },
          responses: {
            200: {
              description: "Mapa editado correctamente",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Map"
                  }
                }
              }
            },
            500: {
              description: "Error interno del servidor"
            }
          }
        }
      },
      "/maps/delete/{mapId}": {
        post: {
          tags: ["Map"],
          summary: "Eliminar un mapa",
          parameters: [
            {
              name: "mapId",
              in: "path",
              description: "ID del mapa a eliminar",
              required: true,
              schema: {
                type: "string"
              }
            }
          ],
          responses: {
            200: {
              description: "Mapa eliminado correctamente",
            },
            404: {
              description: "Mapa no encontrado"
            },
            500: {
              description: "Error interno del servidor"
            }
          }
        }
      }
    }
};