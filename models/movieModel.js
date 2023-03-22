const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        movieName: {
            type:String,
            required:true
        },
        rating: {
            type:String,
            required:true
        },
        releasedDate:{
            type:Number,

        }
    },
    {
        timestamps: true,
    }
);

 const Movie = mongoose.model("Movie",movieSchema);
 module.exports = Movie;