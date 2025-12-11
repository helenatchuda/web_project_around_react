import { useState, useEffect, useContext } from "react";
import Card from "../Card/Cards";
import Profile from "../Profile";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditAvatar from "../EditAvatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";
import {api }from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; 


export default function Main({ 
  onCardLike, 
  onCardDelete,
  onUpdateUser,
  onAddCard,
  onUpdateAvatar
}) {
  const currentUser = useContext(CurrentUserContext); // Obter usuário do contexto
  
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar cards da API
  const fetchCards = async () => {
    setIsLoading(true);
    try {
      const cardsData = await api.getInitialCards();
      setCards(cardsData);
    } catch (error) {
      console.error("Erro ao buscar cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Buscar cards na montagem
  useEffect(() => {
    fetchCards();
  }, []);

  // Configuração dos popups
  const newCardPopup = {
    title: "New card",
    children: (
      <NewCard 
        onAddCard={handleAddCardSubmit} 
        onClose={handleClosePopup}
      />
    ),
  };

  const editProfilePopup = {
    title: "Edit profile",
    children: (
      <EditProfile 
        onUpdateUser={handleUpdateUserSubmit} 
        onClose={handleClosePopup}
      />
    ),
  };

  const editAvatarPopup = {
    title: "Edit avatar",
    children: (
      <EditAvatar 
        onUpdateAvatar={handleUpdateAvatarSubmit} 
        onClose={handleClosePopup}
      />
    ),
  };

  // Handlers para abrir/fechar popups
  function handleOpenPopup(popupType) {
    setPopup(popupType);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;
    
    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}
  // Handler para deletar card
  async function handleCardDelete(card) {
    if (!window.confirm("Tem certeza que deseja excluir este card?")) {
      return;
    }
    
    try {
      await api.deleteCard(card._id);
      
      // Atualizar estado local
      setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
      
      // Chamar função do App se existir
      if (onCardDelete) {
        onCardDelete(card._id);
      }
    } catch (error) {
      console.error("Erro ao excluir card:", error);
    }
  }

  // Handler para atualizar usuário
  async function handleUpdateUserSubmit(userData) {
    try {
      // Chamar API
      const updatedUser = await api.setUserInfo(userData);
      
      // Chamar função do App
      if (onUpdateUser) {
        onUpdateUser(updatedUser);
      }
      
      // Fechar popup
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  }

  // Handler para adicionar card
  async function handleAddCardSubmit(cardData) {
    try {
      const newCard = await api.addNewCard(cardData);
      
      // Atualizar estado local
      setCards([newCard, ...cards]);
      
      // Chamar função do App se existir
      if (onAddCard) {
        onAddCard(newCard);
      }
      
      // Fechar popup
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao adicionar card:", error);
    }
  }

  // Handler para atualizar avatar
  async function handleUpdateAvatarSubmit(avatarData) {
    try {
      const updatedUser = await api.setUserAvatar(avatarData);
      
      // Chamar função do App
      if (onUpdateAvatar) {
        onUpdateAvatar(updatedUser);
      }
      
      // Fechar popup
      handleClosePopup();
    } catch (error) {
      console.error("Erro ao atualizar avatar:", error);
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <main>
        <Profile
          onPhotoClick={() => handleOpenPopup(editAvatarPopup)}
          onAddCard={() => handleOpenPopup(newCardPopup)}
          onEditProfile={() => handleOpenPopup(editProfilePopup)}
        />
        <div className="loading">Carregando cartões...</div>
      </main>
    );
  }

  return (
    <main>
      <Profile
        onPhotoClick={() => handleOpenPopup(editAvatarPopup)}
        onAddCard={() => handleOpenPopup(newCardPopup)}
        onEditProfile={() => handleOpenPopup(editProfilePopup)}
      />

      <ul className="cards">
        {cards.length === 0 ? (
          <p className="no-cards-message">Nenhum cartão encontrado</p>
        ) : (

          cards.map((card) => {
           
            // Verificar se o usuário atual curtiu este card
            const isLiked = card.isLiked;
            // Verificar se o card pertence ao usuário atual
            const isOwn = card.owner === currentUser._id;

            return (
              <Card 
                key={card._id} 
                card={card}
                isLiked={isLiked}
                isOwn={isOwn}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })
        )}
      </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}