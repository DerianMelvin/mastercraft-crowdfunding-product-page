import About from "./project/About";
import Status from "./project/Status";
import Title from "./project/Title";
import projectStyles from "../css/Project.module.css";

const Project = (): JSX.Element => {
  return (
    <main className={projectStyles.main}>
      <Title />
      <Status />
      <About />
    </main>
  );
};

export default Project;
