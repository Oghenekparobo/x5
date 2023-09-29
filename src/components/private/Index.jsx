import Nav from "./Nav";
import Header from "./Header";
import Recent from "../recordings/Recent";
import LastWeek from "../recordings/LastWeek";

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
    </section>
  );
};

export default Private;
