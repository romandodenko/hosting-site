"use strict";

export function tabs() {
  document.addEventListener("DOMContentLoaded", function() {
    const partnersTable = document.querySelector(".partners-table");
    const loanApplications = document.querySelector(".loan-applications");
    const creditHistory = document.querySelector(".credit-history");
    const moderator = document.querySelector(".moderator");
    const seeDocument = document.querySelector(".see-accordion");
    if (partnersTable || creditHistory || moderator || seeDocument) {
      document.querySelectorAll(".tab-button").forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (event) {
          const path = event.currentTarget.dataset.path
    
          document.querySelectorAll(".tab-content").forEach(function (rowContent) {
            rowContent.classList.remove("tab-content-active")
          })
          document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
        })
      })
  
  
      document.querySelectorAll(".tab-button").forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (event) {
          const path1 = event.currentTarget.dataset.path1
    
          document.querySelectorAll(".tab-button").forEach(function (tabContent) {
            tabContent.classList.remove("tab-button-active")
          })
          document.querySelector(`[data-target1="${path1}"]`).classList.add("tab-button-active")
        })
      })
    }
    if (loanApplications) {
      document.querySelectorAll(".loan-applications__button-tab").forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (event) {
          const path2 = event.currentTarget.dataset.path2
    
          document.querySelectorAll(".loan-applications__inner").forEach(function (tabContent) {
            tabContent.classList.remove("element-active")
          })
          document.querySelector(`[data-target2="${path2}"]`).classList.add("element-active")
        })
      })
      document.querySelectorAll(".loan-applications__button-tab").forEach(function (tabsBtn) {
        tabsBtn.addEventListener("click", function (event) {
          const path3 = event.currentTarget.dataset.path3
    
          document.querySelectorAll(".loan-applications__button-tab").forEach(function (tabContent) {
            tabContent.classList.remove("tab-button-active")
          })
          document.querySelector(`[data-target3="${path3}"]`).classList.add("tab-button-active")
        })
      })
    }
 
  })
}

/* 
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>
          
              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  } 

*/
