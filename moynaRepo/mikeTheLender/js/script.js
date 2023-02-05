//First I set all my environment variables 
//Use the DOM to store HTML elements inside the following Javascript variables
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const alertPlaceholderTwo = document.getElementById('liveAlertPlaceholderTwo');

let btnClearOne = document.getElementById('liveAlertBtn');

let btnClearTwo = document.getElementById('liveAlertBtnTwo');

let inputs = document.querySelectorAll('input');

let textarea = document.querySelectorAll('textarea');

let select = document.querySelectorAll('select');



//Creating the two alert message functions and storing it inside a variable
//These methods accept two parameters
// 1) The message contained in the alert box
// 2) The Bootstrap class I will use to style the alert box
const alert = (message, type) => {
      const wrapper = document.createElement('div')
          wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
          ].join('')
        
          alertPlaceholder.append(wrapper)
        }


const alertTwo = (message, type) => {
      const wrapperTwo = document.createElement('div')
       wrapperTwo.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholderTwo.append(wrapperTwo)
      }





//The sendMail function is triggered when the Send Now button is clicked in the Contact Me section of the webpage
//This method starts by using the DOM to store input values in the tempParams variable
//Next the input variables are put through a conditional statement
//If the email, name and message variables have string values with an acceptable length, an email is sent and a message sent alert will appear
//If the form has not been filled out properly, then an alert message will appear saying failed to sent, please fill out the entire form
      function sendMail(params) {
        var tempParams ={
            fromName:document.getElementById("fromName").value,
            email:document.getElementById("email").value,
            phoneNumber:document.getElementById("phoneNumberTwo").value,
            message:document.getElementById("message").value
        };
          if(tempParams.email.length>10 && tempParams.message.length>10 && tempParams.fromName.length>5 && tempParams.phoneNumber.length>6) {
            emailjs.send('service_iwpwz0n', 'template_4gi0emo', tempParams).then(function(res){
              console.log("successful", res.status);
                  })

              alert('Your Message Has Been Sent!', 'success');
              inputs.forEach(input => input.value = '');
              textarea.forEach(textarea => textarea.value = '');
          }

          else {
            alert('Please Fill Out The Entire Form Correctly', 'warning')
          }
      }



        

          function sendLoanRegistration(params) {
            var tempParamsTwo ={
                fullName:document.getElementById("fullName").value,
                phoneNumber:document.getElementById("phoneNumber").value,
                emailAddress:document.getElementById("emailAddress").value,
                loanPurpose:document.getElementById("loanPurpose").value,
                desiredLoanAmount:document.getElementById("desiredLoanAmount").value,
                creditScoreSelect:document.getElementById("creditScoreSelect").value,
                militaryStatus:document.getElementById("militaryStatus").value,
                employmentStatus:document.getElementById("employmentStatus").value,
                propertyOwned:document.getElementById("propertyOwned").value,
                coborrower:document.getElementById("coborrower").value,
                
            };
        
              if(tempParamsTwo.fullName.length>5 && tempParamsTwo.emailAddress.length>10 && tempParamsTwo.desiredLoanAmount.length>4 && tempParamsTwo.loanPurpose.length>1 && tempParamsTwo.militaryStatus.length>1 && tempParamsTwo.phoneNumber.length>6) {
                
                emailjs.send('service_iwpwz0n', 'template_zmzlpxn', tempParamsTwo).then(function(res){
                    
                    console.log("successful", res.status);
                    
                })

                alertTwo('Your Loan Application Has Been Sent!', 'success')
                select.forEach(select => select.value = '');
                inputs.forEach(input => input.value = '');
              }

              else {
                alertTwo('Please Fill In All The Required Fields Correctly', 'warning')
              }
        }


//The numbers only input function
function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if((x>=48 && x<=57)) {
    return true;
  }
  else {
    return false;
  }
}






