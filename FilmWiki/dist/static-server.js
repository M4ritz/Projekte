"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const library = __importStar(require("./movie-library"));
const user_data = __importStar(require("./user"));
const app = (0, express_1.default)();
const port = 3000;
for (let i = 0; i < 20; i++) {
    app.get(`/get-movie/${i + 1}`, (_req, res) => {
        let movie = {
            'movie': library.movies[i]
        };
        res.send(movie);
    });
}
for (let i = 0; i < 37; i++) {
    app.get(`/get-actor/${i + 1}`, (_req, res) => {
        let actor = {
            'actor': library.actors[i]
        };
        res.send(actor);
    });
}
app.get(`/get-movie`, (_req, res) => {
    let allMovies = {
        'allMovies': library.movies
    };
    res.send(allMovies);
});
app.get(`/get-actor`, (_req, res) => {
    let allActors = {
        'allActors': library.actors
    };
    res.send(allActors);
});
app.use(express_1.default.json());
app.post(`/auth-user/`, (req, res) => {
    let uname = req.body.user;
    let upassword = req.body.password;
    let answer;
    for (let i = 0; i < user_data.users.length; i++)
        if (uname == user_data.users[i].username && upassword == user_data.users[i].password) {
            answer = {
                'success': true
            };
        }
        else {
            answer = {
                'success': false
            };
        }
    res.send(answer);
});
app.use(express_1.default.static(__dirname + './../public'));
app.listen(port, () => {
    console.log('********** Server gestartet ************');
    console.log(`Ereichbar unter http://localhost:${port}`);
});
