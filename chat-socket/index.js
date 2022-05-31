const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("INFO:", "sesorang telah bergabung ke chat room!");

    socket.on("chat message", (msg) => {
        console.log("INFO:", "incoming message", JSON.stringify(msg));
        io.emit("incoming message", msg);
    });

    socket.on("disconnect", () => {
        console.log("INFO:", "sesorang telah pergi dari chat room!");
    });
});

server.listen(8000, () => {
    console.log("INFO:", "Listening on port 8000");
});