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

        case "/js/main.js":
            const mainFile = path.join(PUBLIC_DIRECTORY, "script/main.js");
            const main = fs.readFileSync(mainFile, "utf8");

            res.setHeader("Content-Type", "text/javascript");
            res.writeHead(200);
            res.end(main);

            break;

        case "/css/style.css":
            const cssFile = path.join(PUBLIC_DIRECTORY, "css/style.css");
            const css = fs.readFileSync(cssFile, "utf8");

            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(css);

            break;

        case "/api/users":
            if (req.method === "POST") {
                // Get payload body
                let body = "";
                req.on("data", (chunk) => {
                    body += chunk.toString(); // convert Buffer to string
                    });
                    req.on("end", () => {
                    // JSON.stringify => ubah data dari Javascript ke format JSON
                    fs.writeFileSync("./storage/user.json", body);

                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end("Berhasil mendaftarkan user");
                });
            }

        break;
    }
};

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});