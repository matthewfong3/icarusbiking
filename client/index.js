const redirect = (response) => {
  window.location.href = response.redirect;
};

const sendAjax = (type, action, data, success) => {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    success: success,
    error: function(xhr, status, error){
      var messageObj = JSON.parse(xhr.responseText);
      console.log(messageObj.error);
    }
  });
};

const smoothScrolling = () => {
  let contactLink = document.getElementById("contactAnchor");
  let homeLink = document.getElementById("homeAnchor");
  
  let contactSection = document.getElementById("contact");
  let homeSection = document.getElementById("homeContent");
  
  contactLink.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: contactSection.offsetTop
      }, 600);
  });
  
  homeLink.addEventListener('click', () => {
    $('html, body').animate({
      scrollTop: homeSection.offsetTop
    }, 600);
  });
};

const init = () => {
  let startSurveyButton = document.querySelector("#startSurveyButton");
  let writeToUsSubmit = document.querySelector("#writeToUsSubmit");
  
  startSurveyButton.addEventListener("click", () => {
    window.location.href="/survey";
  });
  
  writeToUsSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    
    if(document.querySelector("#userEmail").value != '' && document.querySelector("#comments").value != ''){
      sendAjax('POST', $("#writeToUsForm").attr("action"), $("#writeToUsForm").serialize(), redirect); 
    } else {
      alert("Please complete all fields before submitting");
    }
    
    return false;
  });
  
  smoothScrolling();
};

window.onload = init;