var btnOpen = document.querySelector(".search-hotel-modal");
var modalHotel = document.querySelector(".modal-search-hotel");
var form =  modalHotel.querySelector("form");
var inputArrival = modalHotel.querySelector("search-hotel-date-arrival");
var inputDeparture = modalHotel.querySelector("search-hotel-date-departure");

var isStorageSupport = true;
var storage = "";



try {
    storage = localStorage.getItem("inputArrival");
    storage = localStorage.getItem("inputDeparture");
  } catch (err) {
    isStorageSupport = false;
  }


btnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalHotel.classList.toggle("modal-animation");


  if(storage) {
    inputArrival.value = storage;
    inputDeparture.value = storage;

  }
  else {
    inputArrival.focus();
  }

});

form.addEventListener("submit", function (evt) {
    if (!inputArrival.value || !inputDeparture.value) {
      evt.preventDefault();
      modalHotel.classList.remove("modal-error");
      modalHotel.offsetWidth = modalHotel.offsetWidth;
      modalHotel.classList.add("modal-error");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("date-arrival", inputArrival.value);
        localStorage.setItem("date-departure", inputDeparture.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalHotel.classList.contains("modal-animation")) {
        modalHotel.classList.remove("modal-animation");
        modalHotel.classList.add("modal-error");
      }
    }
  });
