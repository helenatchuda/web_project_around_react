export default function EditProfile() {


    return(
        <>
      
        <form class="popup__form form popup__form-edit-name" novalidate>
          <label for="name">
            <input
              type="text"
              id="name"
              class="form__input  form__input-userName"
              placeholder="Nome"
              required
              minlength="2"
              maxlength="40"
            />
            <span
              class="form__error"
              id="name-error"
              aria-live="polite"
            ></span>
          </label>
          <label for="description">
            <input
              type="text"
              id="description"
              class="form__input  form__input-about"
              placeholder="Descrição  "
              required
              minlength="2"
              maxlength="200"
            />
            <span
              class="form__error"
              id="description-error"
              aria-live="polite"
            ></span>
          </label>
          <button
            type="submit"
            class="popup__save-button popup__save-button_disabled"
            disabled
          >
            Salvar
          </button>
          <div
            class="form__error-summary"
            role="alert"
            aria-live="polite"
          ></div>
        </form>
     
    
        </>
    )
}