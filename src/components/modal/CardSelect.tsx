import cardStyles from "../../css/Card.module.css";

type Props = {
  rewardTitle: string;
  description: string;
  minimumPledge?: number;
  fundingLimit?: number;
};

const CardSelect = ({
  rewardTitle,
  description,
  minimumPledge,
  fundingLimit,
}: Props): JSX.Element => {
  const renderMinimumPledge = (): JSX.Element | string => {
    return minimumPledge ? <span>Pledge ${minimumPledge} or more</span> : "";
  };

  const renderFundingLimit = (): JSX.Element | string => {
    return fundingLimit || fundingLimit === 0 ? (
      <h2>
        {fundingLimit} <span>left</span>
      </h2>
    ) : (
      ""
    );
  };

  return (
    <div className={cardStyles.cardSelect}>
      <div className={cardStyles.selection}>
        <input type="radio" name="pledge" id={rewardTitle} />
        <div className={cardStyles.selectionGroup}>
          <div className={cardStyles.title}>
            <h3>{rewardTitle}</h3>
            {renderMinimumPledge()}
          </div>
          {renderFundingLimit()}
        </div>
      </div>
      <div className={cardStyles.information}>
        <p>{description}</p>
        {renderFundingLimit()}
      </div>
    </div>
  );
};

export default CardSelect;
