"use strict";

const btnMarkAsAllRead = document.querySelector(".notification__toggle");
const msgNewCount = document.querySelector(".notification__count");
const msgUnreadMark = document.querySelectorAll(".notification__unread-mark");
const unreadMsgBoxes = document.querySelectorAll(".notification__unread-box");

btnMarkAsAllRead.addEventListener("click", function () {
  msgNewCount.textContent = "0";
  unreadMsgBoxes.forEach(function (ele) {
    ele.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  msgUnreadMark.forEach(function (ele) {
    ele.style.opacity = "0";
  });
});
