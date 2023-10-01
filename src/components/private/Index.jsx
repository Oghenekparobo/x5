import Nav from "./Nav";
import Header from "./Header";
import Recent from "../recordings/Recent";
import LastWeek from "../recordings/LastWeek";
import Footer from "../Footer";

const Private = () => {
  return (
    <section className="bg-white">
      <Nav />
      {/* nav header */}
      <Header />

      {/* recordings section */}

      {/* recents */}
      <Recent />

      {/* last week */}
      <LastWeek />

      <Footer />
    </section>
  );
};

export default Private;
