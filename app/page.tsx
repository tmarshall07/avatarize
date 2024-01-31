import React from 'react';
import HeaderBar from '../components/home/HeaderBar';
import AvatarEditor from '../components/AvatarEditor';

const page = () => {
  return (
    <div>
      <main className="bg-white p-6 flex flex-col gap-5">
        <HeaderBar />
        <AvatarEditor />
      </main>
    </div>
  );
};

export default page;
