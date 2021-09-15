import cardStyles from "../../../css/Card.module.css";

type Props = {
  reward: string;
  description: string;
  pledgeAmount: number;
  fundingLimit: number;
  handleModal?(): void;
};

const CardReward = ({
  reward,
  description,
  pledgeAmount,
  fundingLimit,
  handleModal,
}: Props): JSX.Element => {
  const displayModal = () => {
    return handleModal !== undefined ? handleModal() : "";
  };

  return (
    <div className={cardStyles.cardReward}>
      <div className={cardStyles.content}>
        <div className={cardStyles.title}>
          <h3>{reward}</h3>
          <span>Pledge ${pledgeAmount} or more</span>
        </div>
        <p className={cardStyles.description}>{description}</p>
        <div className={cardStyles.information}>
          <h2>
            {fundingLimit} <span>left</span>
          </h2>
          <button className={cardStyles.btn} onClick={() => displayModal()}>
            Select Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardReward;
