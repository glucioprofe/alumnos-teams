# Juego de Preguntas y Respuestas

Este proyecto es una aplicación de juego de preguntas y respuestas desarrollada con Angular. Permite a los usuarios sortear estudiantes de dos grupos, mostrar preguntas de un conjunto predefinido y llevar un registro de los puntos anotados por cada grupo.

## Características

- **Sorteo de Estudiantes**: Elige aleatoriamente un estudiante de cada uno de los dos grupos.
- **Visualización de Preguntas**: Muestra preguntas de un banco de preguntas almacenadas en `localStorage`.
- **Temporizador**: Cada pregunta tiene un límite de tiempo de 5 minutos para su respuesta.
- **Asignación de Puntos**: Permite asignar puntos a cada grupo después de responder a las preguntas.
- **Registro de Puntos**: Lleva un registro de los puntos de cada grupo y almacena esta información en `localStorage`.

## Tecnologías Utilizadas

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/) para el diseño.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [URL del repositorio]
   ```
2. Navega al directorio del proyecto y ejecuta:
   ```bash
   npm install
   ```
3. Para iniciar el servidor de desarrollo, ejecuta:
   ```bash
   ng serve
   ```
4. Abre `http://localhost:4200/` en tu navegador para ver la aplicación.

## Uso

1. **Sorteo de Estudiantes**: Haz clic en el botón "Sortear Estudiantes" para seleccionar un estudiante de cada grupo de manera aleatoria.
2. **Responder Preguntas**: Una vez seleccionados los estudiantes, se mostrará una pregunta y comenzará un temporizador de 5 minutos.
3. **Asignar Puntos**: Al finalizar el tiempo, se pueden asignar puntos al grupo correspondiente.
4. **Continuar el Juego**: Después de asignar los puntos, se puede proceder con el siguiente sorteo y pregunta.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, lee `CONTRIBUTING.md` para detalles sobre nuestro código de conducta, y el proceso para enviarnos pull requests.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
