import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { DashboardPage } from "./components/DashboardPage";
import { BookingPage } from "./components/BookingPage";
import { CasinoPage } from "./components/CasinoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "booking", Component: BookingPage },
      { path: "casino", Component: CasinoPage },
    ],
  },
]);
