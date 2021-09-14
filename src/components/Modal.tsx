import modalStyles from "../css/Modal.module.css";

type Props = {
  handleModal(): void;
};

const Modal = ({ handleModal }: Props): JSX.Element => {
  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.container}>
        <div className={modalStyles.modal}>
          <div className={modalStyles.titleGroup}>
            <h2>Back this project</h2>
            <button onClick={() => handleModal()}>Close</button>
          </div>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
