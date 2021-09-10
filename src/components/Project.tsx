import About from "./project/About";
import Status from "./project/Status";
import Title from "./project/Title";

const Project = (): JSX.Element => {
  return (
    <main>
      <Title />
      <Status />
      <About />
    </main>
  );
};

export default Project;
