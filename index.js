// async function getMostWanted(){
//     const response = await fetch("https://api.fbi.gov/wanted/v1/list");
//     const mostWanted = await response.json();
//     console.log(mostWanted);
// }

// getMostWanted();


fetch("https://api.fbi.gov/wanted/v1/list")
.then((response) => response.json())
.then((wanteds) => {
    for (let wanted of wanteds.items) {
        console.log(wanted.title)
    }
})

