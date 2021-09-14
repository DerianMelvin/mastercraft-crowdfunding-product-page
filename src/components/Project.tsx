import { useState } from "react";
import About from "./project/About";
import Status from "./project/Status";
import Title from "./project/Title";
import projectStyles from "../css/Project.module.css";
import Modal from "./Modal";

const Project = (): JSX.Element => {
  const [viewModal, setViewModal] = useState<boolean>(false);

  const handleModal = () => {
    setViewModal((prevState) => !prevState);
  };

  return (
    <main className={projectStyles.main}>
      {viewModal && <Modal handleModal={handleModal} />}

      <Title handleModal={handleModal} />
      <Status />
      <About handleModal={handleModal} />
    </main>
  );
};

export default Project;
