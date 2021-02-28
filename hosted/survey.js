'use strict';

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

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();

  var product = document.getElementById('product');
  var date = document.getElementById('date');
  var satisfaction = document.getElementsByClassName('satisfaction');
  var testedDays = document.getElementsByClassName('testedDays');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var orderNum = document.getElementById('orderNum');
  var address1 = document.getElementById('address1');
  var address2 = document.getElementById('address2');
  var city = document.getElementById('city');
  var sp = document.getElementById('sp');
  var postal = document.getElementById('postal');
  var prize = document.getElementById('prize');
  var feedback = document.getElementById('feedback');

  var satisBool = false;
  for (var i = 0; i < satisfaction.length; i++) {
    satisBool = false;
    if (satisfaction[i].checked) {
      satisBool = true;
      break;
    }
  }

  var testedBool = false;
  for (var _i = 0; _i < testedDays.length; _i++) {
    testedBool = false;
    if (testedDays[_i].checked) {
      testedBool = true;
      break;
    }
  }

  if (product.value != 'Please Select' && date.value != '' && satisBool && testedBool && firstName.value != '' && lastName.value != '' && email.value != '' && orderNum.value != '' && address1.value != '' && address2.value != '' && city.value != '' && sp.value != '' && postal.value != '' && prize.value != 'Please Select' && feedback.value != '') {
    sendAjax('POST', $("#surveyForm").attr("action"), $("#surveyForm").serialize(), redirect);
  } else {
    alert("Please complete all fields before submitting");
  }

  return false;
};

var onFeedbackChange = function onFeedbackChange(e) {
  var feedbackSection = document.getElementById('feedbackSection');

  if (feedbackSection.hasChildNodes()) renderFeedbackSection();
};

var MakeFeedbackSection = function MakeFeedbackSection(props) {
  if (props.render == "0") {
    return React.createElement(
      'div',
      null,
      React.createElement('hr', null),
      React.createElement(
        'div',
        { className: 'formSection' },
        React.createElement(
          'label',
          { 'for': 'prize' },
          '9. Please tell us which free prize you would like to receive'
        ),
        React.createElement('br', null),
        React.createElement(
          'select',
          { id: 'prize', name: 'prize' },
          React.createElement(
            'option',
            { selected: true, disabled: true, value: 'Please Select' },
            'Please Select'
          ),
          React.createElement(
            'option',
            { value: '$5 Amazon Gift Card' },
            '$5 Amazon Gift Card'
          )
        ),
        React.createElement(
          'h4',
          null,
          'Please share your experience with us!'
        ),
        React.createElement(
          'p',
          { id: 'desc' },
          'As a growing small business, we value your feedback and opinion. You will be able to copy your review below and share your product experience with us on Amazon. We appreciate your feedback. Thank you!'
        ),
        React.createElement(
          'label',
          { 'for': 'feedback' },
          'Review/Feedback (Minimum 100 Characters)'
        ),
        React.createElement('br', null),
        React.createElement('textarea', { id: 'feedback', name: 'feedback', cols: '90', rows: '10' }),
        React.createElement('br', null),
        React.createElement(
          'div',
          { className: 'buttonContainer' },
          React.createElement(
            'button',
            { className: 'submitBtn', onClick: handleSubmit },
            'Submit'
          )
        )
      )
    );
  }

  var link = void 0;
  if (props.product.value === "Big Seat Cover") link = "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=B08RY3WRQ3";else if (props.product.value === "Small Seat Cover") link = "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=B08RY8MLS1";

  return React.createElement(
    'div',
    null,
    React.createElement('hr', null),
    React.createElement(
      'div',
      { className: 'formSection' },
      React.createElement(
        'label',
        { 'for': 'prize' },
        '9. Please tell us which free prize you would like to receive'
      ),
      React.createElement('br', null),
      React.createElement(
        'select',
        { id: 'prize', name: 'prize' },
        React.createElement(
          'option',
          { selected: true, disabled: true, value: 'Please Select' },
          'Please Select'
        ),
        React.createElement(
          'option',
          { value: '$5 Amazon Gift Card' },
          '$5 Amazon Gift Card'
        )
      ),
      React.createElement(
        'h4',
        null,
        'Please share your experience with us!'
      ),
      React.createElement(
        'p',
        { id: 'desc' },
        'As a growing small business, we value your feedback and opinion. You will be able to copy your review below and share your product experience with us on Amazon. We appreciate your feedback. Thank you!'
      ),
      React.createElement(
        'label',
        { 'for': 'feedback' },
        'Review/Feedback (Minimum 100 Characters)'
      ),
      React.createElement('br', null),
      React.createElement('textarea', { id: 'feedback', name: 'feedback', cols: '90', rows: '10' }),
      React.createElement(
        'p',
        null,
        React.createElement(
          'a',
          { className: 'amazonLink', href: link },
          'Click here to post a review on Amazon'
        )
      ),
      React.createElement(
        'div',
        { className: 'buttonContainer' },
        React.createElement(
          'button',
          { className: 'submitBtn', onClick: handleSubmit },
          'Submit'
        )
      )
    )
  );
};

var renderFeedbackSection = function renderFeedbackSection() {
  var veryUnsatisfied = document.getElementById('veryUnsatisfied');
  var unsatisfied = document.getElementById('unsatisfied');
  var neutral = document.getElementById('neutral');
  var satisfied = document.getElementById('satisfied');
  var verySatisfied = document.getElementById('verySatisfied');
  var product = document.getElementById('product');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var orderNum = document.getElementById('orderNum');
  var address1 = document.getElementById('address1');
  var address2 = document.getElementById('address2');
  var city = document.getElementById('city');
  var sp = document.getElementById('sp');
  var postal = document.getElementById('postal');

  if (firstName.value != '' && lastName.value != '' && email.value != '' && orderNum.value != '' && address1.value != '' && address2.value != '' && city.value != '' && sp.value != '' && postal.value != '') {
    if (veryUnsatisfied.checked || unsatisfied.checked) {
      ReactDOM.render(React.createElement(MakeFeedbackSection, { render: '0' }), document.querySelector("#feedbackSection"));
    }
    if ((neutral.checked || satisfied.checked || verySatisfied.checked) && product.value != 'Please Select') {
      ReactDOM.render(React.createElement(MakeFeedbackSection, { product: product }), document.querySelector("#feedbackSection"));
    }
  } else {
    alert("Please complete all fields before proceeding");
  }
};

var MakeInfoSection = function MakeInfoSection() {
  return React.createElement(
    'div',
    null,
    React.createElement('hr', null),
    React.createElement(
      'div',
      { className: 'formSection' },
      React.createElement(
        'div',
        { id: 'firstNameSpan' },
        React.createElement(
          'label',
          { 'for': 'firstName' },
          '5. First Name'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', id: 'firstName', name: 'firstName' }),
        React.createElement('br', null)
      ),
      React.createElement(
        'div',
        { id: 'lastNameSpan' },
        React.createElement(
          'label',
          { 'for': 'lastName' },
          ' Last Name'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', id: 'lastName', name: 'lastName' }),
        React.createElement('br', null)
      ),
      React.createElement('br', { id: 'break' }),
      React.createElement('br', null),
      React.createElement(
        'label',
        { 'for': 'email' },
        '6. Email'
      ),
      React.createElement('br', null),
      React.createElement('input', { type: 'text', id: 'email', name: 'email', placeholder: 'example@example.com' }),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'label',
        { 'for': 'orderNum' },
        '7. Amazon Order Number (include dashes)'
      ),
      React.createElement('br', null),
      React.createElement('input', { type: 'text', id: 'orderNum', name: 'orderNum' }),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'label',
        { 'for': 'address' },
        '8. Address'
      ),
      React.createElement('br', null),
      React.createElement('input', { type: 'text', id: 'address1', name: 'address1', placeholder: 'Street Address' }),
      React.createElement('br', null),
      React.createElement('input', { type: 'text', id: 'address2', name: 'address2', placeholder: 'Street Address Line 2' }),
      React.createElement('br', null),
      React.createElement(
        'div',
        { id: 'citySpan' },
        React.createElement('input', { type: 'text', id: 'city', name: 'city', placeholder: 'City' }),
        React.createElement('br', null)
      ),
      React.createElement(
        'div',
        { id: 'spSpan' },
        React.createElement('input', { type: 'text', id: 'sp', name: 'sp', placeholder: 'State/Province' }),
        React.createElement('br', null)
      ),
      React.createElement('input', { type: 'text', id: 'postal', name: 'postal', placeholder: 'Postal/Zip Code' }),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        'div',
        { className: 'buttonContainer' },
        React.createElement(
          'button',
          { className: 'nextBtn', type: 'button', onClick: renderFeedbackSection },
          'Next'
        )
      )
    )
  );
};

var renderInfoSection = function renderInfoSection() {
  var product = document.getElementById('product');
  var date = document.getElementById('date');
  var satisfaction = document.getElementsByClassName('satisfaction');
  var testedDays = document.getElementsByClassName('testedDays');

  var satisBool = false;
  for (var i = 0; i < satisfaction.length; i++) {
    satisBool = false;
    if (satisfaction[i].checked) {
      satisBool = true;
      break;
    }
  }

  var testedBool = false;
  for (var _i2 = 0; _i2 < testedDays.length; _i2++) {
    testedBool = false;
    if (testedDays[_i2].checked) {
      testedBool = true;
      break;
    }
  }

  if (product.value != 'Please Select' && date.value != '' && satisBool && testedBool) {
    ReactDOM.render(React.createElement(MakeInfoSection, null), document.querySelector("#infoSection"));
  } else {
    alert("Please complete all fields before proceeding");
  }
};

var MakeSurveyForm = function MakeSurveyForm() {
  return React.createElement(
    'form',
    { id: 'surveyForm',
      method: 'POST',
      action: '/submitSurvey',
      'class': 'surveyForm'
    },
    React.createElement(
      'section',
      { id: 'productSection' },
      React.createElement(
        'div',
        { className: 'formSection' },
        React.createElement(
          'label',
          { 'for': 'product' },
          '1. Which product did you purchase?'
        ),
        React.createElement('br', null),
        React.createElement(
          'select',
          { id: 'product', name: 'product' },
          React.createElement(
            'option',
            { selected: true, disabled: true, value: 'Please Select' },
            'Please Select'
          ),
          React.createElement(
            'option',
            { value: 'Small Seat Cover' },
            'Small Seat Cover'
          ),
          React.createElement(
            'option',
            { value: 'Big Seat Cover' },
            'Big Seat Cover'
          )
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'label',
          { 'for': 'purchaseDate' },
          '2. Date of Purchase'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'date', id: 'date', name: 'date' }),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'label',
          { 'for': 'satisfied' },
          '3. How satisfied are you with our product?'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'satisfaction', id: 'verySatisfied', name: 'satisfied', value: 'Very Satisfied', onClick: function onClick(e) {
            return onFeedbackChange(e);
          } }),
        React.createElement(
          'label',
          { 'for': 'verySatisfied' },
          'Very Satisfied'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'satisfaction', id: 'satisfied', name: 'satisfied', value: 'Satisfied', onClick: function onClick(e) {
            return onFeedbackChange(e);
          } }),
        React.createElement(
          'label',
          { 'for': 'satisfied' },
          'Satisfied'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'satisfaction', id: 'neutral', name: 'satisfied', value: 'Neutral', onClick: function onClick(e) {
            return onFeedbackChange(e);
          } }),
        React.createElement(
          'label',
          { 'for': 'neutral' },
          'Neutral'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'satisfaction', id: 'unsatisfied', name: 'satisfied', value: 'Unsatisfied', onClick: function onClick(e) {
            return onFeedbackChange(e);
          } }),
        React.createElement(
          'label',
          { 'for': 'unsatisfied' },
          'Unsatisfied'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'satisfaction', id: 'veryUnsatisfied', name: 'satisfied', value: 'Very Unsatisfied', onClick: function onClick(e) {
            return onFeedbackChange(e);
          } }),
        React.createElement(
          'label',
          { 'for': 'veryUnsatisfied' },
          'Very Unsatisfied'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'label',
          { 'for': 'tested7days' },
          '4. Have you used/tested our products for at least 7 days?'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'testedDays', id: 'Yes', name: 'tested7days', value: 'Yes' }),
        React.createElement(
          'label',
          { 'for': 'Yes' },
          'Yes'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'radio', className: 'testedDays', id: 'No', name: 'tested7days', value: 'No' }),
        React.createElement(
          'label',
          { 'for': 'No' },
          'No'
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'div',
          { className: 'buttonContainer' },
          React.createElement(
            'button',
            { className: 'nextBtn', type: 'button', onClick: renderInfoSection },
            'Next'
          )
        )
      )
    ),
    React.createElement('section', { id: 'infoSection' }),
    React.createElement('section', { id: 'feedbackSection' })
  );
};

var init = function init() {
  ReactDOM.render(React.createElement(MakeSurveyForm, null), document.querySelector("#content"));
};

window.onload = init;
