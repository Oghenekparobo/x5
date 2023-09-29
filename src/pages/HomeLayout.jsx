import Feature from "../components/Features/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import Work from "../components/Work/Work";

const HomeLayout = () => {
  return (
    <div className="bg-custom-body">
      <Navbar />
      <Header />
      <Feature />
      <Work />
      <Footer />
    </div>
  );
};

export default HomeLayout;
