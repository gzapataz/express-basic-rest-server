// Env variables management
import dotenv from 'dotenv';
dotenv.config();



import { server } from "./models/server.js";

const myServer = new server();

myServer.listen();



