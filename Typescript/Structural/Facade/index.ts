import Server from "./source/Server.ts";
import ServerAPI from "./source/ServerAPI.ts";

const serverAPI = new ServerAPI(new Server());

console.log(serverAPI.someEndpoint())
