"use strict"

export function select() {
    if (document.querySelector('.filter')) {
        document.querySelectorAll('.filter').forEach((select) => {

            const dropDownCurrent = select.querySelector('.filter__current');
            const dropDownList = select.querySelector('.filter__list');
            const dropDownItem = dropDownList.querySelectorAll('.filter__list-item');
        
            const dropDownTitle = select.querySelector('.filter__title');
            
        
            dropDownCurrent.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropDownCurrent.classList.toggle('active');
                dropDownCurrent.parentNode.classList.toggle('_active');
                dropDownList.classList.toggle('active');
            });
        
            dropDownItem.forEach((item) => {
                item.addEventListener('click', (e) => {
                    
                    e.stopPropagation();
                    dropDownCurrent.innerText = item.querySelector('span').innerText;
                    dropDownCurrent.focus();
                    dropDownList.classList.remove('active');
                    dropDownCurrent.classList.remove('active');
                    dropDownCurrent.parentNode.classList.remove('_active');
        
                    dropDownItem.forEach((e) => {
                        e.classList.remove('active');
                    });
        
                    item.classList.add('active');
        
        
                    
                });
            });
        
            document.addEventListener('click', (e) => {
                if (e.target !== dropDownCurrent) {
                    dropDownList.classList.remove('active');
                    dropDownCurrent.classList.remove('active');
                    dropDownCurrent.parentNode.classList.remove('_active');
                }
            });
        
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab' || e.key === 'Escape') {
                    dropDownList.classList.remove('active');
                    dropDownCurrent.classList.remove('active');
                    dropDownCurrent.parentNode.classList.remove('_active');
                }
            });
        
        
        
        });
        const brandItem = document.querySelectorAll(".brand-item")
        const currentItemBrand = document.querySelector(".brand-current")
        const modelItem = document.querySelectorAll(".model-item")
        const currentItemModel = document.querySelector(".model-current")
        const generationItem = document.querySelectorAll(".generation-item")
        const currentItemGeneration = document.querySelector(".generation-current")
        const engineItem = document.querySelectorAll(".engine-item")
        const currentItemEngine = document.querySelector(".engine-current")
        brandItem.forEach(function(brandItem) {
            brandItem.addEventListener("click", function() {
                currentItemBrand.classList.add("current-active")
            })
        })
        modelItem.forEach(function(modelItem) {
            modelItem.addEventListener("click", function() {
                currentItemModel.classList.add("current-active")
            })
        })
        engineItem.forEach(function(engineItem) {
            engineItem.addEventListener("click", function() {
                currentItemEngine.classList.add("current-active")
            })
        })
        generationItem.forEach(function(generationItem) {
            generationItem.addEventListener("click", function() {
                currentItemGeneration.classList.add("current-active")
            })
        })
        // const filterSearch = document.querySelector('.filter-search');
        // const filterCurrentSearch = document.querySelector(".current-search");
        // const mainWrapper = document.querySelector("main");
        // filterCurrentSearch.addEventListener("click", function() {
        //     filterSearch.classList.toggle("search-ready")
        // })
        // mainWrapper.addEventListener("click", function() {
        //     filterSearch.classList.remove("search-ready")
        // })
    }
   
}