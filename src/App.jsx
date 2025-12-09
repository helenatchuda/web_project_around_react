import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import {api} from "./utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // Buscar dados do usuário
  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
      });
  }, []);

  // Buscar cards
  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Erro ao buscar cards:", error);
      });
  }, []);

  // Função para atualizar likes
  function handleCardLike(updatedCard) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === updatedCard._id ? updatedCard : card
      )
    );
  }

  // Função para excluir card
  function handleCardDelete(cardId) {
    setCards((prevCards) =>
      prevCards.filter((card) => card._id !== cardId)
    );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main 
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;