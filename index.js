const fetchUrl = "https://api.fbi.gov/wanted/v1/list";

function displayFugitives() {
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((wanteds) => {
      for (let wanted of wanteds.items) {
        let fugitiveName = wanted.title;
        let fugitiveImage = wanted.images[0].thumb;
        if (!wanted.subjects.includes("ViCAP Missing Persons")) {
          // console.log(fugitiveName);
          // console.log(fugitiveImage);
          let imageContainer = document.querySelector("#real-fugitives");
          let imgElement = document.createElement("img");
          imgElement.src = fugitiveImage;
          imageContainer.append(imgElement);
          // fugitiveImage.splice()
          imgElement.addEventListener("click", () => {
            handleClick(wanted);
          });
        } else {
          // console.log(fugitiveName);
          // console.log(fugitiveImage);
          let imageContainerTwo = document.querySelector("#real-missing");
          let imgElement = document.createElement("img");
          imgElement.src = fugitiveImage;
          imageContainerTwo.append(imgElement);
          // fugitiveImage.splice()

          //   imgElement.addEventListener('click', () => {
          //     handleClick(wanted)
          //     })
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

  // Can we POST here???
}

displayFugitives();

// Add event listener to the form for form submission
let submitForm = document.querySelector("#new_fugitive");
submitForm.addEventListener("submit", handleFormSubmission);

// Function to handle click event on images
function handleClick(wanted) {
  let nameClass = document.querySelector(".name");
  let imageClass = document.querySelector(".detail-image");
  nameClass.textContent = wanted.title;
  imageClass.src = wanted.images[0].original;
}

// function handleClick(wanted) {
//   let nameClass = document.querySelector(".name");
//   //    let crimeClass = document.querySelector(".crime")
//   //    let rewardClass = document.querySelector(".reward")
//   let imageClass = document.querySelector(".detail-image");
//   nameClass.textContent = wanted.title;
//   imageClass.src = wanted.images[0].original;
// }

// const addFugitiveListener = () => {
//   let fugitiveImgNav = document.querySelector("#real-fugitives");

//   const wantedDivBefore = document.querySelectorAll("#real-fugitives img");
//   const fugitiveFormName = document.querySelector("#new_fugitive #new-name");
//   const fugitiveFormCrime = document.querySelector("#new_fugitive #new-crime");
//   const fugitiveFormImg = document.querySelector("#new_fugitive #new-img");
//   const fugitiveFormReward = document.querySelector(
//     "#new_fugitive #new-reward"
//   );
//   const fugitiveFormComment = document.querySelector(
//     "#new_fugitive #new-comment"
//   );

//   const newFugitive = {
//     Name: fugitiveFormName.value,
//     Crime: fugitiveFormCrime.value,
//     Image: fugitiveFormImg.value,
//     Reward: fugitiveFormReward.value,
//     Comment: fugitiveFormComment.value,
//   };

//   console.log(newFugitive);
// };

// function addNewFugitive(person, fauxElement) {
//   let
// }

// select the form element
// let submitFormButton = document.querySelector("#submit-button");
// // listen for the submit event on the form
// submitFromButtom.addEventListener("submit", () => {
//   event.preventDefault(); //
//   alert("Faux Fugitive Added to Database ");
// });

// function fetchFugitive() {
//     return fetch("https://api.fbi.gov/wanted/v1/list")
// .then((response) => response.json())
// .then((wanteds) => {
//    return wanteds
//     })
// }
// const displayFugitive = () => {
//     fetchFugitive().then((items) => {
//         console.log(items)
//     }
//     )
// }

// write a function that removes the missing people from the list
