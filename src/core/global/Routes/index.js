import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ROUTES from "./CommonRoutes";
import {
  ProtectedRoute,
  UnProtectedRoute,
  // AdminProtectedRoute,
  // AdminUnProtectedRoute,
} from "@global/Routes/ProtectedRoutes";
import { Navbar } from "@layout/index";
import { AppNProgressBar } from "@components/index";
// import AdminLayout from "@/components/admin/AdminLayout";
// import UserLayout from "@/layout/UserLayout";

// Lazy load pages
const HomePage = lazy(() => import("@/pages/Home"));
const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const FavoritesPage = lazy(() => import("@/pages/Favorites"));
const WatchlistPage = lazy(() => import("@/pages/Watchlist"));
const MovieListPage = lazy(() => import("@/pages/MovieList"));
const MovieDetailPage = lazy(() => import("@/pages/MovieDetail"));
// const AdminLogin = lazy(() => import("@pages/admin/AdminLogin"));
// const AdminDashboard = lazy(() => import("@pages/admin/Dashboard"));
// const AdminMovies = lazy(() => import("@pages/admin/Movies"));
// const AdminUsers = lazy(() => import("@pages/admin/Users"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<AppNProgressBar />}>
        <Routes>
          {/* Public Routes */}
          <Route
            element={
              // <UnProtectedRoute>
              <Outlet />
              // </UnProtectedRoute>
            }
          >
            <Route path={ROUTES.AUTH.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.AUTH.REGISTER} element={<RegisterPage />} />
          </Route>

          <Route
            element={<ProtectedRoute>{/* <UserLayout /> */}</ProtectedRoute>}
          >
            <Route path={ROUTES.USER.INDEX} element={<HomePage />} />
            <Route path={ROUTES.USER.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.USER.FAVORITES} element={<FavoritesPage />} />
            <Route path={ROUTES.USER.WATCHLIST} element={<WatchlistPage />} />
            <Route path={ROUTES.USER.MOVIES} element={<MovieListPage />} />
            <Route
              path={ROUTES.USER.MOVIE_DETAILS()}
              element={<MovieDetailPage />}
            />
          </Route>

          {/* Admin Routes */}
          {/* <Route
            element={
              <AdminUnProtectedRoute>
                <Outlet />
              </AdminUnProtectedRoute>
            }
          >
            <Route path={ROUTES.ADMIN.LOGIN} element={<AdminLogin />} />
          </Route> */}

          {/* <Route
            path={ROUTES.ADMIN.INDEX}
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path={ROUTES.ADMIN.MOVIES} element={<AdminMovies />} />
            <Route path={ROUTES.ADMIN.USERS} element={<AdminUsers />} />
          </Route> */}

          {/* Fallback */}
          <Route path={ROUTES.COMMON.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
