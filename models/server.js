// Express web server
import express from 'express';
import cors from 'cors';
import { router } from "../routes/user.js";

// Site path reference
//import { path } from 'path';
//import { fileURLToPath } from "url";
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

class server {
    constructor() {
        // Express initialization and port setup based in an env variable
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'; // User api route
        //Middlewares
        this.middlewares();
        //App routes
        this.routes();
    }

    middlewares() {
        // Cors protection
        this.app.use(cors());
        // Body parser middleware
        this.app.use(express.json());
        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, router);
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log(`Application running on http://localhost:${this.port}`);
        });
    }
}

export { server };
