/* переменные для попап */
const infoButton = document.querySelector(".profile__info-button");
const userName = document.querySelector(".profile__info-name");
const jobName = document.querySelector(".profile__info-job");
const closeButtonProfile = document.querySelector(".popup__close_profile");
const popupEditProfile = document.querySelector(".popup_edit_profile");
const popupEditForms = document.querySelector(".popup__forms");
const popupUserButton = document.querySelector(".profile__user-button");

/* переменные для попап place add */
const popupPlaceAdd = document.querySelector(".popup_place_add");
const userNameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const popupEditForm = document.querySelector(".popup__form");
const popupInputPlaceTitle = document.querySelector(".popup__input_type_title");
const popupInputPlaceLink = document.querySelector(".popup__input_type_link");

/* переменные для попап фото */
const popupCardPhoto = document.querySelector('.popup_photo_card');
const popupImageCard = document.querySelector('.popup__image-card');
const popupTitleCard = document.querySelector('.popup__title-card');
const popupButtonClosePhoto = document.querySelector(".popup__close_photo");
const popupButtonCloseCard = document.querySelector('.popup__close_crd');

/* переменные template */
const elementsTemplate = document.querySelector("#elements-add").content.querySelector(".elements__item");
const elementsList = document.querySelector(".elements__list");


/*функция открытия и закрытия попап */

function editOpenForm() {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};
function closePopupFormEdit() {
  closePopup(popupEditProfile);
};
function closePopupViewPhoto() {
  closePopup(popupCardPhoto);
};
function closePopupAddPhoto() {
  closePopup(popupPlaceAdd);
};

function openPopup(elem) {
  elem.classList.add("popup_opened");
};
function openFormAddPhoto() {
  openPopup(popupPlaceAdd);
};

/* функция редактирования профиля */
function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopupFormEdit();
};


/* функция лайка */
const likeHeart = (event) => {
  event.target.classList.toggle("elements__heart_active");
};

/* функция новое место */
  const submitAddCard = (event) => {
    event.preventDefault();
    renderElement({
      name: popupInputPlaceTitle.value,
      link: popupInputPlaceLink.value,
    });
    event.target.reset();
    closePopup(popupPlaceAdd);
  };

/* добавление карточек */
  const createCard = (cardData) => {
  const templateElement = elementsTemplate.cloneNode(true);
  const titleNewElements = templateElement.querySelector(".elements__title");
  const likeElementsHeart = templateElement.querySelector(".elements__heart");
  const elementsDelete = templateElement.querySelector(".elements__delete");
  const elementsImgCard = templateElement.querySelector(".elements__image");
  const titleElement = templateElement.querySelector(".elements__title");

  elementsImgCard.src = cardData.link;
  elementsImgCard.alt = cardData.alt;
  titleNewElements.textContent = cardData.name;

  function handleElementsCard() {
    popupImageCard.src = elementsImgCard.src;
    popupImageCard.alt = titleElement.textContent;
    popupTitleCard.textContent = titleElement.textContent;
    openPopup(popupCardPhoto);
  }

  elementsImgCard.addEventListener("click", handleElementsCard);
  elementsDelete.addEventListener("click", () => handleDeleteCard(cardId));
  likeElementsHeart.addEventListener("click", likeHeart);
  
  return templateElement;
  };

  const handleDeleteCard = (event) => {
    event.target.closest(".elements__item").remove();
  };

  const renderElement = (cardData) => {
    elementsList.prepend(createCard(cardData));
  };

  containerCards.forEach((cardData) => {
    renderElement(cardData);
  });


/* обработчик событий попап */
popupEditForms.addEventListener("submit", submitAddCard);
infoButton.addEventListener("click", editOpenForm);
popupEditForm.addEventListener("submit", submitHandlerEdit);
popupUserButton.addEventListener("click", openFormAddPhoto);
popupButtonClosePhoto.addEventListener("click", closePopupViewPhoto);
popupButtonCloseCard.addEventListener("click", closePopupAddPhoto);
closeButtonProfile.addEventListener("click", closePopupFormEdit);







