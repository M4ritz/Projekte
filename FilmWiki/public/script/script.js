produceMovies()
let action
let komoedie
let drama
function produceMovies(){
    fetch(`/get-movie`)
        .then((response) => {
            return response.json();
        })
        .then((allMovies) => {
            let sourcesAction = [
                `${allMovies.allMovies[0].cover}`,
                `${allMovies.allMovies[1].cover}`,
                `${allMovies.allMovies[3].cover}`,
                `${allMovies.allMovies[5].cover}`,
                `${allMovies.allMovies[9].cover}`,
                `${allMovies.allMovies[10].cover}`,
                `${allMovies.allMovies[13].cover}`,
                `${allMovies.allMovies[17].cover}`,
                `${allMovies.allMovies[18].cover}`,
                `${allMovies.allMovies[19].cover}`,
            ];
            let sourcesActionId = [
                allMovies.allMovies[0].id,
                allMovies.allMovies[1].id,
                allMovies.allMovies[3].id,
                allMovies.allMovies[5].id,
                allMovies.allMovies[9].id,
                allMovies.allMovies[10].id,
                allMovies.allMovies[13].id,
                allMovies.allMovies[17].id,
                allMovies.allMovies[18].id,
                allMovies.allMovies[19].id,
            ];
            let sourcesDrama = [
                `${allMovies.allMovies[4].cover}`,
                `${allMovies.allMovies[6].cover}`,
                `${allMovies.allMovies[7].cover}`,
                `${allMovies.allMovies[8].cover}`,
                `${allMovies.allMovies[11].cover}`,
                `${allMovies.allMovies[14].cover}`,
                `${allMovies.allMovies[15].cover}`,
                `${allMovies.allMovies[16].cover}`,
            ];
            let sourcesDramaId = [
                allMovies.allMovies[4].id,
                allMovies.allMovies[6].id,
                allMovies.allMovies[7].id,
                allMovies.allMovies[8].id,
                allMovies.allMovies[11].id,
                allMovies.allMovies[14].id,
                allMovies.allMovies[15].id,
                allMovies.allMovies[16].id,
            ];
            let sourcesKomoedie = [
                `${allMovies.allMovies[1].cover}`,
                `${allMovies.allMovies[2].cover}`,
                `${allMovies.allMovies[10].cover}`,
                `${allMovies.allMovies[12].cover}`,
                `${allMovies.allMovies[17].cover}`,
            ];
            let sourcesKomoedieId = [
                allMovies.allMovies[1].id,
                allMovies.allMovies[2].id,
                allMovies.allMovies[10].id,
                allMovies.allMovies[12].id,
                allMovies.allMovies[17].id,
            ];
            let  temp = ""
            console.log(allMovies)
            action = new Slide(sourcesAction,sourcesActionId,"action")
            drama = new Slide(sourcesDrama,sourcesDramaId,"drama")
            komoedie = new Slide(sourcesKomoedie,sourcesKomoedieId,"komoedie")

            //Action Head
            temp += `
                    <div ></div>
                    <div class="heading"><h2>Action</h2></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div ></div>`
            //Action Slide
            temp+=`<div class="blackBar" onclick="action.left()">
                        <img src="arrowRight.png" class="left">
                    </div>`
            for(let i = 0;i < 4;i ++){
                temp += `<div id="action${i+1}"class="movieSmall"></div>`
            }
            temp+=`<div class="blackBar" onclick="action.right()">
                        <img src="arrowRight.png" class="right">
                    </div>`
            //Drama Head
            temp += `
                    <div ></div>
                    <div class="heading"><h2>Drama</h2></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div ></div>`
            //Drama Slide
            temp+=`        <div class="blackBar" onclick="drama.left()">
                        <img src="arrowRight.png" class="left">
                    </div>`
            for(let i = 0;i < 4;i ++){
                temp += `<div id="drama${i+1}"class="movieSmall"></div>`
            }
            temp+=`<div class="blackBar" onclick="drama.right()">
                        <img src="arrowRight.png" class="right">
                    </div>`
            //Komödie Head
            temp += `
                    <div ></div>
                    <div class="heading"><h2>Komödie</h2></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div ></div>`
            //Komödie
            temp+=  `<div class="blackBar" onclick="komoedie.left()">
                        <img src="arrowRight.png" class="left">
                    </div>`
            for(let i = 0;i < 4;i ++){
                temp += `<div id="komoedie${i+1}"class="movieSmall"></div>`
            }
            temp+=`<div class="blackBar" onclick="komoedie.right()">
                        <img src="arrowRight.png" class="right">
                    <div>`
            document.getElementById('main').innerHTML = temp;
            action.outpImg();
            komoedie.outpImg();
            drama.outpImg();
        })
        .catch((error) => {
            throw error;
        });
}
function produceMovie(id){
    console.log('fetch')
        fetch(`/get-movie/${id + 1}`)
        .then((response) => {
            return response.json();
        })
        .then((movie) => {
            console.log(movie)
            let temp = "";
            temp =
            `<div id="movie">
                <div>
                    <img src="${movie.movie.cover}" style='width:19.5vw;border-radius:10px'>
                    ${movie.movie.trailer}
                    <img src="${movie.movie.cover}" style='width:19.5vw;border-radius:10px'>
                </div>
                <div class="info">
                    <p>Time: ${movie.movie.time}</p>
                    <p>Year: ${movie.movie.year}</p>
                    <p>Director: ${movie.movie.persons.director}</p>
                    <p>FSK: ${movie.movie.ageRegistration.FSK}</p>
                </div>
                <div class="info">
                    <h2>Genres:</h2>
                    <h3 id="name">${movie.movie.genre[0]}</h3>`
                    if(movie.movie.genre[1]) temp+=`<h3 id="name">${movie.movie.genre[1]}</h3>`
                    if(movie.movie.genre[2]) temp+=`<h3 id="name">${movie.movie.genre[2]}</h3>`
                    if(movie.movie.genre[3]) temp+=`<h3 id="name">${movie.movie.genre[3]}</h3>`
            temp+=`
                </div>
                <div class="info" style="height:30vh;">
                    <h2>Actors:</h2>
                    <p></p>
                    <div class="actor" id="actor1"></div>
                    <div class="actor" id="actor2"></div>
                    <div class="actor" id="actor3"></div>
                    <h2>link:</h2>
                    <p></p>
                    <h2><a href="https://www.imdb.com">and more on IMDB ...</></h2>
                </div>
            </div>`
            console.log('end')
            document.getElementById('head').innerHTML = `<h1>${movie.movie.title}</h1><h3 id="back" onclick="produceMovies()">Film Übersicht</h3`
            document.getElementById('main').innerHTML = temp;
            loadactor(movie.movie.persons.actor[0],"actor1");
            loadactor(movie.movie.persons.actor[1],"actor2");
            loadactor(movie.movie.persons.actor[2],"actor3");
        })
        .catch((error) => {
            throw error;
        });
}
function loadactor(actorId,divId){
    fetch(`/get-actor/${actorId}`)
        .then((response) => {
            return response.json();
        })
        .then((actor) => {
            console.log(actor);
            temp="";
            temp += `
            <img onclick="loadTheActor(${actorId})" src="${actor.actor.photo}" style='cursor:pointer;width:10vw;height:14vw;border-radius:20%;'>
            <div id="overlay-text"><h3>${actor.actor.realName}</h3></div>
            `;
            document.getElementById(`${divId}`).innerHTML = temp;
        })
        .catch((error) => {
            throw error;
        });
}
function loadTheActor(theActorId){
    fetch(`/get-actor/${theActorId}`)
        .then((response) => {
            return response.json();
        })
        .then((actor) => {
            console.log(actor);
            let temp = ""
            temp = `
            <div id="actor"><img src="${actor.actor.photo}" id="actorPhoto">
                <div id="info">
                    <h3>Name:</h3>
                    <h3 id="name">${actor.actor.realName}</h3>
                    <br>
                    <h3>Birthyear: </h3>
                    <h3 id="name">${actor.actor.birthYear}</h3>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <div style="text-align:center;">
                        <h1>Filme</h1>
                        <img src="./../blackArrow.png" style="width: 5vw;">
                    </div>
                </div>
                    <div id="movie0"></div>`
                    if(actor.actor.movies.length > 1) temp += `<div id="movie1"></div>`
                    if(actor.actor.movies.length > 2) temp += `<div id="movie2"></div>`
                    if(actor.actor.movies.length > 3) temp += `<div id="movie3"></div>`
                    temp +=`
            </div>`
            document.getElementById('main').innerHTML = temp;
            document.getElementById('head').innerHTML = `<h1>${actor.actor.realName}</h1>`;
            console.log('Start loading actor')
            loadMovie(actor.actor.movies[0],'movie0')
            console.log('start if for load movie')
            if(actor.actor.movies.length > 1) loadMovie(actor.actor.movies[1],'movie1')
            if(actor.actor.movies.length > 2) loadMovie(actor.actor.movies[2],'movie2')
            if(actor.actor.movies.length > 3) loadMovie(actor.actor.movies[3],'movie3')
        })
        .catch((error) => {
            throw error;
        });
}
function loadMovie(movieId,divId){
    fetch(`/get-movie/${movieId}`)
        .then((response) => {
            return response.json();
        })
        .then((movie) => {
            console.log(movie)
            temp="";
            temp += `
            <img onclick="produceMovie(${movieId-1})" src="${movie.movie.cover}" style='cursor:pointer;margin-top:3vw;margin-left:5vw;width:15vw;height:19vw;border-radius:20%;'>
            <div id="overlay-text-Movie"><h3>${movie.movie.title}</h3></div>
            `;
            document.getElementById(`${divId}`).innerHTML = temp;
        })
        .catch((error) => {
            throw error;
        });
}
class Slide{
    constructor(newSources,newSourcesId,divName){
        this.sources = newSources
        this.sourcesId = newSourcesId
        this.name= divName
    }
    left(){
        let storage = this.sources[0];
        let storageId = this.sourcesId[0];

        for(let i = 0; i < this.sources.length-1;i++){
            this.sources[i] = this.sources[i+1];
            this.sourcesId[i] = this.sourcesId[i+1];
        }
        this.sources[this.sources.length-1] = storage;
        this.sourcesId[this.sourcesId.length-1] = storageId;
        
        
        this.outpImg();
    }
    right(){
        let storage = this.sources[0];
        let storageId = this.sourcesId[0];
        for(let i = 0; i < this.sources.length;i++){
            this.sources[i] = this.sources[i+1];
            this.sourcesId[i] = this.sourcesId[i+1];
        }
        this.sources[this.sources.length-1] = storage;
        this.sourcesId[this.sourcesId.length-1] = storageId;
        this.outpImg();
    }
    outpImg(){
        document.getElementById(`${this.name}1`).innerHTML =`<img class="cover" onclick="produceMovie(${this.sourcesId[0]}-1)" src="${this.sources[0]}">`;
        document.getElementById(`${this.name}2`).innerHTML =`<img class="cover" onclick="produceMovie(${this.sourcesId[1]}-1)" src="${this.sources[1]}">`;
        document.getElementById(`${this.name}3`).innerHTML =`<img class="cover" onclick="produceMovie(${this.sourcesId[2]}-1)" src="${this.sources[2]}">`;
        document.getElementById(`${this.name}4`).innerHTML =`<img class="cover" onclick="produceMovie(${this.sourcesId[3]}-1)" src="${this.sources[3]}">`;
    }
}