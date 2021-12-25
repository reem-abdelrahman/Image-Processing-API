# Image-Processing-API

To view an image type
localhost:9000/api/resizedImage/?image=<namehere>&height=<number>&width=<number>
For example:
localhost:9000/?image=fjord&height=200&width=100
The available image names are {
    fjord,
    encenadaport,
    icelandwaterfall,
    palmtunnel,
    santamonica
}

To view the original image, type the name of the image with .jpg extension.
For example:
localhost:9000/api/fjord.jpg

To build use: npm run build
To run prettier use: npm run prettier
To run lint use: npm run lint
To run jasmine tests use: npm run test
To run the server use: npm run start