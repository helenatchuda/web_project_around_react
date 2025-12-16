class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this.headers = headers;
    // corpo do construtor
  }
  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // se o servidor retornar um erro, rejeite a promessa
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleServerResponse);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleServerResponse);
  }

  //PATCH https://around-api.pt-br.tripleten-services.com/v1/users/me
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._handleServerResponse);
  }



  //GET https://around-api.pt-br.tripleten-services.com/v1/users/me
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // se o servidor retornar um erro, rejeite a promessa
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this.headers,
      method: like ? "PUT" : "DELETE",
    }).then(this._handleServerResponse);
  }
}

export const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "e0b41a55-bd02-4b93-a5a3-a9254a9ee601",
    "Content-Type": "application/json",
  },
});
