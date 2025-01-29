let values = document.querySelectorAll(".value"); // Use querySelectorAll for multiple elements

values.forEach((singlevalue) => {
    let startValue = 0; // Fixed typo from startVlue to startValue
    let endValue = parseInt(singlevalue.getAttribute("data-value"));
    let duration = Math.floor(5.2 / endValue);

    let counter = setInterval(function () {
        startValue += 1; // Fixed typo from startVlue to startValue
        singlevalue.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});















// let values = document.querySelector(".value");

// values.forEach((singelevalue) => {
//     let startVlue = 0;
//     let endValue = parseInt(singelevalue.getAttribute("data-value"));
//     let  duration = Math.floor(5000 / endValue);


// let counter = setInterval(function (){
//     startVlue += 1;
//     singelevalue.textContent = startVlue;

//     if (startVlue == endValue){
//         clearInterval(counter)
//     };
// }, duration)
// });




