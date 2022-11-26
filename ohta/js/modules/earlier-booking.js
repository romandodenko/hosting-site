"use strict"

export function earlierBooking() {
  const share = document.querySelector(".share");
  const chareCircle = document.querySelector(".share__circle");
  const shareBtn = document.querySelector(".share__btn");
  const shareList = document.querySelector(".share__soc");
  if (share) {
    shareBtn.addEventListener("click", function() {
      shareBtn.classList.toggle("share-btn-active")
      shareList.classList.toggle("share-list-active")
    })
  }
}