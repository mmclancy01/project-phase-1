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
  let imageContainer = document.querySelector("#real-fugitives");
  let imgElement = document.createElement("img");
  let newImage = event.target["image"].value;
  let h2 = document.querySelector(".name");
  let h3 = document.querySelector(".crime");
  let h4 = document.querySelector(".reward");
  imgElement.src = newImage;
  imageContainer.append(imgElement);
  imgElement.addEventListener("click", () => {
    h2.textContent = event.target["name"].value;
    h3.textContent = event.target["crime"].value;
    h4.textContent = event.target["reward"].value;
    // rating.textContent = newRating;
    // comment.textContent = newComment;
  });
  // need to style images so they output in a thumbnail size to match others (need px max width/height)
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

// let submitFormButton = document.querySelector("#submit-button");
// // listen for the submit event on the form
// submitFromButtom.addEventListener("submit", () => {
//   event.preventDefault(); //
//   alert("Faux Fugitive Added to Database ");
// });
