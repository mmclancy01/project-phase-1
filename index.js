const fetchUrl = ("https://api.fbi.gov/wanted/v1/list")

fetch(fetchUrl)
.then((response) => response.json())
.then((wanteds) => {
    for (let wanted of wanteds.items) {
        let fugitiveName = wanted.title
        let fugitiveImage = wanted.images[0].thumb
        console.log(fugitiveName)
        console.log(fugitiveImage)
        let imageContainer = document.querySelector("#real-fugitives")
        let imgElement = document.createElement('img')
        imgElement.src = fugitiveImage
        imageContainer.append(imgElement)
        // fugitiveImage.splice()
        imgElement.addEventListener('click', () => {
            handleClick(wanted)
        })

    }
})

function handleClick(wanted) {
   let nameClass = document.querySelector(".name")
//    let crimeClass = document.querySelector(".crime")
//    let rewardClass = document.querySelector(".reward")
   let imageClass = document.querySelector(".detail-image")
   nameClass.textContent= wanted.title
   imageClass.src = wanted.images[0].original
   
} 
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
