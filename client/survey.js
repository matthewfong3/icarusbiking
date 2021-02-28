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

const handleSubmit = (e) => {
  e.preventDefault();
  
  let product = document.getElementById('product');
  let date = document.getElementById('date');
  let satisfaction = document.getElementsByClassName('satisfaction');
  let testedDays = document.getElementsByClassName('testedDays');
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  let email = document.getElementById('email');
  let orderNum = document.getElementById('orderNum');
  let address1 = document.getElementById('address1');
  let address2 = document.getElementById('address2');
  let city = document.getElementById('city');
  let sp = document.getElementById('sp');
  let postal = document.getElementById('postal');
  let prize = document.getElementById('prize');
  let feedback = document.getElementById('feedback');
  
  let satisBool = false;
  for(let i = 0; i < satisfaction.length; i++){
    satisBool = false;
    if(satisfaction[i].checked){
      satisBool = true;
      break;
    }
  }
  
  let testedBool = false;
  for(let i = 0; i < testedDays.length; i++){
    testedBool = false;
    if(testedDays[i].checked){
      testedBool = true;
      break;
    } 
  }
  
  if((product.value != 'Please Select') && (date.value != '') && satisBool && testedBool && (firstName.value != '') && (lastName.value != '') && (email.value != '') && (orderNum.value != '') && (address1.value != '') && (address2.value != '') && (city.value != '') && (sp.value != '') && (postal.value != '') && (prize.value != 'Please Select') && (feedback.value != '')){
    sendAjax('POST', $("#surveyForm").attr("action"), $("#surveyForm").serialize(), redirect);
  } else {
    alert("Please complete all fields before submitting");
  }
  
  return false;
};

const onFeedbackChange = (e) => {
  let feedbackSection = document.getElementById('feedbackSection');
  
  if(feedbackSection.hasChildNodes()) renderFeedbackSection();
};

const MakeFeedbackSection = (props) => {
  if(props.render == "0"){
    return(
      <div>
        <hr/>
        <div className="formSection">
          <label for="prize">9. Please tell us which free prize you would like to receive</label><br/>
          <select id="prize" name="prize">
            <option selected disabled value="Please Select">Please Select</option>
            <option value="$5 Amazon Gift Card">$5 Amazon Gift Card</option>
          </select>
          
          <h4>Please share your experience with us!</h4>
          <p id="desc">As a growing small business, we value your feedback and opinion. You will be able to copy your review below and share your product experience with us on Amazon. We appreciate your feedback. Thank you!</p>
          
          <label for="feedback">Review/Feedback (Minimum 100 Characters)</label><br/>
          <textarea id="feedback" name="feedback" cols="90" rows="10"></textarea><br/>
          <div className="buttonContainer">
            <button className="submitBtn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
  
  let link;
  if(props.product.value === "Big Seat Cover") link = "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=B08RY3WRQ3";
  else if(props.product.value === "Small Seat Cover") link = "https://www.amazon.com/review/create-review/?ie=UTF8&channel=glance-detail&asin=B08RY8MLS1";

  return(
    <div>
      <hr/>
      <div className="formSection">
        <label for="prize">9. Please tell us which free prize you would like to receive</label><br/>
        <select id="prize" name="prize">
          <option selected disabled value="Please Select">Please Select</option>
          <option value="$5 Amazon Gift Card">$5 Amazon Gift Card</option>
        </select>
      
        <h4>Please share your experience with us!</h4>
        <p id="desc">As a growing small business, we value your feedback and opinion. You will be able to copy your review below and share your product experience with us on Amazon. We appreciate your feedback. Thank you!</p>
        
        <label for="feedback">Review/Feedback (Minimum 100 Characters)</label><br/>
        <textarea id="feedback" name="feedback" cols="90" rows="10"></textarea>
        
        <p><a className="amazonLink" href={link}>Click here to post a review on Amazon</a></p>
        <div className="buttonContainer">
          <button className="submitBtn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

const renderFeedbackSection = () => {
  let veryUnsatisfied = document.getElementById('veryUnsatisfied');
  let unsatisfied = document.getElementById('unsatisfied');
  let neutral = document.getElementById('neutral');
  let satisfied = document.getElementById('satisfied');
  let verySatisfied = document.getElementById('verySatisfied');
  let product = document.getElementById('product');
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  let email = document.getElementById('email');
  let orderNum = document.getElementById('orderNum');
  let address1 = document.getElementById('address1');
  let address2 = document.getElementById('address2');
  let city = document.getElementById('city');
  let sp = document.getElementById('sp');
  let postal = document.getElementById('postal');
  
  if((firstName.value != '') && (lastName.value != '') && (email.value != '') && (orderNum.value != '') && (address1.value != '') && (address2.value != '') && (city.value != '') && (sp.value != '') && (postal.value != '')){
    if(veryUnsatisfied.checked || unsatisfied.checked){
      ReactDOM.render(
        <MakeFeedbackSection render="0"/>, document.querySelector("#feedbackSection")
      );
    }
    if((neutral.checked || satisfied.checked || verySatisfied.checked) && product.value != 'Please Select'){
      ReactDOM.render(
        <MakeFeedbackSection product={product}/>, document.querySelector("#feedbackSection")
      );
    }
  } else {
    alert("Please complete all fields before proceeding");
  }
};

const MakeInfoSection = () => {
  return(
    <div>
      <hr/>
      <div className="formSection">
        <div id="firstNameSpan">
          <label for="firstName">5. First Name</label><br/>
          <input type="text" id="firstName" name="firstName"/><br/>
        </div>
        <div id="lastNameSpan">
          <label for="lastName"> Last Name</label><br/>
          <input type="text" id="lastName" name="lastName"/><br/>
        </div>
        <br id="break"/>
        <br/>
        <label for="email">6. Email</label><br/>
        <input type="text" id="email" name="email" placeholder="example@example.com"/><br/>
        <br/>
        <label for="orderNum">7. Amazon Order Number (include dashes)</label><br/>
        <input type="text" id="orderNum" name="orderNum"/><br/>
        <br/>
        <label for="address">8. Address</label><br/>
        <input type="text" id="address1" name="address1" placeholder="Street Address"/><br/>
        <input type="text" id="address2" name="address2" placeholder="Street Address Line 2"/><br/>
        <div id="citySpan">
          <input type="text" id="city" name="city" placeholder="City"/><br/>
        </div>
        <div id="spSpan">
          <input type="text" id="sp" name="sp" placeholder="State/Province"/><br/>
        </div>
        
        <input type="text" id="postal" name="postal" placeholder="Postal/Zip Code"/><br/>
        <br/>
        <div className="buttonContainer">
          <button className="nextBtn" type="button" onClick={renderFeedbackSection}>Next</button>
        </div>
      </div>
    </div>
  );
};

const renderInfoSection = () => {
  let product = document.getElementById('product');
  let date = document.getElementById('date');
  let satisfaction = document.getElementsByClassName('satisfaction');
  let testedDays = document.getElementsByClassName('testedDays');
  
  let satisBool = false;
  for(let i = 0; i < satisfaction.length; i++){
    satisBool = false;
    if(satisfaction[i].checked){
      satisBool = true;
      break;
    }
  }
  
  let testedBool = false;
  for(let i = 0; i < testedDays.length; i++){
    testedBool = false;
    if(testedDays[i].checked){
      testedBool = true;
      break;
    } 
  }
  
  if((product.value != 'Please Select') && (date.value != '') && satisBool && testedBool){
    ReactDOM.render(
      <MakeInfoSection/>, document.querySelector("#infoSection")
    ); 
  } else {
    alert("Please complete all fields before proceeding");
  }
};

const MakeSurveyForm = () => {
  return(
    <form id="surveyForm"
      method="POST"
      action="/submitSurvey"
      class="surveyForm"
    >
      <section id="productSection">
        <div className="formSection">
          <label for="product">1. Which product did you purchase?</label><br/>
          <select id="product" name="product">
            <option selected disabled value="Please Select">Please Select</option>
            <option value="Small Seat Cover">Small Seat Cover</option>
            <option value="Big Seat Cover">Big Seat Cover</option>
          </select><br/>
          <br/>
          <label for="purchaseDate">2. Date of Purchase</label><br/>
          <input type="date" id="date" name="date"/><br/>
          <br/>
          <label for="satisfied">3. How satisfied are you with our product?</label><br/>
          <input type="radio" className="satisfaction" id="verySatisfied" name="satisfied" value="Very Satisfied" onClick={(e) => onFeedbackChange(e)}/><label for="verySatisfied">Very Satisfied</label><br/>
          <input type="radio" className="satisfaction" id="satisfied" name="satisfied" value="Satisfied" onClick={(e) => onFeedbackChange(e)}/><label for="satisfied">Satisfied</label><br/>
          <input type="radio" className="satisfaction" id="neutral" name="satisfied" value="Neutral" onClick={(e) => onFeedbackChange(e)}/><label for="neutral">Neutral</label><br/>
          <input type="radio" className="satisfaction" id="unsatisfied" name="satisfied" value="Unsatisfied" onClick={(e) => onFeedbackChange(e)}/><label for="unsatisfied">Unsatisfied</label><br/>
          <input type="radio" className="satisfaction" id="veryUnsatisfied" name="satisfied" value="Very Unsatisfied" onClick={(e) => onFeedbackChange(e)}/><label for="veryUnsatisfied">Very Unsatisfied</label><br/>
          <br/>
          <label for="tested7days">4. Have you used/tested our products for at least 7 days?</label><br/>
          <input type="radio" className="testedDays" id="Yes" name="tested7days" value="Yes"/><label for="Yes">Yes</label><br/>
          <input type="radio" className="testedDays" id="No" name="tested7days" value="No"/><label for="No">No</label><br/>
          <br/>
          <div className="buttonContainer">
            <button className="nextBtn" type="button" onClick={renderInfoSection}>Next</button>
          </div>
        </div>
      </section>
      
      <section id="infoSection"></section>
      <section id="feedbackSection"></section>
      
    </form>
  );
};

const init = () => {
  ReactDOM.render(
    <MakeSurveyForm />, document.querySelector("#content")
  );
};

window.onload = init;