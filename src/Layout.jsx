import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AnimatePresence } from "motion/react";
import Background from "./components/Background/index.jsx";

export function Layout() {
  return (
    <>
      <Background />
      <ScrollToTop />
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </>
  );
}
