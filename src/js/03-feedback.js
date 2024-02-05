import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
let userForm = {};

form.addEventListener("input", throttle(setUserForm, 500));
function setUserForm(evt) {
  userForm.email = form.elements.email.value;
  userForm.message = form.elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(userForm));
};
const savedFeedback = JSON.parse(localStorage.getItem(localStorageKey));
if (savedFeedback) {
  form.elements.email.value = savedFeedback.email;
  form.elements.message.value = savedFeedback.message;
  userForm.email = form.elements.email.value;
  userForm.message = form.elements.message.value;
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (form.elements.email.value === "" || form.elements.message.value === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(userForm);
    form.reset();
    localStorage.removeItem(localStorageKey);
});

// const userForm = document.querySelector('.feedback-form');
// let userMessage = {};
// userForm.addEventListener("input", _.throttle(updateLocalStorage, 500));
// function updateLocalStorage(event) {
//     const form = event.target;
//     const userEmail = form.elements.email.value;
//     const messageText = form.elements.message.value;
//     userMessage.email = userEmail;
//     userMessage.message = messageText;
//     localStorage.setItem("feedback-form-state", JSON.stringify("userMessage"));
// }
// const userFormUpdate = localStorage.getItem("feedback-form-state");
// if (userFormUpdate) {
//     const parsedUserFormUpdate = JSON.parse(userFormUpdate);
//     userEmail = userMessage.email;
//     userText = userMessage.message;
// }
// userForm.addEventListener("submit", submitForm);
// function submitForm(event) {
//     const form = event.target;
//     const userEmail = form.elements.email.value;
//     const messageText = form.elements.message.value;
//     if (userEmail === "" || messageText === "") {
//         return alert("Please fill in all the fields!");
//     }
//     console.log(`Email: ${email.value}, Message: ${message.value}`);
//     form.reset();
//     localStorage.removeItem("feedback-form-state");
// }
