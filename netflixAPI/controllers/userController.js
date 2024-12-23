const User = require("../models/userModels.js");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body; //here data is liked movies from schema
    //we are checking whether user is already present in the database or not through email
    const user = await User.findOne({ email });

    //if user is present then we will add the movie to likedMovies array
    if (user) {
      const { likedMovies } = user; //destructuring likedMovies from user
      //check whether movie is already liked or not
      const movieAlreadyLiked = likedMovies.some(
        (movie) => movie.id === data.id
      );

      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(user._id, {
          //This attempts to spread the existing likedMovies array and append data (the new movie object) to it
          likedMovies: [...user.likedMovies, data],
        }),
          { new: true }; // Ensures the updated document is returned
      } else {
        return res.json({ message: "Movie already liked" });
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }

    return res.json({ msg: "Movie successfully added to liked list." });
  } catch (error) {
    return res.json({ message: "Error adding movie to the liked list" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;

    // Find the user by email
    const user = await User.findOne({ email });

    if (user) {
      // Return likedMovies if user exists
      return res.status(200).json({ likedMovies: user.likedMovies });
    } else {
      // User not found
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching liked movies:", error);
    // Send a 500 response for server errors
    res.status(500).json({ message: "Error getting liked movies" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Movie not found." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};

/**Example of Data:
 *
 * {
  "email": "user10movies@example.com",
  "likedMovies": [
    { "id": "001", "title": "The Shawshank Redemption" },
    { "id": "002", "title": "The Godfather" },
    { "id": "003", "title": "The Dark Knight" },
    { "id": "004", "title": "Pulp Fiction" },
    { "id": "005", "title": "Inception" },
    { "id": "006", "title": "Forrest Gump" },
    { "id": "007", "title": "The Matrix" },
    { "id": "008", "title": "Goodfellas" },
    { "id": "009", "title": "The Lord of the Rings: The Fellowship of the Ring" },
    { "id": "010", "title": "Fight Club" }
  ]
}

 */
