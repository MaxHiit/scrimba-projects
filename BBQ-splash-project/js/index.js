const emailCollectorForm = document.querySelector(".email-collector");

emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Do something with the event
  console.log("event stop");

  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let userEmailAddress = ourFormData.get("emailAddress");
  console.log(userFirstName);
  console.log(userEmailAddress);

  const updateHtmlContent = `
  <h2 class="main-content-title">Congratulation, ${userFirstName}</h2>

  <p class="main-content-subtitle">You're on your way to becoming a BBQ Master !</p>
  
  <p class="main-content-fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
     `;

  const ourMaincontent = document.querySelector(".main-content-section");
  ourMaincontent.innerHTML = updateHtmlContent;
});
