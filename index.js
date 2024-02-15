let imageClass = document.querySelector(".detail-image");

const fetchUrl = "https://api.fbi.gov/wanted/v1/list";
function displayFugitives() {
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((wanteds) => {
      // what this ^ really looks like is const wanteds = response.json()
      for (let wanted of wanteds.items) {
        let fugitiveName = wanted.title;
        let fugitiveImage = wanted.images[0].thumb;
        if (!wanted.subjects.includes("ViCAP Missing Persons")) {
          console.log(fugitiveName);
          console.log(fugitiveImage);
          let imageContainer = document.querySelector("#real-fugitives");
          let imgElement = document.createElement("img");
          imgElement.src = fugitiveImage;
          imageContainer.append(imgElement);

          imgElement.addEventListener("click", () => {
            handleClick(wanted);
          });
        } else {
          console.log(fugitiveName);
          console.log(fugitiveImage);
          let imageContainerTwo = document.querySelector("#real-missing");
          let imgElement = document.createElement("img");
          imgElement.src = fugitiveImage;
          imageContainerTwo.append(imgElement);
          // fugitiveImage.splice()

          imgElement.addEventListener("click", () => {
            handleClickTwo(wanted);
          });
        }
      }
    });
}

function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let formData = new FormData(event.target);
  let jsonFormData = {};
  formData.forEach((value, key) => {
    jsonFormData[key] = value;
  });

  console.log(jsonFormData);
  let imageContainer = document.querySelector("#real-fugitives");

  let imgElementEtc = document.createElement("img");
  let newImage = jsonFormData["image"];
  let h3 = document.querySelector(".name");
  let h4 = document.querySelector(".crime");
  let h5 = document.querySelector(".reward");
  imgElementEtc.src = newImage;
  imageContainer.append(imgElementEtc);

  imgElementEtc.addEventListener("click", (event) => {
    event.preventDefault();
    imageClass.src = newImage;
    h3.textContent = "Name: " + jsonFormData["name"];
    h4.textContent = "Crime: " + jsonFormData["crime"];
    h5.textContent = "Reward: " + jsonFormData["reward"];
    let h6 = document.querySelector("#captured");
    let choice = document.getElementById("choices").value;
    h6.addEventListener("mouseover", (event) => {
      event.preventDefault();

      event.target.style.backgroundColor = "blue";
      event.target.style.color = "white";
      if (choice === "option1") {
        event.target.textContent = "On The Run!";
        event.target.style = "center";
      } else if (choice === "option2") {
        event.target.textContent = "Captured";
      }
    });
    h6.addEventListener("mouseout", (event) => {
      event.preventDefault();
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
      event.target.textContent = "Hover here to see if captured";
    });
  });
  event.target.reset();
}

displayFugitives();

// Add event listener to the form for form submission
let submitForm = document.querySelector("#new_fugitive");
submitForm.addEventListener("submit", handleFormSubmission);

// Function to handle click event on images
function handleClick(wanted) {
  let nameClass = document.querySelector(".name");

  let crimeClass = document.querySelector(".crime");
  let rewardClass = document.querySelector(".reward");

  //   let imageClass = document.querySelector(".detail-image");
  let linkClass = document.querySelector(".url");
  rewardClass.textContent = "Reward: " + wanted.reward_text;
  if (wanted.reward_text === null) {
    rewardClass.textContent =
      "No Reward at this time. Check back soon for updates";
  }
  linkClass.textContent = "Link to official FBI website: " + wanted.url;
  linkClass.addEventListener("click", function linkToFbi() {
    window.location.href = wanted.url;
  });

  crimeClass.textContent = "Crime(s): " + wanted.description;
  nameClass.textContent = "Name: " + wanted.title;
  imageClass.src = wanted.images[0].original;

  let h6 = document.querySelector("#captured");

  h6.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
    if (wanted.status === "captured") {
      event.target.textContent = "Captured!";
    } else {
      event.target.textContent = "On the run ";
    }
  });
  h6.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    event.target.textContent = "Hover here to see if captured";
  });
}
// write a function that removes the missing people from the list
function handleClickTwo(wanted) {
  let nameClassTwo = document.querySelector(".missing-name");
  let detailsClass = document.querySelector(".details");
  let rewardClass = document.querySelector(".missing-reward");
  let imageClass = document.querySelector(".missing-detail-image");
  let linkClass = document.querySelector(".missing-url");
  rewardClass.textContent = "Reward: " + wanted.reward_text;
  if (wanted.reward_text === null) {
    rewardClass.textContent =
      "No Reward at this time. Check back soon for updates";
  }
  linkClass.textContent = wanted.url;
  linkClass.addEventListener("click", function linkToFbi() {
    window.location.href = wanted.url;
  });

  detailsClass.textContent =
    "Last Seen or Additional Details: " + wanted.details;
  nameClassTwo.textContent = "Name: " + wanted.title;
  imageClass.src = wanted.images[0].original;
}
let submitMissingForm = document.querySelector("#new_missing_person");
submitMissingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newMissingImage = event.target["image"].value;
  let imageContainerThree = document.querySelector("#real-missing");
  let imgElementThree = document.createElement("img");
  let missingName = document.querySelector(".missing-name");
  let missingDetails = document.querySelector(".details");
  let missingReward = document.querySelector(".missing-reward");
  let imageClassTen = document.querySelector(".missing-detail-image");
  let nameFormData = event.target["name"].value;
  let lastSeenFormData = event.target["crime"].value;
  let rewardFormData = event.target["reward"].value;

  imgElementThree.src = newMissingImage;
  imageContainerThree.append(imgElementThree);
  imgElementThree.addEventListener("click", (event) => {
    event.preventDefault();
    missingName.textContent = "Name: " + nameFormData;
    missingDetails.textContent = "Last Seen: " + lastSeenFormData;
    missingReward.textContent = "Reward: " + rewardFormData;
    imageClassTen.src = newMissingImage;
  });
  submitMissingForm.reset();
});

//   const handleMissingForm = (event) => {
// event.preventDefault()
// let newMissingName = document.querySelector(".new_name_missing")
// let lastSeen = document.querySelector(".last-seen")
// let newMissingImage = event.target["image"].value
// let newMissingReward = document.querySelector(".new-reward-missing")
// let imageContainerThree = document.querySelector("#real-missing")
// let imgElementThree = document.createElement("img");

// newMissingName.textContent = event.target["name"].value;
// lastSeen.textContent = event.target["last-seen"].value;
// newMissingReward.textContent = event.target["new-reward-missing"].value;
// imgElementThree.src = newMissingImage;
// imageContainerThree.append(imgElementThree)

// let submitFormButton = document.querySelector("#submit-button");
// // listen for the submit event on the form
// submitFromButtom.addEventListener("submit", () => {
//   event.preventDefault(); //
//   alert("Faux Fugitive Added to Database ");
// });
