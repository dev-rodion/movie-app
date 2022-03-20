const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4378883a7d044d3b2315e92aebdac364",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
