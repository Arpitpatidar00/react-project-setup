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

// Lazy load pages
const HomePage = lazy(() => import("@/pages/Home"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const OtpVerificationPage = lazy(() => import("@/pages/otpVerificationPage"));
const ResetPasswordPage = lazy(() => import("@/pages/resetPasswordPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPasswordPage"));

const FavoritesPage = lazy(() => import("@/pages/Favorites"));
const WatchlistPage = lazy(() => import("@/pages/Watchlist"));
const MovieListPage = lazy(() => import("@/pages/MovieList"));
const MovieDetailPage = lazy(() => import("@/pages/MovieDetail"));

const NotFoundPage = lazy(() => import("@/pages/NotFound"));

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<AppNProgressBar />}>
        <Routes>
          {/* Public Routes */}
          <Route
            element={<Outlet /> /* Wrap with UnProtectedRoute if needed */}
          >
            <Route path={ROUTES.AUTH.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.AUTH.SIGNUP} element={<SignUpPage />} />
            <Route
              path={ROUTES.AUTH.FORGOT_PASSWORD}
              element={<ForgotPasswordPage />}
            />
            <Route
              path={ROUTES.AUTH.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            />
            <Route
              path={ROUTES.AUTH.VERIFY_OTP}
              element={<OtpVerificationPage />}
            />
          </Route>

          {/* Protected User Routes */}
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

          {/* Admin Routes (commented for now) */}

          {/* Fallback */}
          <Route path={ROUTES.COMMON.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
