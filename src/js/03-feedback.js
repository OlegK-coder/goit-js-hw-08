import _ from 'lodash';
import '../../node_modules/lodash.throttle';
const form = document.querySelector(".feedback-form");
const email = document.querySelector("[name='email']");
const message = document.querySelector("[name='message']");
const formObj = {
  email: email.value,
  message: message.value,
};
if (localStorage.getItem("feedback-form-state")) {
  const jsonFormObj = JSON.parse(localStorage.getItem("feedback-form-state"));
  email.value = formObj.email = jsonFormObj.email;
  message.value = formObj.message = jsonFormObj.message;
  console.log(jsonFormObj.email, jsonFormObj.message )
  console.log(formObj);
}
form.addEventListener("input", _.throttle(() => {
  formObj.email = email.value;  
  formObj.message = message.value;
  // console.log(formObj.email, formObj.message);
  localStorage.setItem("feedback-form-state", JSON.stringify(formObj));
}),500);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formObj.email==email.value && formObj.message==message.value) {
    console.log(formObj);
  } 
  form.reset();
  localStorage.removeItem("feedback-form-state"); 
 })
