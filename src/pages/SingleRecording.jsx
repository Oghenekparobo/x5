import Nav from "../components/private/Nav";
import BreadCrumb from "../components/util/BreadCrumb";
import Recording from "../components/recordings/Recording";

import Share from "../components/share/Share";

const SingleRecording = () => {
  return (
    <section>
      <Nav />
      <BreadCrumb />

      {/* recording */}
      <Recording />

      {/* share */}

      <Share />

      {/* transcripts */}
      <section className="px-8 ">
        <h1 className="font-bold">Transcripts</h1>
      </section>
    </section>
  );
};

export default SingleRecording;
