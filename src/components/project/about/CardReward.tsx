type Props = {
  reward: string;
  description: string;
  pledgeAmount: number;
  fundingLimit: number;
};

const CardReward = ({
  reward,
  description,
  pledgeAmount,
  fundingLimit,
}: Props) => {
  return (
    <div>
      <div>
        <h3>{reward}</h3>
        <span>Pledge ${pledgeAmount} or more</span>
      </div>
      <p>{description}</p>
      <div>
        <h2>
          {fundingLimit} <span>left</span>
        </h2>
        <button>Select Reward</button>
      </div>
    </div>
  );
};

export default CardReward;
