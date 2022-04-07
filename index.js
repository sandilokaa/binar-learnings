const http = require("http");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8082;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

const onRequest = (req, res) => {
    const url = req.url;

    switch (url) {
        case "/":
            const htmlFileHome = path.join(PUBLIC_DIRECTORY, "landing_page.html");
            const htmlHome = fs.readFileSync(htmlFileHome, "utf8");

            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(htmlHome);

            break;
        
        case "/search_car.html":
            const htmlFileSearchCar = path.join(PUBLIC_DIRECTORY, "search_car.html");
            const htmlSearchCar = fs.readFileSync(htmlFileSearchCar, "utf8");

            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(htmlSearchCar);

            break;

        case "/js/main.js":
            const mainFile = path.join(PUBLIC_DIRECTORY, "scripts/main.js");
            const main = fs.readFileSync(mainFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(main);

            break;
        
        case "/js/binar.js":
            const binarFile = path.join(PUBLIC_DIRECTORY, "scripts/binar.js");
            const binar = fs.readFileSync(binarFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(binar);

            break;
        
        case "/js/app.example.js":
                const appFile = path.join(PUBLIC_DIRECTORY, "scripts/app.example.js");
                const app = fs.readFileSync(appFile, "utf8");
    
                res.setHeader("Content-Type", "text/javascript");
                res.writeHead(200);
                res.end(app);
    
                break;

        case "/js/car.example.js":
            const carFile = path.join(PUBLIC_DIRECTORY, "scripts/car.example.js");
            const car = fs.readFileSync(carFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(car);

            break;

        case "/js/main.example.js":
            const mainExampleFile = path.join(PUBLIC_DIRECTORY, "scripts/main.example.js");
            const mainExample = fs.readFileSync(mainExampleFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(mainExample);

            break;
        
        case "/css/style.css":
            const cssFile = path.join(PUBLIC_DIRECTORY, "css/style.css");
            const css = fs.readFileSync(cssFile, "utf8");

            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(css);

            break;

        case "/images-landing-page/img_car.png":
            const imagesFile = path.join(PUBLIC_DIRECTORY, "images/img_car.png");
            const images = fs.readFileSync(imagesFile,"");
    
            res.setHeader("Content-Type", "image/png");
            res.writeHead(200);
            res.end(images);
    
            break;
        
        case "/images-landing-page/img_service.png":
            const imagesService = path.join(PUBLIC_DIRECTORY, "images/img_service.png");
            const service = fs.readFileSync(imagesService,"");
    
            res.setHeader("Content-Type", "image/png");
            res.writeHead(200);
            res.end(service);
    
            break;
    
        case "/images-landing-page/user_profile.png":
            const userImage = path.join(PUBLIC_DIRECTORY, "images/user_profile.png");
            const userImg = fs.readFileSync(userImage,"");
    
            res.setHeader("Content-Type", "image/png");
            res.writeHead(200);
            res.end(userImg);
    
            break;
    }
};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});