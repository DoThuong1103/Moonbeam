import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
