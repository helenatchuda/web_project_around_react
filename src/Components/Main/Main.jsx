import { useState } from "react";
import Card from "../Card/Cards";
import Profile from "../Profile";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditAvatar from "../EditAvatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "New card",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Edit profile",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Edit avatar",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main>
      <Profile
        onPhotoClick={() => handleOpenPopup(editAvatarPopup)}
        onAddCard={() => handleOpenPopup(newCardPopup)}
        onEditProfile={() => handleOpenPopup(editProfilePopup)}
      />

      <ul className="cards">
        
        {cards.map((card) => (
        <Card key={card._id} card={card}/>
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
