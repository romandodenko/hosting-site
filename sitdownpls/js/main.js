"use strict";
var e = gsap.timeline({
  paused: !0
});
e.to(".hidden", {
  duration: .3,
  opacity: 1,
  visibility: "visible",
  display: "block"
}), document.querySelector(".button-active").addEventListener("click", (function () {
  document.querySelector(".button-close").classList.add("vis"), document.querySelector(".button-active").classList.add("hid"), e.timeScale(1).play()
})), document.querySelector(".button-close").addEventListener("click", (function () {
  document.querySelector(".button-active").classList.remove("hid"), document.querySelector(".button-close").classList.remove("vis"), e.timeScale(2).reverse()
})), new Swiper(".hero__swiper", {
  loop: !0,
  lazy: {
    loadPrevNext: !0
  },
  speed: 500, // Автовоспроизведение
  autoplay: {
  delay: 9300,
  disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: !0,
    renderBullet: function (e, t) {
      return '<span class="' + t + '"><svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24"><circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"stroke-width="2.5px" stroke="#ff862f" fill="transparent"></circle></svg></span>'
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}), new Swiper(".special-order__swiper", {
  slidesPerGroup: 3,
  slidesPerView: "auto",
  breakpoints: {
    210: {
      slidesPerGroup: 1
    },
    737: {
      slidesPerGroup: 2
    },
    976: {
      slidesPerGroup: 3
    }
  },
  lazy: {
    loadPrevNext: !0
  },
  navigation: {
    nextEl: ".special-order-button-next",
    prevEl: ".special-order-button-prev"
  }
}), new Swiper(".useful__swiper", {
  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: !0
  },
  navigation: {
    nextEl: ".useful-button-next",
    prevEl: ".useful-button-prev"
  }
}), tippy(".main-form__toolp", {
  placement: "top",
  allowHTML: !0,
  role: "tooltip",
  trigger: "mouseenter focus click",
  hideOnClick: !0,
  theme: "colorToolp"
}), new JustValidate(".main-form__form", {
  colorWrong: "#D11616",
  rules: {
    name: {
      required: !0,
      minLength: 2,
      strength: {
        custom: "[а-яА-Яd]"
      }
    },
    tel: {
      required: !0
    },
    email: {
      required: !0,
      email: !0
    }
  },
  messages: {
    name: {
      required: "Введите ваше имя",
      minLength: "Минимальное количество букв - 2",
      strength: "Недопустимый формат"
    },
    email: "Недопустимый формат",
    tel: "Введите ваш телефон"
  },
  submitHandler: function (e, t, r) {
    var i = new FormData(e),
      o = new XMLHttpRequest;
    o.onreadystatechange = function () {
      4 === o.readyState && 200 === o.status && console.log("Отправлено")
    }, o.open("POST", "./resources/mail.php", !0), o.send(i), e.reset()
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaGlmZ1JhdGluZ0l0ZW1zIiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZSIsImR1cmF0aW9uIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lU2NhbGUiLCJkb2N1bWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJldmVyc2UiLCJsb29wIiwicGFnaW5hdGlvbiIsImNsYXNzTmFtZSIsIm5leHRFbCIsInNsaWRlc1Blckdyb3VwIiwic2xpZGVzUGVyVmlldyIsImxvYWRQcmV2TmV4dCIsInByZXZFbCIsIlN3aXBlciIsImFsbG93SFRNTCIsInVzZWZ1bFN3aXBlciIsInBsYWNlbWVudCIsInRpcHB5IiwiY29sb3JXcm9uZyIsInJ1bGVzIiwibmFtZSIsInJlcXVpcmVkIiwiSnVzdFZhbGlkYXRlIiwiZW1haWwiLCJjdXN0b20iLCJ0ZWwiLCJmb3JtRGF0YSIsIm1pbkxlbmd0aCIsInN0cmVuZ3RoIiwidCIsInIiLCJYTUxIdHRwUmVxdWVzdCIsInhociIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsInNlbmQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFJQSxFQUFrQkMsS0FBS0MsU0FBUyxDQUFFQyxRQUFBQSxJQUF0Q0MsRUFBc0NELEdBQUFBLFVBQVEsQ0FBQUUsU0FBQSxHQUFBQyxRQUFBLEVBQUFDLFdBQUEsVUFBQUMsUUFBQSxVQUFSTCxTQUFBQSxjQUF0QyxrQkFBQU0saUJBQUFBLFNBQUFBLFdBQUFKLFNBQUFLLGNBQUFELGlCQUFBQSxVQUFBQSxJQUFBQSxPQUFBSCxTQUFBSSxjQUFBRCxrQkFBQUEsVUFBQUEsSUFBQUEsT0FBQUYsRUFBQUksVUFBQUYsR0FBQUEsVUFBQUEsU0FBc0NOLGNBQUFBLGlCQUFBQSxpQkFBQUEsU0FBQUEsV0FBUVMsU0FBQUYsY0FBQSxrQkFBQUQsVUFBQUEsT0FBQSxPQUFBRyxTQUFBRixjQUFBLGlCQUFBRyxVQUFBQyxPQUFBLE9BQUFGLEVBQUFGLFVBQUEsR0FBQUssYUFHNUJWLElBQVFLLE9BQUFBLGdCQUFSTCxDQUhsQk8sTUFBQUEsRUFLQUEsS0FBQUEsQ0FMQVosY0FBQUEsR0FpQkVnQixXQUFBQSxDQUxBSixHQUFBQSxxQkFDQVosV0FBQUEsRUFEQVksYUFGc0NILFNBQUFBLEVBQUFBLEdBV3RDUSxNQUFBQSxnQkFBWUMsRUFBWkQsa09BWHNDUixXQUFBQSxDQWUzQlUsT0FBQUEsc0JBYlhQLE9BQUFBLHlCQTJCQVEsSUFBQUEsT0FBQUEseUJBQUFBLENBR0VBLGVBQUFBLEVBR0FDLGNBQUssT0FGSEQsWUFBQUEsQ0FER0EsSUFBQUEsQ0FHTEMsZUFBSyxHQUFBLElBQUEsQ0FUVEQsZUFBQSxHQVlTRSxJQUFBQSxDQVpURixlQUFBLElBRWdFRyxLQUFBQSxDQWU1REQsY0FBQUEsR0FRSkYsV0FBQUEsQ0FHRUMsT0FBQUEsNkJBckJvQkUsT0FBQUEsZ0NBc0JkLElBQUFDLE9BQUEsa0JBQUEsQ0FMUkosZUFBQUEsRUFpQkVLLGNBSkYsT0FYbURGLEtBV25ERyxDQUNBQyxjQUFBQSxHQUNBQyxXQUFNLENBQ0pELE9BQUFBLHNCQUhGSixPQUFBQSx5QkFBQUEsTUFhRU0sb0JBQUFBLENBQ0FDLFVBQUFBLE1BQ1FMLFdBQUFBLEVBQU5NLEtBQUFBLFVBQ0VDLFFBQUFBLHlCQURJUCxhQUFBQSxFQUhOUSxNQUVLLGVBQ0MsSUFRSkQsYUFBQUEsbUJBQUFBLENBVEdILFdBQUFBLFVBYUhLLE1BQUFBLENBTEdELEtBQUFBLENBUkFKLFVBQUFBLEVBYUhLLFVBQUFBLEVBRktILFNBQUFBLENBYjBCQyxPQUFBQSxjQWUxQkcsSUFBQUEsQ0FJREgsVUFBQUEsR0FyQlZDLE1BQUFBLENBMkJJRyxVQUFBQSxFQVZFRixPQUFBQSxJQW9CdUJBLFNBQUEsQ0FOckJHLEtBQUFBLENBbkJDTCxTQUFBQSxtQkFqQzBDVCxVQUFBQSxrQ0EwQy9DUSxTQUFNLHVCQUVKTyxNQUFBQSxzQkFDQUMsSUFBQUEsdUJBR0ZILGNBQUssU0FBQWhDLEVBQUFvQyxFQUFBQyxHQWZBVCxJQUFBQSxFQUFBQSxJQUFBQSxTQUFBQSxHQW1CREssRUFBQUEsSUFBUUssZUFJWkMsRUFBSUMsbUJBQXFCLFdBRUEsSUFBbkJELEVBQUlFLFlBQ2EsTUFBZkYsRUFBSUcsUUFDTkMsUUFBUUMsSUFBSSxlQUtsQkwsRUFBSU0sS0FBSyxPQUFRLHdCQUFBLEdBQ2pCTixFQUFJTyxLQUFLYixHQUdWYyxFQUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGlnaCByYXRpbmcg0LrQvdC+0L/QutCwXHJcbmxldCBoaWZnUmF0aW5nSXRlbXMgPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pXHJcblxyXG5oaWZnUmF0aW5nSXRlbXNcclxuICAudG8oXCIuaGlkZGVuXCIsIHtkdXJhdGlvbjogLjMsIG9wYWNpdHk6IDEsIHZpc2liaWxpdHk6IFwidmlzaWJsZVwiLCBkaXNwbGF5OiBcImJsb2NrXCJ9KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWN0aXZlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jbG9zZVwiKS5jbGFzc0xpc3QuYWRkKFwidmlzXCIpXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWN0aXZlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRcIilcclxuICBoaWZnUmF0aW5nSXRlbXMudGltZVNjYWxlKDEpLnBsYXkoKVxyXG59KVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRcIilcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jbG9zZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzXCIpXHJcbiAgaGlmZ1JhdGluZ0l0ZW1zLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcclxufSlcclxuLy8gU3dpcGVyINCyIGhlcm9cclxuY29uc3QgaGVyb1N3aXBlciA9IG5ldyBTd2lwZXIoJy5oZXJvX19zd2lwZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBsYXp5OiB7XHJcbiAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicrJzxzdmcgY2xhc3M9XCJmcC1hcmMtbG9hZGVyXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPicrXHJcbiAgICAgICAgJzxjaXJjbGUgY2xhc3M9XCJwYXRoXCIgY3g9XCI0XCIgY3k9XCIxMlwiIHI9XCIxMFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtOTAgOCA4KVwiJytcclxuICAgICAgICAnc3Ryb2tlLXdpZHRoPVwiMi41cHhcIiBzdHJva2U9XCIjZmY4NjJmXCIgZmlsbD1cInRyYW5zcGFyZW50XCI+PC9jaXJjbGU+JytcclxuICAgICAgICAnPC9zdmc+PC9zcGFuPic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTtcclxuLy8gU3dpcGVyINCyIGhlcm9cclxuLy8gU3dpcGVyINCyIHNwZWNpYWwtb3JkZXJcclxuY29uc3Qgc3BlY2lhbE9yZGVyU3dpcGVyID0gbmV3IFN3aXBlcignLnNwZWNpYWwtb3JkZXJfX3N3aXBlcicsIHtcclxuICBzbGlkZXNQZXJHcm91cDogMyxcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMjEwOiB7XHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgfSxcclxuICAgIDczNzoge1xyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgIH0sXHJcbiAgICA5NzY6IHtcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICB9XHJcbiAgfSxcclxuICBsYXp5OiB7XHJcbiAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3BlY2lhbC1vcmRlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3BlY2lhbC1vcmRlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxufSk7XHJcbi8vIFN3aXBlciDQsiBzcGVjaWFsLW9yZGVyXHJcbi8vIFVzZWZ1bCBzd2lwZXJcclxuY29uc3QgdXNlZnVsU3dpcGVyID0gbmV3IFN3aXBlcignLnVzZWZ1bF9fc3dpcGVyJywge1xyXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gIGxhenk6IHtcclxuICAgIGxvYWRQcmV2TmV4dDogdHJ1ZSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy51c2VmdWwtYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnVzZWZ1bC1idXR0b24tcHJldicsXHJcbiAgfSxcclxufSk7XHJcbi8vIFVzZWZ1bCBzd2lwZXJcclxuLy8gVG9vbHRpcCDQsiBtYWluLWZvcm1cclxudGlwcHkoJy5tYWluLWZvcm1fX3Rvb2xwJywge1xyXG4gIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgYWxsb3dIVE1MOiB0cnVlLFxyXG4gIHJvbGU6ICd0b29sdGlwJyxcclxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cyBjbGljaycsXHJcbiAgaGlkZU9uQ2xpY2s6IHRydWUsXHJcbiAgdGhlbWU6IFwiY29sb3JUb29scFwiLFxyXG59KTtcclxuLy8gVG9vbHRpcCDQsiBtYWluLWZvcm1cclxuLy8gVmFsaWRhdGlvbiBmb3JtXHJcbm5ldyBKdXN0VmFsaWRhdGUoJy5tYWluLWZvcm1fX2Zvcm0nLCB7XHJcbiAgY29sb3JXcm9uZzogJyNEMTE2MTYnLFxyXG4gIHJ1bGVzOiB7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5MZW5ndGg6IDIsXHJcbiAgICAgIHN0cmVuZ3RoOiB7XHJcbiAgICAgICAgY3VzdG9tOiAnW9CwLdGP0JAt0K9cXGRdJyxcclxuICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRlbDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXNzYWdlczoge1xyXG4gICAgbmFtZToge1xyXG4gICAgICByZXF1aXJlZDogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXHJcbiAgICAgIG1pbkxlbmd0aDogJ9Cc0LjQvdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LHRg9C60LIgLSAyJyxcclxuICAgICAgc3RyZW5ndGg6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgICBlbWFpbDogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgdGVsOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9J1xyXG4gIH0sXHJcblxyXG4gIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0sIHZhbHVlcywgYWpheCkge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YLQv9GA0LDQstC70LXQvdC+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiLi9yZXNvdXJjZXMvbWFpbC5waHBcIiwgdHJ1ZSk7XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSlcclxuXHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59KTtcclxuLy8gVmFsaWRhdGlvbiBmb3JtXHJcblxyXG4iXX0=