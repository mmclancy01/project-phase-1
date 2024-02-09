fetch("https://api.fbi.gov/wanted/v1/list")
.then((response) => response.json())
.then((wanteds) => {
    for (let wanted of wanteds.items) {
        let fugitiveName = wanted.title
        let fugitiveImage = wanted.images[0].thumb
        // console.log()
        console.log(fugitiveName)
        console.log(fugitiveImage)
        let imageContainer = document.querySelector("#real-fugitives")
        let imgElement = document.createElement('img')
        imgElement.src = fugitiveImage
        imageContainer.append(imgElement)
    }
})
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
