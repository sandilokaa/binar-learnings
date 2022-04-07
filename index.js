const http = require("http");
const { PORT = 8082 } = process.env; // Ambil port dari environment variable
const HOST = "localhost";

const fs = require("fs");
const path = require("path");

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
    const url = req.url;
    if (url === "/") {
        fs.readFile("public/landing_page.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        });
    } else if (url === "/search_car.html") {
        fs.readFile("public/search_car.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        });
    } else if (url === "/getcars") {
        const dataPath = path.join(__dirname, "data", "/car.json");
        const fileStream = fs.createReadStream(dataPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "application/json" });
        fileStream.pipe(res);
    } else if (url.match(".css$")) {
        const cssPath = path.join(__dirname, "public", url);
        const fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    } else if (url.match(".png$")) {
        const imagePath = path.join(__dirname, "public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (url.match(".jpg$")) {
        const imagePath = path.join(__dirname, "public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    } else if (url.match(".js$")) {
        const jsPath = path.join(__dirname, "public", url);
        const fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fileStream.pipe(res);
    } else {
        fs.readFile("./public/404.html", "UTF-8", function (err, html) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(html);
        });
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});
