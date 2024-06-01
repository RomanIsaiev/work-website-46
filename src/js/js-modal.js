(() => {
  const refs = {
    backdrop: document.querySelector(".backdrop"),

    openSoloModal: document.querySelector("[solo-modal-open]"),
    closeSoloModal: document.querySelector("[solo-modal-close]"),
    soloModal: document.querySelector("[solo-modal]"),

    openPartyModal: document.querySelector("[party-modal-open]"),
    closePartyModal: document.querySelector("[party-modal-close]"),
    partyModal: document.querySelector("[party-modal]"),

    openPersonalModal: document.querySelector("[personal-modal-open]"),
    closePersonalModal: document.querySelector("[personal-modal-close]"),
    personalModal: document.querySelector("[personal-modal]"),

    openReservBtn: document.querySelectorAll("[reserv-modal-open]"),
    reservModal: document.querySelector("[reserv-modal]"),
    reservClose: document.querySelector("[reserv-modal-close]"),
  };

  refs.backdrop.addEventListener("click", onBackdropClick);

  refs.openReservBtn.forEach((item) =>
    item.addEventListener("click", reservToggleModal)
  );

  refs.reservClose.addEventListener("click", reservToggleModal);

  function reservToggleModal() {
    refs.reservModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }

  refs.openSoloModal.addEventListener("click", soloToggleModal);
  refs.closeSoloModal.addEventListener("click", soloToggleModal);

  function soloToggleModal() {
    refs.soloModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }

  refs.openPartyModal.addEventListener("click", partyToggleModal);
  refs.closePartyModal.addEventListener("click", partyToggleModal);

  function partyToggleModal() {
    refs.partyModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }

  refs.openPersonalModal.addEventListener("click", personalToggleModal);
  refs.closePersonalModal.addEventListener("click", personalToggleModal);

  function personalToggleModal() {
    refs.personalModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      reservToggleModal();
      soloToggleModal();
      personalToggleModal();
    }
  }

  if ("ontouchstart" in window) {
    refs.openReservBtn.forEach((item) =>
      item.addEventListener("touchstart", reservToggleModal)
    );
  }
})();
