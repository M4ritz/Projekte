"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actors = exports.movies = void 0;
let movie1 = {
    id: 1,
    time: 131,
    title: "Pacific Rim",
    genre: ["Action", "Adventure", "Science-Fiction"],
    trailer: '<iframe src="https://www.youtube.com/embed/b5aUXSfaUbc?si=4aDC8vn-1-IvfQ4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://cdn-a.prisma.de/cdn/img/default/1520/15197429_ccda49db9af3bc55912342a2c1912311_480re0.jpg",
    year: 2013,
    persons: {
        director: "Travis Beacham & Guillermodel Toro",
        actor: [1, 2, 3]
    },
    ageRegistration: {
        FSK: 16
    },
};
let movie2 = {
    id: 2,
    time: 132,
    title: "The Suicide Squad",
    genre: ["Action", "Adventure", "Komödie"],
    trailer: '<iframe src="https://www.youtube.com/embed/CmRih_VtVAs?si=vNImYgoB7XcUnYIj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://de.web.img3.acsta.net/pictures/21/05/28/11/39/1192773.jpg",
    year: 2021,
    persons: {
        director: "James Gunn",
        actor: [1, 4, 5],
    },
    ageRegistration: {
        FSK: 16
    },
};
let movie3 = {
    id: 3,
    time: 180,
    title: "The Wolf of Wall Street",
    genre: ["Biografie", "Komödie", "Krimi"],
    trailer: '<iframe src="https://www.youtube.com/embed/iszwuX1AK6A?si=q4WqKLwuJLl7Is2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://multimedia.knv.de/cover/35/20/03/3520039300001Z.jpg",
    year: 2013,
    persons: {
        director: "Terence Winter & Jordan Belfort",
        actor: [4, 6, 7],
    },
    ageRegistration: {
        FSK: 16
    },
};
let movie4 = {
    id: 4,
    time: 113,
    title: "The Gentlemen",
    genre: ["Action", "Krimi"],
    trailer: '<iframe src="https://www.youtube.com/embed/7Mb1mtOmFPA?si=Rl39m8W4zJAlMDuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://i.pinimg.com/originals/30/59/ca/3059caf3374bdf0973745591797d2bcb.jpg",
    year: 2019,
    persons: {
        director: "Guy Ritchie",
        actor: [2, 8, 9],
    },
    ageRegistration: {
        FSK: 16
    },
};
let movie5 = {
    id: 5,
    time: 143,
    title: "Babel",
    genre: ["Drama"],
    trailer: '<iframe src="https://www.youtube.com/embed/x3Rn9dQVsNY?si=CBma8se6c7MGJ9uK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://m.media-amazon.com/images/I/511Il1MfZlL._AC_UF894,1000_QL80_.jpg",
    year: 2006,
    persons: {
        director: "Alejandro G. Iñárritu",
        actor: [3, 10, 11],
    },
    ageRegistration: {
        FSK: 16
    },
};
let movie6 = {
    id: 6,
    time: 114,
    title: "Bumblebee",
    genre: ["Action", "Adventure", "Science-Fiction"],
    trailer: '<iframe src="https://www.youtube.com/embed/PALZ9-UBbjc?si=v5oA4xzidokXTWaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_.jpg",
    year: 2018,
    persons: {
        director: "Travis Knight",
        actor: [5, 12, 13],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie7 = {
    id: 7,
    time: 151,
    title: "Departed: Unter Feinden",
    genre: ["Krimi", "Drama", "Thriller"],
    trailer: '<iframe src="https://www.youtube.com/embed/sZwc4lh_984?si=gCcUmgLlAcjNz_fb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://m.media-amazon.com/images/I/51eF+IlI0rL._AC_UF894,1000_QL80_.jpg",
    year: 2006,
    persons: {
        director: "Martin Scorsese",
        actor: [6, 14, 15],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie8 = {
    id: 8,
    time: 133,
    title: "Die Kunst zu gewinnen - Moneyball",
    genre: ["Biografie", "Drama", "Sportfilm"],
    trailer: '<iframe src="https://www.youtube.com/embed/vWX6SPmqWUE?si=5FZGJrnbStu5mix3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5JH8/image?locale=de-at&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
    year: 2011,
    persons: {
        director: "Bennett Miller",
        actor: [7, 14, 15],
    },
    ageRegistration: {
        FSK: 13
    },
};
let movie9 = {
    id: 9,
    time: 169,
    title: "Interstellar",
    genre: ["Abenteuer", "Drama", "Science-Fiction"],
    trailer: '<iframe src="https://www.youtube.com/embed/fjwxzEfDxWs?si=y4ObH7utqD6f1ohy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://i.etsystatic.com/23402008/r/il/b658b2/2327469308/il_570xN.2327469308_492n.jpg",
    year: 2014,
    persons: {
        director: "Christopher Nolan",
        actor: [8, 17, 18],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie10 = {
    id: 10,
    time: 117,
    title: "Self/less: Der Fremde in mir",
    genre: ["Action", "Mystery", "Science-Fiction", "Thriller"],
    trailer: '<iframe src="https://www.youtube.com/embed/VI8FYAFZ2oU?si=EuDRlsuQRMITVdv9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://ascot-elite.ch/modules/AscotElite/movies/1850/de/archive/cover_detail.jpg",
    year: 2015,
    persons: {
        director: "Tarsem Singh",
        actor: [9, 19, 20],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie11 = {
    id: 11,
    time: 130,
    title: "Thor: Tag der Entscheidung",
    genre: ["Action", "Abenteuer", "Komödie"],
    trailer: '<iframe src="https://www.youtube.com/embed/4RYGgdZMcvY?si=3NTjBW_c4wbuwfNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://de.web.img2.acsta.net/pictures/17/08/25/11/51/249096.jpg",
    year: 2017,
    persons: {
        director: "Taika Waititi",
        actor: [1, 11, 21],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie12 = {
    id: 12,
    time: 154,
    title: "Mothers' Instinct",
    genre: ["Drama", "Thriller"],
    trailer: '<iframe src="https://www.youtube.com/embed/4RYGgdZMcvY?si=3NTjBW_c4wbuwfNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Mothers%27_Instinct_Poster.jpg/220px-Mothers%27_Instinct_Poster.jpg",
    year: 2024,
    persons: {
        director: "Benoît Delhomme",
        actor: [17, 18, 22],
    },
    ageRegistration: {
        FSK: 0
    },
};
let movie13 = {
    id: 13,
    time: 93,
    title: "Pitch Perfect 3",
    genre: ["Komödie", "Musikfilm"],
    trailer: '<iframe src="https://www.youtube.com/embed/hteY6XrRIPk?si=hLQaQj-ICCia8v0r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://i.weltbild.de/p/pitch-perfect-3-345739154.jpg?v=1&wp=_max",
    year: 2017,
    persons: {
        director: "Trish Sie",
        actor: [12, 23, 24],
    },
    ageRegistration: {
        FSK: 6
    },
};
let movie14 = {
    id: 14,
    time: 148,
    title: "Spider-Man: No Way Home",
    genre: ["Action", "Abenteur", "Fantasy"],
    trailer: '<iframe src="https://www.youtube.com/embed/JfVOs4VSpmA?si=Q5sS6crmZOVcTiAl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
    year: 2021,
    persons: {
        director: "Jon Watts",
        actor: [13, 25, 26],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie15 = {
    id: 15,
    time: 180,
    title: "Oppenheimer",
    genre: ["Biografie", "Drama", "Geschichte"],
    trailer: '<iframe src="https://www.youtube.com/embed/bK6ldnjE3Y0?si=J030khTkE5NGYQ1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: 'https://i.ebayimg.com/images/g/CBkAAOSwDXJksxqv/s-l1200.webp',
    year: 2023,
    persons: {
        director: "Christopher Nolan",
        actor: [14, 27, 28],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie16 = {
    id: 16,
    time: 97,
    title: "Das Beste kommt zum Schluss",
    genre: ["Drama", "Abenteur", "Komodie"],
    trailer: '<iframe src="https://www.youtube.com/embed/toLnj5x0J1M?si=yYT2j3wJXwGw_SEl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://static.kino.de/wp-content/uploads/2015/08/das-beste-kommt-zum-schluss-2007-filmplakat.jpg",
    year: 2007,
    persons: {
        director: "Rob Reiner",
        actor: [15, 29, 30],
    },
    ageRegistration: {
        FSK: 0
    },
};
let movie17 = {
    id: 17,
    time: 142,
    title: "Forest Gump",
    genre: ["Drama", "Liebesfilm"],
    trailer: '<iframe src="https://www.youtube.com/embed/bLvqoHBptjg?si=A4H8DcNj09J3BfET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    year: 1994,
    persons: {
        director: "Robert Zemeckis",
        actor: [16, 31, 32],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie18 = {
    id: 18,
    time: 115,
    title: "Free Guy",
    genre: ["Action", "Abenteuer", "Komödie"],
    trailer: '<iframe src="https://www.youtube.com/embed/X2m-08cOAbc?si=KZn8iYO0o2hMgJHX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://i.etsystatic.com/35681979/r/il/f1e91b/3944744733/il_fullxfull.3944744733_6dzq.jpg",
    year: 2021,
    persons: {
        director: "Shawn Levy",
        actor: [19, 33, 34],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie19 = {
    id: 19,
    time: 130,
    title: "Iron Man 3",
    genre: ["Action", "Abenteuer", "Science-Fiction"],
    trailer: '<iframe src="https://www.youtube.com/embed/I-JXqQR_FKk?si=AL9wnozXwOqS7KPf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://www.emp.at/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw8d903959/images/2/6/9/1/269129a2-emp.jpg?sfrm=png",
    year: 2013,
    persons: {
        director: "Shane Black",
        actor: [20, 28, 35],
    },
    ageRegistration: {
        FSK: 12
    },
};
let movie20 = {
    id: 20,
    time: 143,
    title: "The Avengers",
    genre: ["Action", "Science-Fiction"],
    trailer: '<iframe src="https://www.youtube.com/embed/eOrNdBpGMv8?si=u5ZtcM9BhleTBH2i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    cover: "https://paninishop-16eb6.kxcdn.com/media/image/29/fc/cb/MarvelMovieCollectio_771.jpg",
    year: 2012,
    persons: {
        director: "Joss Whedon",
        actor: [28, 35, 36],
    },
    ageRegistration: {
        FSK: 12
    },
};
let actor1 = {
    id: 1,
    fictionalPersonName: ["Sam Nelson", "Bloodsport", "Heimdall"],
    realName: "Idris Elba",
    birthYear: 1972,
    photo: "https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_FMjpg_UX1000_.jpg",
    movies: [1, 2, 11]
};
let actor2 = {
    id: 2,
    fictionalPersonName: ["Raleigh Becket", "Ray"],
    realName: "Charlie Hunnam",
    birthYear: 1980,
    photo: "https://m.media-amazon.com/images/M/MV5BMjE5NjE5Mzk2MV5BMl5BanBnXkFtZTcwODI5MDE1Ng@@._V1_FMjpg_UX1000_.jpg",
    movies: [1, 4]
};
let actor3 = {
    id: 3,
    fictionalPersonName: ["Mako Mori", " Yuriko Kikuchi"],
    realName: "Rinko Kikuchi",
    birthYear: 1981,
    photo: "https://m.media-amazon.com/images/M/MV5BMTI5NjE0MjcwN15BMl5BanBnXkFtZTYwMDcxNTA1._V1_.jpg",
    movies: [1, 5]
};
let actor4 = {
    id: 4,
    fictionalPersonName: ["Harley Quinn", "Naomi Lapaglia"],
    realName: "Margot Robbie",
    birthYear: 1990,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Robbie_at_2019_Cannes_%28cropped%29.jpg/220px-Robbie_at_2019_Cannes_%28cropped%29.jpg",
    movies: [2, 3]
};
let actor5 = {
    id: 5,
    fictionalPersonName: ["Peacemaker", "Agent Burns"],
    realName: "John Cena",
    birthYear: 1977,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/John_Cena_134616.jpg/175px-John_Cena_134616.jpg",
    movies: [2, 6]
};
let actor6 = {
    id: 6,
    fictionalPersonName: ["Jordan Belfort", "Billy"],
    realName: "Leonardo DiCaprio",
    birthYear: 1974,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Leonardo_DiCaprio_October_2016.jpg/300px-Leonardo_DiCaprio_October_2016.jpg",
    movies: [3, 7]
};
let actor7 = {
    id: 7,
    fictionalPersonName: ["Donnie Azoff", "Peter Brand"],
    realName: "Jonah Hill",
    birthYear: 1983,
    photo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Jonah_Hill-4939.jpg",
    movies: [3, 8]
};
let actor8 = {
    id: 8,
    fictionalPersonName: ["Michael Pearson", "Cooper"],
    realName: "Matthew McConaughey",
    birthYear: 1969,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbvsw8LMpAoADb_0ilXZA0yZxAp1O405wWg&usqp=CAU",
    movies: [4, 9]
};
let actor9 = {
    id: 9,
    fictionalPersonName: ["Rosalind Pearson"],
    realName: "Michelle Dockery",
    birthYear: 1981,
    photo: "https://m.media-amazon.com/images/M/MV5BOGY4NjBjMGUtZmMyNy00NTA2LWFhOTEtN2FhOGZmZWI1MThkXkEyXkFqcGdeQXVyMTMyNzI3NzIy._V1_.jpg",
    movies: [4, 10]
};
let actor10 = {
    id: 10,
    fictionalPersonName: ["Richard", "Billy Beane"],
    realName: "Brad Pitt",
    birthYear: 1963,
    photo: "https://de.web.img3.acsta.net/pictures/19/05/22/10/42/3773139.jpg",
    movies: [5, 8]
};
let actor11 = {
    id: 11,
    fictionalPersonName: ["Susan", "Hela"],
    realName: "Cate Blanchett",
    birthYear: 1969,
    photo: "https://de.web.img3.acsta.net/pictures/15/05/18/11/27/326804.jpg",
    movies: [5, 11]
};
let actor12 = {
    id: 12,
    fictionalPersonName: ["Charlie", "Emily"],
    realName: "Hailee Steinfeld",
    birthYear: 1996,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hailee_Steinfeld_%2828787553517%29_%28cropped%29.jpg/1200px-Hailee_Steinfeld_%2828787553517%29_%28cropped%29.jpg",
    movies: [6, 13]
};
let actor13 = {
    id: 13,
    fictionalPersonName: ["Memo", "Jason Ionello"],
    realName: "Jorge Lendeborg Jr.",
    birthYear: 1996,
    photo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Jorge_Lendeborg_Jr._by_Gage_Skidmore.jpg",
    movies: [6, 14]
};
let actor14 = {
    id: 14,
    fictionalPersonName: ["Colin", "Leslie Groves"],
    realName: "Matt Damon",
    birthYear: 1970,
    photo: "https://de.web.img3.acsta.net/pictures/16/07/13/11/16/193188.jpg",
    movies: [7, 15]
};
let actor15 = {
    id: 15,
    fictionalPersonName: ["Costello", "Edward"],
    realName: "Jack Nicholson",
    birthYear: 1937,
    photo: "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg",
    movies: [7, 16]
};
let actor16 = {
    id: 16,
    fictionalPersonName: ["Sharon", "Jenny Curran"],
    realName: "Robin Wright",
    birthYear: 1966,
    photo: "https://m.media-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_.jpg",
    movies: [8, 17]
};
let actor17 = {
    id: 17,
    fictionalPersonName: ["Brand", "Celine"],
    realName: "Anne Harthaway",
    birthYear: 1982,
    photo: "https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
    movies: [9, 12]
};
let actor18 = {
    id: 18,
    fictionalPersonName: ["Murph", "Alice"],
    realName: "Jessica Chastain",
    birthYear: 1977,
    photo: "https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_.jpg",
    movies: [9, 12]
};
let actor19 = {
    id: 19,
    fictionalPersonName: ["Young Damian", "Guy"],
    realName: "Ryan Reynolds",
    birthYear: 1976,
    photo: "https://m.media-amazon.com/images/M/MV5BODFmN2VmZmEtYTRjZi00ZjY1LTgxYjQtODMyNDI3ZDk4ZTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    movies: [10, 19]
};
let actor20 = {
    id: 20,
    fictionalPersonName: ["Damian", "Trevor Slattery"],
    realName: "Ben Kingsley",
    birthYear: 1943,
    photo: "https://m.media-amazon.com/images/M/MV5BOTU2Njg2NzM4M15BMl5BanBnXkFtZTgwNjYwNjQwMTI@._V1_FMjpg_UX1000_.jpg",
    movies: [10, 19]
};
let actor21 = {
    id: 21,
    fictionalPersonName: ["Loki"],
    realName: "Tom Hiddleston",
    birthYear: 1981,
    photo: "https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    movies: [11]
};
let actor22 = {
    id: 22,
    fictionalPersonName: ["Judge"],
    realName: "Scott Robertson",
    birthYear: 1976,
    photo: "https://m.media-amazon.com/images/M/MV5BMTQ5NDYyMDYyMV5BMl5BanBnXkFtZTcwMzIzNjEzMQ@@._V1_.jpg",
    movies: [12]
};
let actor23 = {
    id: 23,
    fictionalPersonName: ["Chloe"],
    realName: "Brittany Snow",
    birthYear: 1986,
    photo: "https://bilder.fernsehserien.de/gfx/person_1000/b/brittany-snow-27570-1642154725-w-893.jpg.jpg",
    movies: [13]
};
let actor24 = {
    id: 24,
    fictionalPersonName: ["Aubrey"],
    realName: "Anna Camp",
    birthYear: 1982,
    photo: "https://m.media-amazon.com/images/M/MV5BZjdmNjBkZGItZTkzNS00MjVlLWFlMTMtODU1OTFmODQxYjBkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    movies: [13]
};
let actor25 = {
    id: 25,
    fictionalPersonName: ["Peter Parker"],
    realName: "Tom Holland",
    birthYear: 1996,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg",
    movies: [14]
};
let actor26 = {
    id: 26,
    fictionalPersonName: ["MJ"],
    realName: "Zendaya",
    birthYear: 1996,
    photo: "https://goldenglobes.com/wp-content/uploads/2023/10/Zendaya-GettyImages-1401833833.jpg",
    movies: [14]
};
let actor27 = {
    id: 27,
    fictionalPersonName: ["J. Robert Oppenheimer"],
    realName: "Cillian Murphy",
    birthYear: 1976,
    photo: "https://m.media-amazon.com/images/M/MV5BMDUxY2M1NTQtNzcwNC00ZDljLTk4YjctYzJjZGNiYTc0YTE1XkEyXkFqcGdeQXVyMTY5MDA5MDc3._V1_.jpg",
    movies: [15]
};
let actor28 = {
    id: 28,
    fictionalPersonName: ["Lewis Strauss", "Tony Stark", "Tony Stark"],
    realName: "Robert Downey Jr.",
    birthYear: 1965,
    photo: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg",
    movies: [15, 19, 20]
};
let actor29 = {
    id: 29,
    fictionalPersonName: ["Carter"],
    realName: "Morgan Freeman",
    birthYear: 1937,
    photo: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg",
    movies: [16]
};
let actor30 = {
    id: 30,
    fictionalPersonName: ["Thomas"],
    realName: "Sean Hayes",
    birthYear: 1970,
    photo: "https://m.media-amazon.com/images/M/MV5BMTkyMDg2MTE2Ml5BMl5BanBnXkFtZTcwNjk4NjI0MQ@@._V1_.jpg",
    movies: [16]
};
let actor31 = {
    id: 31,
    fictionalPersonName: ["Forrest Gump"],
    realName: "Tom Hanks",
    birthYear: 1956,
    photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg",
    movies: [17]
};
let actor32 = {
    id: 32,
    fictionalPersonName: ["Lieutenant Dan Taylor"],
    realName: "Gary Sinise",
    birthYear: 1955,
    photo: "https://m.media-amazon.com/images/M/MV5BMzE4NzcyMzU3OV5BMl5BanBnXkFtZTYwOTM2NDE2._V1_.jpg",
    movies: [17]
};
let actor33 = {
    id: 33,
    fictionalPersonName: ["Millie"],
    realName: "Jodie Comer",
    birthYear: 1993,
    photo: "https://media1.popsugar-assets.com/files/thumbor/yhmeb4YuJ7-jytr4Z0BMOb7zYHs=/fit-in/2003x3000/filters:format_auto():extract_cover():upscale()/2018/09/25/538/n/2589278/6688cb925baa22429eac04.66740916_GettyImages-683082500.jpg",
    movies: [18]
};
let actor34 = {
    id: 34,
    fictionalPersonName: ["Antwan"],
    realName: "Taika Waititi",
    birthYear: 1975,
    photo: "https://i0.gmx.at/image/708/37438708,pd=1/taika-waititi.jpg",
    movies: [18]
};
let actor35 = {
    id: 35,
    fictionalPersonName: ["Pepper Potts", "Pepper Potts"],
    realName: "Gwyneth Paltrow",
    birthYear: 1972,
    photo: "https://m.media-amazon.com/images/M/MV5BNzIxOTQ1NTU1OV5BMl5BanBnXkFtZTcwMTQ4MDY0Nw@@._V1_.jpg",
    movies: [19, 20]
};
let actor36 = {
    id: 36,
    fictionalPersonName: ["Clint Barton"],
    realName: "Jeremy Renner",
    birthYear: 1971,
    photo: "https://m.media-amazon.com/images/M/MV5BOTk2NDc2ODgzMF5BMl5BanBnXkFtZTcwMTMzOTQ4Nw@@._V1_.jpg",
    movies: [20]
};
exports.movies = [
    movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20
];
exports.actors = [
    actor1, actor2, actor3, actor4, actor5, actor6, actor7, actor8, actor9, actor10, actor11, actor12, actor13, actor14, actor15, actor16, actor17, actor18, actor19, actor20, actor21, actor22, actor23, actor24, actor25, actor26, actor27, actor28, actor29, actor30, actor31, actor32, actor33, actor34, actor35, actor36
];
