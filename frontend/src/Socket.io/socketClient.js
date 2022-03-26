import io from "socket.io-client";
import env from "react-dotenv";

export let socket = null;

export const connectToServer = (user) => {
    const { userDetails } = user;
    socket = io(env.BACKEND_URL, {
        auth: {
            token: userDetails.token
        }
    });

    socket.on("connect", () => {
        console.log("Connection to server DONE");
        console.log(socket.id);
    });
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
};
