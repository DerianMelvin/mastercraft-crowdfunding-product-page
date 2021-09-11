import logoMastercraft from "../../images/logo-mastercraft.svg";
import iBookmark from "../../images/icon-bookmark.svg";
import projectStyles from "../../css/Project.module.css";

const Title = (): JSX.Element => {
  return (
    <div className={projectStyles.container}>
      <div className={projectStyles.title}>
        <img src={logoMastercraft} alt="mastercraft logo" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>

      <div className={projectStyles.callToActions}>
        <button className={projectStyles.btn}>Back this project</button>
        <button className={projectStyles.bookmark}>
          <img src={iBookmark} alt="bookmark icon" /> <span>Bookmark</span>
        </button>
      </div>
    </div>
  );
};

export default Title;
