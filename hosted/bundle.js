"use strict";

var redirect = function redirect(response) {
  window.location.href = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      console.log(messageObj.error);
    }
  });
};

var smoothScrolling = function smoothScrolling() {
  var contactLink = document.getElementById("contactAnchor");
  var homeLink = document.getElementById("homeAnchor");

  var contactSection = document.getElementById("contact");
  var homeSection = document.getElementById("homeContent");

  contactLink.addEventListener('click', function () {
    $('html, body').animate({
      scrollTop: contactSection.offsetTop
    }, 600);
  });

  homeLink.addEventListener('click', function () {
    $('html, body').animate({
      scrollTop: homeSection.offsetTop
    }, 600);
  });
};

var init = function init() {
  var startSurveyButton = document.querySelector("#startSurveyButton");
  var writeToUsSubmit = document.querySelector("#writeToUsSubmit");

  startSurveyButton.addEventListener("click", function () {
    window.location.href = "/survey";
  });

  writeToUsSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    if (document.querySelector("#userEmail").value != '' && document.querySelector("#comments").value != '') {
      sendAjax('POST', $("#writeToUsForm").attr("action"), $("#writeToUsForm").serialize(), redirect);
    } else {
      alert("Please complete all fields before submitting");
    }

    return false;
  });

  smoothScrolling();
};

window.onload = init;
