import { ChangeEvent } from "react";
import cardStyles from "../../css/Card.module.css";

type Props = {
  rewardTitle: string;
  description: string;
  minimumPledge?: number;
  fundingLimit?: number;
  radioName: string;
  handleRadioChange(e: ChangeEvent<HTMLInputElement>): void;
};

type RenderElementType = JSX.Element | string;

const CardSelect = ({
  rewardTitle,
  description,
  minimumPledge,
  fundingLimit,
  radioName,
  handleRadioChange,
}: Props): JSX.Element => {
  const renderMinimumPledge = (): RenderElementType => {
    return minimumPledge ? <span>Pledge ${minimumPledge} or more</span> : "";
  };

  const renderFundingLimit = (): RenderElementType => {
    return fundingLimit || fundingLimit === 0 ? (
      <h2>
        {fundingLimit} <span>left</span>
      </h2>
    ) : (
      ""
    );
  };

  const renderPledgeAmount = (): RenderElementType => {
    return radioName === rewardTitle ? (
      <div>
        <span>Enter your pledge</span>
        <div>
          <input
            type="number"
            name="pledgeAmount"
            value={minimumPledge ? minimumPledge : 1}
            min={minimumPledge ? minimumPledge : 1}
          />
          <button>Continue</button>
        </div>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div className={cardStyles.cardSelect}>
      <div className={cardStyles.selection}>
        <input
          type="radio"
          name="pledge"
          value={rewardTitle}
          onChange={handleRadioChange}
          checked={radioName === rewardTitle}
        />
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
      {renderPledgeAmount()}
    </div>
  );
};

export default CardSelect;
