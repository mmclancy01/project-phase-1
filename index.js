let imageClass = document.querySelector(".detail-image")

const fetchUrl = "https://api.fbi.gov/wanted/v1/list";
function displayFugitives() {
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((wanteds) => {
      for (let wanted of wanteds.items) {
        let fugitiveName = wanted.title;
        let fugitiveImage = wanted.images[0].thumb;
        if (!wanted.subjects.includes("ViCAP Missing Persons")) {

        
            console.log(fugitiveName)
            console.log(fugitiveImage)
            let imageContainer = document.querySelector("#real-fugitives")
            let imgElement = document.createElement('img')
            imgElement.src = fugitiveImage
            imageContainer.append(imgElement)
        
            imgElement.addEventListener('click', () => {
            handleClick(wanted)
            
            })
        } else {
            console.log(fugitiveName)
            console.log(fugitiveImage)
            let imageContainerTwo = document.querySelector("#real-missing")
            let imgElement = document.createElement('img')
            imgElement.src = fugitiveImage
            imageContainerTwo.append(imgElement)
        // fugitiveImage.splice()
            
          imgElement.addEventListener('click', () => {
            handleClickTwo(wanted)  
            })
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
  let newImage = jsonFormData["image"]
  let h2 = document.querySelector(".name");
  let h3 = document.querySelector(".crime");
  let h4 = document.querySelector(".reward");
  imgElementEtc.src = newImage;
  imageContainer.append(imgElementEtc);
  let h6 = document.getElementById("captured")
  h6.addEventListener("mouseover", event => {
    event.preventDefault();
    let selectElement = jsonFormData["choices"]
      event.target.style.backgroundColor = "blue"
      event.target.style.color = "white"
      if (selectElement.value === "option1"){
        event.target.textContent = "On The Run!"
      }
      else if (selectElement.value !== "option1") {
        event.target.textContent = "Captured"
      }
   })
   h6.addEventListener("mouseout", event => {
    event.preventDefault();
    event.target.style.backgroundColor = "red";
    event.target.style.color = "black";
    event.target.textContent = "Hover here to see if captured";
   })
  imgElementEtc.addEventListener('click', (event) => {
    event.preventDefault(); 
    imageClass.src = newImage
    h2.textContent = "Name: " +jsonFormData["name"]
    h3.textContent = "Crime: " +jsonFormData["crime"]
    h4.textContent = "Reward: " + jsonFormData["reward"]
//     let h6 = document.getElementById("captured")
//   h6.addEventListener("mouseover", event => {
//     event.preventDefault();
//     let selectElement = document.querySelector("#choices")
//       event.target.style.backgroundColor = "blue"
//       event.target.style.color = "white"
//       if (selectElement.value === "option1"){
//         event.target.textContent = "On The Run!"
//       }
//       else {
//         event.target.textContent = "Captured"
//       }
//    })
//    h6.addEventListener("mouseout", event => {
//     event.preventDefault();
//     event.target.style.backgroundColor = "red";
//     event.target.style.color = "black";
//     event.target.textContent = "Hover here to see if captured";

   })
};

    // console.log(event)
    // let imageClassTwo = document.querySelector(".detail-image");
    // // let divA = document.querySelector("#fugitive-details")
    // let imgElementTwo = document.createElement("img");
    // let newImageTwo = event.target[1].value;
    // let h2 = document.querySelector(".name");
    // let h3 = document.querySelector(".crime");
    // let h4 = document.querySelector(".reward");
    // imgElementTwo.src = newImageTwo;
    // imageClassTwo.append(imgElementTwo)
    // h2.textContent = event.target["name"].value;
    // h3.textContent = event.target["crime"].value;
    // h4.textContent = event.target["reward"].value;
    
  
// let form = document.querySelector("#new_fugitive")
// form.addEventListener('submit', handleFormSubmission(event))
    // event.preventDefault();
    // let imageClassTwo = document.querySelector(".detail-image")
    // let imgElementTwo = document.createElement("img")
    // let newImage = event.target["image"].value;
    // imgElementTwo.src = newImage
    // imageClassTwo.append(imgElementTwo)
    // h2.textContent = event.target["name"].value;
    // h3.textContent = event.target["crime"].value;
    // h4.textContent = event.target["reward"].value;

    // rating.textContent = newRating;
    // comment.textContent = newComment;
  
  // need to style images so they output in a thumbnail size to match others (need px max width/height)
  // Can we POST here???

// function newImageClick(event) {
//     event.preventDefault();
//     let imageClassTwo = document.querySelector(".detail-image");
//     let imgElementTwo = document.createElement("img");
//     let newImageTwo = event.target["image"].value;
//     let h2 = document.querySelector(".name");
//     let h3 = document.querySelector(".crime");
//     let h4 = document.querySelector(".reward");
//     imgElementTwo.src = newImageTwo
//     imageClassTwo.append(imgElementTwo)
//     h2.textContent = event.target["name"].value;
//     h3.textContent = event.target["crime"].value;
//     h4.textContent = event.target["reward"].value;

// }

displayFugitives();

// Add event listener to the form for form submission
let submitForm = document.querySelector("#new_fugitive");
submitForm.addEventListener("submit", handleFormSubmission);

// Function to handle click event on images
function handleClick(wanted) {
  let nameClass = document.querySelector(".name");

  let crimeClass = document.querySelector(".crime")
  let rewardClass = document.querySelector(".reward")

//   let imageClass = document.querySelector(".detail-image");
  let linkClass = document.querySelector(".url")
  rewardClass.textContent = "Reward: " + wanted.reward_text;
  if (wanted.reward_text === null ){
    rewardClass.textContent = "No Reward at this time. Check back soon for updates"
  }
  linkClass.textContent = "Link to official FBI website: " + wanted.url
  linkClass.addEventListener('click', function linkToFbi() {
    window.location.href = wanted.url
  })
 
  crimeClass.textContent = "Crime(s): " + wanted.description
  nameClass.textContent = "Name: " + wanted.title;
  imageClass.src = wanted.images[0].original;
  let h6 = document.getElementById("captured")
  h6.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "blue"
      event.target.style.color = "white"
      if (wanted.status === "captured"){
        event.target.textContent = "Captured!"
      }
      else {
        event.target.textContent = "On the run "
      }
   })
   h6.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "black";
    event.target.textContent = "Hover here to see if captured";

   })
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


// write a function that removes the missing people from the list
function handleClickTwo(wanted) {
    let nameClassTwo = document.querySelector(".missing-name");
    let detailsClass = document.querySelector(".details")
    let rewardClass = document.querySelector(".missing-reward")
    let imageClass = document.querySelector(".missing-detail-image");
    let linkClass = document.querySelector(".missing-url")
    rewardClass.textContent = wanted.reward_text;
    if (wanted.reward_text === null ){
      rewardClass.textContent = "No Reward at this time. Check back soon for updates"
    }
    linkClass.textContent = wanted.url
    linkClass.addEventListener('click', function linkToFbi() {
      window.location.href = wanted.url
    })
    
    detailsClass.textContent = wanted.details
    nameClassTwo.textContent = wanted.title;
    imageClass.src = wanted.images[0].original;
  }
  let submitMissingForm = document.querySelector("#new-missing-person")
  submitMissingForm.addEventListener('submit', () => {
    handleMissingForm()})

//   const handleMissingForm = (event) => {
//     event.preventDefault()
//     // let newMissingName = document.querySelector(".new-name-missing")
//     // let lastSeen = document.querySelector(".last-seen")
//     // // let newMissingImage = document.querySelector(".new-image-missing")
//     // let newMissingReward = document.querySelector(".new-reward-missing")
//     let imageContainerTwo = document.querySelector(".real-missing")
//     let imgElement = document.createElement("img");

//     // newMissingName.textContent = event.target["name"].value;
//     // lastSeen.textContent = event.target["last-seen"].value;
//     // newMissingReward.textContent = event.target["new-reward-missing"].value;
//     imgElement.src = event.target["new-image-missing"].value;
//     imageContainerTwo.append(imgElement)


//   }
// let submitFormButton = document.querySelector("#submit-button");
// // listen for the submit event on the form
// submitFromButtom.addEventListener("submit", () => {
//   event.preventDefault(); //
//   alert("Faux Fugitive Added to Database ");
// });

