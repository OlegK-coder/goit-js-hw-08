import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

const storage = "feedback-form-state";

let formValue = {
    email: '',
    message: '',
};
form.addEventListener("submit", onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event){
    formValue[event.target.name] = event.target.value;
    localStorage.setItem(storage, JSON.stringify(formValue));
}

if (localStorage.hasOwnProperty(storage)) {
  formValue = JSON.parse(localStorage.getItem(storage));

  for (let i in formValue) {
    form[i].value = formValue[i];
  }
}

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
      } = event.currentTarget;
    
      if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
      }
      localStorage.removeItem(storage);
      form.reset();

      console.log(formValue);
}
