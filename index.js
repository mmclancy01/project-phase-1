fetch("https://api.fbi.gov/wanted/v1/list")
.then((response) => response.json())
.then((wanteds) => {
    for (let wanted of wanteds.items) {
        console.log(wanted.title)
    }
})

