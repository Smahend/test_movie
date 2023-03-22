const router = require("express").Router();

let Movie = require("../models/movieModel");

router.route("/").get((req,res)=>{
    Movie.find()
    .then(movies=>res.send(movies))
    .catch(err=>res.status(400).json("Error :" + err));
});

router.route("/addmovie").post((req,res)=>{
    const movieName = req.body.movieName;
    const rating = req.body.rating;
    const releasedDate = req.body.releasedDate;
})

const newMovie = new Movie({
    movieName,
    rating,
    releasedDate,
});

newMovie.save()
.then(()=>res.json("movie added"))
.catch(err=>res.status(400).json("Error" + err));