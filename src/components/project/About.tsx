import CardReward from "./about/CardReward";
import projectStyles from "../../css/Project.module.css";

type Props = {
  handleModal(): void;
};

const About = ({ handleModal }: Props): JSX.Element => {
  return (
    <div className={projectStyles.container}>
      <section className={projectStyles.about}>
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <CardReward
          reward="Bamboo Stand"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          pledgeAmount={25}
          fundingLimit={101}
          handleModal={handleModal}
        />
        <CardReward
          reward="Black Edition Stand"
          description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledgeAmount={75}
          fundingLimit={64}
          handleModal={handleModal}
        />
        <CardReward
          reward="Mahogany Special Edition"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          pledgeAmount={200}
          fundingLimit={0}
        />
      </section>
    </div>
  );
};

export default About;
