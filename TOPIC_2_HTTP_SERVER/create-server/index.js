const http = require("http");
const fs = require("fs");
const path = require("path");

const HOST = "127.0.0.1";
const PORT = "8012";
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function onRequest(req, res){
    const htmlFile = path.join(PUBLIC_DIRECTORY, "index.html");
    const html = fs.readFileSync(htmlFile, "utf8");

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);  
    res.end(html);
}

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan di http://${HOST}:${PORT}`);
});