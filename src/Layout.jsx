import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
