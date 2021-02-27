function getHistory(){
    return document.getElementById("history-value").innerText;
}
// alert(getHistory());checking if function works
function printHistory(num){//updates history value
    document.getElementById("history-value").innerText = num;
}
// printHistory("49*57+90");
function getOutput(){
    return document.getElementById("output-value").innerText;
}
// alert(getOutput())
function printOutput(num){//updates output value
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNo(num);
    }
    
}
// printOutput("45003948984")
//to get comma separated values
function getFormattedNo(num){
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}

// printOutput("6789646"); //getFormattedNo inside printOutput converts empty string into 
//number 0, even though we want empty string i.e nothing at that place, so update printOutput

//getting this comma separated output value back as number(for operations)
function reverseNumberFormat(num){
    return Number(num.replace('\,\g',""));
}//replace is a string method and its syntax is as shown
// alert(reverseNumberFormat("6789646"))

//getting to keyboard elements
var operator = document.getElementsByClassName("operator");//returns an array of elements with class operator
for (let index = 0; index < operator.length; index++) {
    // alert(operator[index].innerText);execute this, if you want to know why addEventListener was neceassary
    operator[index].addEventListener("click", () => {
        
        // alert("clicked operator is: "+operator[index].innerText);
        // alert(this);
        // alert("clicked operator is: "+ this.id)//if arrow function is used this statment doesn't work, why?
        //ans -> in an arrow function, this referring to window object,while in function mehtod it refers to html button object,for more refer:
        //https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc
    });
}

var number = document.getElementsByClassName("number");
// alert(number);
for (let index = 0; index < number.length; index++) {
    number[index].addEventListener("click", function(){
        // alert("clicked number is: "+this.innerText);
        var output = reverseNumberFormat(getOutput());
        // alert(typeof(output));
        if(output != NaN){//if output is a number
            var temp = output.toString();
            temp = temp + this.id;
            output = parseInt(temp);
            printOutput(output.toString());
        }
        // alert(output);
    })
    
}
