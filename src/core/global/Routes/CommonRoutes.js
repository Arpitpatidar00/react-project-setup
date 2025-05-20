const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET_KEY;

export const ROUTES = {
  HOME: {
    INDEX: "/",
    MOVIES: "/movies",
    MOVIE_DETAILS: (id = ":id") => `/movies/${id}`, // dynamic route
    GENRES: "/genres",
    SEARCH: "/search",
    ABOUT: "/about",
    CONTACT: "/contact",
  },

  USER: {
    INDEX: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    WATCHLIST: "/watchlist",
    MOVIE_DETAILS: (id = ":id") => `/movies/${id}`, // dynamic route
  },

  ADMIN: {
    INDEX: `/admin/${ADMIN_SECRET}`,
    LOGIN: `/admin/login/${ADMIN_SECRET}`,
    DASHBOARD: "dashboard",
    MOVIES: "movies",
    USERS: "users",
    GENRES: "genres",
    REVIEWS: "reviews",
  },
  AUTH: {
    LOGOUT: "/logout",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  COMMON: {
    NOT_FOUND: "/error",
  },
};

export default ROUTES;
