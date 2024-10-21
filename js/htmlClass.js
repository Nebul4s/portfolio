class htmlClass {
  _booking = `            <div class="contact--form__header">
              <div class="contact--option book">
                <img class="book--image" src="./assets/man.svg" />
                <span>I'd like to book you in</span>
              </div>
              <img src="./assets/close.svg" class="close--icon" />
            </div>
            <form>
              <div class="form--input__container">
                <label>Name</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Email</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Company</label>
                <input type="text" />
              </div>
              <div class="form--input__container">
                <label>Budget</label>
                <input type="text" required/>
              </div>
              <div class="form--date__container">
                <div class="form--date">
                  <label>Start date</label>
                  <input type="date" required/>
                </div>
                <div class="form--date">
                  <label>Start date</label>
                  <input type="date" required/>
                </div>
              </div>
              <div class="form--message__container">
                <label>Message</label>
                <textarea required></textarea>
              </div>
              <button class="send--button">
                <span>Send</span>
              </button>
            </form>`;
  _quote = `            <div class="contact--form__header">
                   <div class="contact--option" data-form="quote">
              <img class="quote--image" src="./assets/banknotes.svg" />
              <span>I'd like a quote for a project</span>
            </div>
              <img src="./assets/close.svg" class="close--icon" />
            </div>
            <form>
              <div class="form--input__container">
                <label>Name</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Email</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Company</label>
                <input type="text" />
              </div>
              <div class="form--input__container">
                <label>Budget</label>
                <input type="text" required/>
              </div>
              <div class="form--date__container">
                <div class="form--date">
                  <label>Start date</label>
                  <input type="date" required/>
                </div>
                <div class="form--date">
                  <label>Start date</label>
                  <input type="date" required/>
                </div>
              </div>
              <div class="form--message__container">
                <label>Message</label>
                <textarea required></textarea>
              </div>
              <button class="send--button">
                <span>Send</span>
              </button>
            </form>`;
  _hello = `            <div class="contact--form__header">
               <div class="contact--option" data-form="hello">
              <img class="hello--image" src="./assets/wave.svg" />
              <span>I'd just like to say hello!'</span>
            </div>
              <img src="./assets/close.svg" class="close--icon" />
            </div>
            <form>
              <div class="form--input__container">
                <label>Name</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Email</label>
                <input type="text" required/>
              </div>
              <div class="form--input__container">
                <label>Company</label>
                <input type="text" />
              </div>
              <div class="form--message__container">
                <label>Message</label>
                <textarea required></textarea>
              </div>
              <button class="send--button">
                <span>Send</span>
              </button>
            </form>`;

  _generateMarkup(option) {
    if (option == "book") {
      return this._booking;
    } else if (option == "quote") {
      return this._quote;
    } else if (option == "hello") {
      return this._hello;
    }
  }
}
export default new htmlClass();
