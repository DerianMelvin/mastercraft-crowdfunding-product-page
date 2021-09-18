import { ChangeEvent, useState } from "react";
import modalStyles from "../css/Modal.module.css";
import CardSelect from "./modal/CardSelect";

type Props = {
  handleModal(): void;
};

const ModalSelect = ({ handleModal }: Props): JSX.Element => {
  const [radioName, setRadioName] = useState<string>("");

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRadioName(e.target.value);
  };

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.container}>
        <div className={modalStyles.modalSelect}>
          <div className={modalStyles.titleGroup}>
            <h2>Back this project</h2>
            <button onClick={() => handleModal()}>Close</button>
          </div>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <CardSelect
            rewardTitle="Pledge with no reward"
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            radioName={radioName}
            handleRadioChange={handleRadioChange}
          />
          <CardSelect
            rewardTitle="Bamboo Stand"
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            minimumPledge={25}
            fundingLimit={101}
            radioName={radioName}
            handleRadioChange={handleRadioChange}
          />
          <CardSelect
            rewardTitle="Black Edition Stand"
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            minimumPledge={75}
            fundingLimit={64}
            radioName={radioName}
            handleRadioChange={handleRadioChange}
          />
          <CardSelect
            rewardTitle="Mahogany Special Edition"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            minimumPledge={200}
            fundingLimit={0}
            radioName={radioName}
            handleRadioChange={handleRadioChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSelect;
