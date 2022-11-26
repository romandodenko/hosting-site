"use strict"
// не забудь подключить файлы библиотеки
export function selectChoices() {
  const selectOne = document.querySelector('.select-1'); // элемент choices
  const selectTwo = document.querySelector('.select-2'); // элемент choices
  const selectThird = document.querySelector('.select-3'); // элемент choices
  const selectFour = document.querySelector('.select-4'); // элемент choices
  const selectFive = document.querySelector('.select-5'); // элемент choices
  const selectSix = document.querySelector('.select-6'); // элемент choices
  const selectSeven = document.querySelector('.select-7'); // элемент choices
  const selectEight = document.querySelector('.select-8'); // элемент choices
  const selectNine = document.querySelector('.select-9'); // элемент choices
  const selectTen = document.querySelector('.select-10'); // элемент choices
  if (selectOne) {
    const choices = new Choices(selectOne, {
      searchEnabled: false,
    });
  }
  if (selectTwo) {
    const choices2 = new Choices(selectTwo, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices2',
          containerInner: 'choices__inner2',
          input: 'choices__input2',
          inputCloned: 'choices__input--cloned2',
          list: 'choices__list2',
          listItems: 'choices__list--multiple2',
          listSingle: 'choices__list--single2',
          listDropdown: 'choices__list--dropdown2',
          item: 'choices__item2',
          itemSelectable: 'choices__item--selectable2',
          itemDisabled: 'choices__item--disabled2',
          itemChoice: 'choices__item--choice2',
          placeholder: 'choices__placeholder2',
          group: 'choices__group2',
          groupHeading: 'choices__heading2',
          button: 'choices__button2',
      },
    });
  }
  if (selectThird) {
    const choices3 = new Choices(selectThird, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices3',
          containerInner: 'choices__inner3',
          input: 'choices__input3',
          inputCloned: 'choices__input--cloned3',
          list: 'choices__list3',
          listItems: 'choices__list--multiple3',
          listSingle: 'choices__list--single3',
          listDropdown: 'choices__list--dropdown3',
          item: 'choices__item3',
          itemSelectable: 'choices__item--selectable3',
          itemDisabled: 'choices__item--disabled3',
          itemChoice: 'choices__item--choice3',
          placeholder: 'choices__placeholder3',
          group: 'choices__group3',
          groupHeading: 'choices__heading3',
          button: 'choices__button3',
      },
    });
  }

  if (selectFour) {
    const choices3 = new Choices(selectFour, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices4',
          containerInner: 'choices__inner4',
          input: 'choices__input4',
          inputCloned: 'choices__input--cloned4',
          list: 'choices__list4',
          listItems: 'choices__list--multiple4',
          listSingle: 'choices__list--single4',
          listDropdown: 'choices__list--dropdown4',
          item: 'choices__item4',
          itemSelectable: 'choices__item--selectable4',
          itemDisabled: 'choices__item--disabled4',
          itemChoice: 'choices__item--choice4',
          placeholder: 'choices__placeholder4',
          group: 'choices__group4',
          groupHeading: 'choices__heading4',
          button: 'choices__button4',
      },
    });
  }
  if (selectFive) {
    const choices3 = new Choices(selectFive, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices5',
          containerInner: 'choices__inner5',
          input: 'choices__input5',
          inputCloned: 'choices__input--cloned5',
          list: 'choices__list5',
          listItems: 'choices__list--multiple5',
          listSingle: 'choices__list--single5',
          listDropdown: 'choices__list--dropdown5',
          item: 'choices__item5',
          itemSelectable: 'choices__item--selectable5',
          itemDisabled: 'choices__item--disabled5',
          itemChoice: 'choices__item--choice5',
          placeholder: 'choices__placeholder5',
          group: 'choices__group5',
          groupHeading: 'choices__heading5',
          button: 'choices__button5',
      },
    });
  }
  if (selectSix) {
    const choices3 = new Choices(selectSix, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices6',
          containerInner: 'choices__inner6',
          input: 'choices__input6',
          inputCloned: 'choices__input--cloned6',
          list: 'choices__list6',
          listItems: 'choices__list--multiple6',
          listSingle: 'choices__list--single6',
          listDropdown: 'choices__list--dropdown6',
          item: 'choices__item6',
          itemSelectable: 'choices__item--selectable6',
          itemDisabled: 'choices__item--disabled6',
          itemChoice: 'choices__item--choice6',
          placeholder: 'choices__placeholder6',
          group: 'choices__group6',
          groupHeading: 'choices__heading6',
          button: 'choices__button6',
      },
    });
  }
  if (selectSeven) {
    const choices3 = new Choices(selectSeven, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices7',
          containerInner: 'choices__inner7',
          input: 'choices__input7',
          inputCloned: 'choices__input--cloned7',
          list: 'choices__list7',
          listItems: 'choices__list--multiple7',
          listSingle: 'choices__list--single7',
          listDropdown: 'choices__list--dropdown7',
          item: 'choices__item7',
          itemSelectable: 'choices__item--selectable7',
          itemDisabled: 'choices__item--disabled7',
          itemChoice: 'choices__item--choice7',
          placeholder: 'choices__placeholder7',
          group: 'choices__group7',
          groupHeading: 'choices__heading7',
          button: 'choices__button7',
      },
    });
  }
  if (selectEight) {
    const choices3 = new Choices(selectEight, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices8',
          containerInner: 'choices__inner8',
          input: 'choices__input8',
          inputCloned: 'choices__input--cloned8',
          list: 'choices__list8',
          listItems: 'choices__list--multiple8',
          listSingle: 'choices__list--single8',
          listDropdown: 'choices__list--dropdown8',
          item: 'choices__item8',
          itemSelectable: 'choices__item--selectable8',
          itemDisabled: 'choices__item--disabled8',
          itemChoice: 'choices__item--choice8',
          placeholder: 'choices__placeholder8',
          group: 'choices__group8',
          groupHeading: 'choices__heading8',
          button: 'choices__button8',
      },
    });
  }
  if (selectNine) {
    const choices3 = new Choices(selectNine, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices9',
          containerInner: 'choices__inner9',
          input: 'choices__input9',
          inputCloned: 'choices__input--cloned9',
          list: 'choices__list9',
          listItems: 'choices__list--multiple9',
          listSingle: 'choices__list--single9',
          listDropdown: 'choices__list--dropdown9',
          item: 'choices__item9',
          itemSelectable: 'choices__item--selectable9',
          itemDisabled: 'choices__item--disabled9',
          itemChoice: 'choices__item--choice9',
          placeholder: 'choices__placeholder9',
          group: 'choices__group9',
          groupHeading: 'choices__heading9',
          button: 'choices__button9',
      },
    });
  }
  if (selectTen) {
    const choices3 = new Choices(selectTen, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices10',
          containerInner: 'choices__inner10',
          input: 'choices__input10',
          inputCloned: 'choices__input--cloned10',
          list: 'choices__list10',
          listItems: 'choices__list--multiple10',
          listSingle: 'choices__list--single10',
          listDropdown: 'choices__list--dropdown10',
          item: 'choices__item10',
          itemSelectable: 'choices__item--selectable10',
          itemDisabled: 'choices__item--disabled10',
          itemChoice: 'choices__item--choice10',
          placeholder: 'choices__placeholder10',
          group: 'choices__group10',
          groupHeading: 'choices__heading10',
          button: 'choices__button10',
      },
    });
  }
}