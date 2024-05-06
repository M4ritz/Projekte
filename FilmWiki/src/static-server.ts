import express from 'express';
import * as library from "./movie-library";
import * as user_data from "./user";
const app = express();
const port  = 3000;

//get Movies
for(let i = 0; i < 20;i ++){
    app.get(`/get-movie/${i+1}`, (_req, res)=>{
        let movie = {
            'movie': library.movies[i]
        }
        res.send(movie);
    })
}
//get Actors
for(let i = 0; i < 37;i ++){
    app.get(`/get-actor/${i+1}`, (_req, res)=>{
        let actor = {
            'actor': library.actors[i]
        }
        res.send(actor);
    })
}
//get all Movies
app.get(`/get-movie`, (_req, res)=>{
    let allMovies = {
        'allMovies': library.movies
    }
    res.send(allMovies);
})
//get all Actors
app.get(`/get-actor`, (_req, res)=>{
    let allActors = {
        'allActors': library.actors
    }
    res.send(allActors);
})

app.use(express.json());

app.post(`/auth-user/`, (req,res) => {
    let uname = req.body.user
    let upassword = req.body.password
    let answer

    for(let i = 0; i < user_data.users.length;i++)
    if(uname == user_data.users[i].username &&upassword == user_data.users[i].password){
        answer = {
            'success': true
        }
    }
    else {
        answer = {
            'success': false
        }
    }

    res.send(answer)
})

app.use( express.static(__dirname + './../public'));

app.listen(port, () => {
    console.log('********** Server gestartet ************');
    console.log(`Ereichbar unter http://localhost:${port}`);
})