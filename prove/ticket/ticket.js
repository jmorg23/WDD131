

// Retrieve the form from the dom
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  if (value == "guest") {
    notesContainer.style.display = "block";
    document.querySelector("#acode").required = true;  
    // acode.required = true;
    console.log("val=", value);
  } else {
        document.querySelector("#acode").required = false;  

    notesContainer.style.display = "none";
    console.log("valllue=", value);

  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


function isDateValid(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen > today;
}


form.addEventListener("submit", event => {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();

  const numberOfCampuses = form.travelRange.value;

  const availableDate = form.availableDate.value;


  if (!isDateValid(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${availableDate}</p>
  <p>Ticket Type: ${numberOfCampuses}</p>

  
  `;

  form.reset();
  updateNotesField();
});
          