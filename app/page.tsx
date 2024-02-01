import React from 'react';
import HeaderBar from '../components/home/HeaderBar';
import AvatarEditor from '../components/AvatarEditor';

const page = () => {
  return (
    <div>
      <main className="bg-white flex flex-col">
        <HeaderBar />
        <AvatarEditor />
      </main>
    </div>
  );
};

export default page;
