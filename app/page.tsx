import React from "react";
import HeaderBar from "../components/home/HeaderBar";
import AvatarEditor from "../components/AvatarEditor";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container">
      <main>
        <HeaderBar />
        <AvatarEditor />
      </main>
    </div>
  );
};

export default page;
