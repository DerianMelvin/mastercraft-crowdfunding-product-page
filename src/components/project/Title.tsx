import logoMastercraft from "../../images/logo-mastercraft.svg";
import iBookmark from "../../images/icon-bookmark.svg";

const Title = (): JSX.Element => {
  return (
    <div>
      <div>
        <img src={logoMastercraft} alt="mastercraft logo" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>

      <div>
        <button>Back this project</button>
        <button>
          <img src={iBookmark} alt="bookmark icon" /> <span>Bookmark</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
