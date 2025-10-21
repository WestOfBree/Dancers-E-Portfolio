const scaleFactor = 1/20;
function moveBackground(event){
    const sparkles= document.querySelectorAll(".sparkle")
    let x = event.clientX * scaleFactor;
    let y = event.clientY * scaleFactor;
    

    for(let i =0; i< sparkles.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        sparkles[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
