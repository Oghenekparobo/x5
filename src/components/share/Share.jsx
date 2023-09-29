import facebook from "../../assets/share-icons/facebook.png";
import telegram from "../../assets/share-icons/telegram.png";
import whatsapp from "../../assets/share-icons/whatsapp.png";

const Share = () => {
  return (
    <section className="share my-6 px-8">
      <h6 className=" font-bold tracking-wide py-2">Share your video</h6>

      <section className="share__btn flex space-x-4 py-2">
        <button className="flex border border-gray-400 rounded-md px-2 py-1 space-x-3 items-center shadow-sm">
          <span>
            <img src={facebook} alt="facebook-icon" />
          </span>
          <span>Facebook</span>
        </button>
        <button className="flex border border-gray-400 rounded-md px-2 py-1 space-x-3 items-center shadow-sm">
          <img src={whatsapp} alt="whatsapp-icon" /> <span>Whatsapp</span>
        </button>
        <button className="flex border border-gray-400 rounded-md px-2 py-1 space-x-3 items-center shadow-sm">
          <img src={telegram} alt="telegram-icon" /> <span>Telegram</span>
        </button>
      </section>
    </section>
  );
};

export default Share;
