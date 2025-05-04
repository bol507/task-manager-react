import { ReactNode, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router";
import RoutesWithNotFound from "./routes-with-not-found";
import PrivateGuard from "./private-guard";

//lazy load
const SignInPage = lazy(() => import("../../modules/auth/pages/sign-in"));
const RegisterPage = lazy(
  () => import("../../modules/auth/pages/register-page")
);
const DashboardPage = lazy(
  () => import("../../modules/admin/pages/dashboard-page")
);

// Loading component
const LoadingAuth = () => (
  <div className="flex items-center justify-center h-screen w-full">
    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
  </div>
);

interface AppRouterProps {
  children: ReactNode;
}

const AppRouter = ({ children }: AppRouterProps) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route
          path="auth/login"
          element={
            <Suspense fallback={<LoadingAuth />}>
              <SignInPage />
            </Suspense>
          }
        />
        <Route
          path="auth/register"
          element={
            <Suspense fallback={<LoadingAuth />}>
              <RegisterPage />
            </Suspense>
          }
        />

        <Route element={<PrivateGuard allowedRoles="admin" />}>
          <Route
            path="/admin/dashboard"
            element={
              <Suspense fallback={<LoadingAuth />}>
                <DashboardPage />
              </Suspense>
            }
          />
        </Route>
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;
