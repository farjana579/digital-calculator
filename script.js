
//    const clearButton = document.getElementById("clear-operator")
//     clearButton.addEventListener('click',function(){
//     clearScreen();
// });
// const displayButtons = document.querySelectorAll('#button');
// for (let i = 0; i < displayButtons.length; i++) {
//     const element = displayButtons[i];
//     element.addEventListener('click',function(event){
//     const currentValue = event.target.value;
//     display(currentValue);
//     })
    
// }
// const equalSign = document.getElementById("calculation");
// equalSign.addEventListener("click",function(){
//     calculate();
// })

//clear the display function
function clearScreen()
{
    document.getElementById("display-result").value="";
}

//display the value of button in display
function display(currentValue){
    document.getElementById("display-result").value += currentValue;
}
//calculate when = clicked
function calculate(){
    const displayResult = document.getElementById("display-result").value;
    const showResult = eval(displayResult);
    document.getElementById("display-result").value = showResult;
}
//get all the buttons at a time as an array
const displayButtons = document.querySelectorAll('button');
//add EventListener for each button 
for (let i = 0; i < displayButtons.length; i++) {
    const element = displayButtons[i];
    element.addEventListener('click',function(event){
        //here event is click
    const currentValue = event.target.value;
    if(currentValue == 'C')
    {
        clearScreen(); //cal clearScreen function
    }
    else if(currentValue == '='){
        calculate(); //call calculate function
    }
    else{
        display(currentValue); //call display button function
    }
    })
    
}