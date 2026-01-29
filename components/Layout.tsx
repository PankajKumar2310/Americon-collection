import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Concierge from "./Concierge";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Concierge />
    </>
  );
};

export default Layout;