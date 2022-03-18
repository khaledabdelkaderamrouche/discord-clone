import io from "socket.io-client";
import env from "react-dotenv";

let socket = null;

export const connectToServer = (userDetails) => {
    socket = io(env.BACKEND_URL);
    socket.on("connect", () => {
        console.log("Connection to server DONE");
        console.log(socket.id);
    });
};
