import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import Concierge from "./Concierge";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <Concierge /> */}
    </>
  );
};

export default Layout;