import React from "react";
import AvatarCard from "./listBuildingComponents/AvatarCard";
import CommonSectionWithEmail from "./CommonSectionWithEmail";

const avatarData = [
  {
    imgSrc: "/img/mark.webp",
    name: "Mark",
    title: "Senior Usability Designer",
    age: 22,
    description:
      "Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et ducimus ut assumenda id.",
  },
  {
    imgSrc: "/img/justin.webp",
    name: "Justin",
    title: "Dynamic Web Consultant",
    age: 31,
    description:
      "Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et ducimus ut assumenda id.",
  },
  {
    imgSrc: "/img/maggi.webp",
    name: "Maggie",
    title: "Central Branding Specialist",
    age: 22,
    description:
      "Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et ducimus ut assumenda id.",
  },
];

function ListBuilding() {
  return (
    <div className="w-full max-w-[988px] px-4 py-0 md:py-[60px] m-auto">
      <CommonSectionWithEmail color="#9c23e3" img="/img/email.webp">
        <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
          No wasting time on “<span className="text-purple">list building</span>
          ”, figuring out whom to email
        </h2>
        <p className="text-base md:text-lg text-white mt-5 mb-0">
          Let the Al do all the work of finding the right people
        </p>
        <strong className="text-base md:text-lg text-white mt-2 inline-block w-full">
          Recepient Persona
        </strong>
      </CommonSectionWithEmail>
      <div className="flex md:grid md:grid-cols-3 gap-3 lg:gap-14 mt-6 md:mt-28 md:overflow-hidden overflow-auto">
        {avatarData.map((avatar, index) => (
          <AvatarCard
            key={index}
            imgSrc={avatar.imgSrc}
            name={avatar.name}
            title={avatar.title}
            age={avatar.age}
            description={avatar.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ListBuilding;
