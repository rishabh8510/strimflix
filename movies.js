const MOVIES = [
    {
      id: 1,
      title: "Inception",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      poster_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070",
      vote_average: 8.8,
      release_date: "2020-07-16",
      duration: "2h 28min",
      genre: ["Action", "Sci-Fi", "Thriller"],
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Dark Knight",
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      poster_path: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070",
      vote_average: 9.0,
      release_date: "2008-07-18",
      duration: "2h 32min",
      genre: ["Action", "Crime", "Drama"],
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster_path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2013",
      vote_average: 8.6,
      release_date: "2014-11-07",
      duration: "2h 49min",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 4,
      title: "Avatar",
      overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      poster_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=2078",
      vote_average: 7.8,
      release_date: "2009-12-18",
      duration: "2h 42min",
      genre: ["Action", "Adventure", "Fantasy"],
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
    },
    {
      id: 5,
      title: "The Matrix",
      overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
      poster_path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2074",
      vote_average: 8.7,
      release_date: "1999-03-31",
      duration: "2h 16min",
      genre: ["Action", "Sci-Fi"],
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },

    {
      id: 6,
      title: "Inception",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      poster_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070",
      vote_average: 8.8,
      release_date: "2020-07-16",
      duration: "2h 28min",
      genre: ["Action", "Sci-Fi", "Thriller"],
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 7,
      title: "The Dark Knight",
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      poster_path: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070",
      vote_average: 9.0,
      release_date: "2008-07-18",
      duration: "2h 32min",
      genre: ["Action", "Crime", "Drama"],
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 8,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster_path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2013",
      vote_average: 8.6,
      release_date: "2014-11-07",
      duration: "2h 49min",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 9,
      title: "Avatar",
      overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      poster_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=2078",
      vote_average: 7.8,
      release_date: "2009-12-18",
      duration: "2h 42min",
      genre: ["Action", "Adventure", "Fantasy"],
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
    },
    {
      id: 10,
      title: "The Matrix",
      overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
      poster_path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      backdrop_path: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=2074",
      vote_average: 8.7,
      release_date: "1999-03-31",
      duration: "2h 16min",
      genre: ["Action", "Sci-Fi"],
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    }
  ];