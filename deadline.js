/*localStorage.clear();*/
/*localStorage.removeitem(mydeadline);*/
/*localStorage.removeitem(mydescription);*/
/*localStorage.removeitem(myduedate);*/
/*localStorage.removeitem(mytimer);*/


const savebtn =  document.getElementById("publish");
let mydeadline= [];
let mydescription = [];
let myduedate = [];
let mytimer = [];
const inputdeadline = document.getElementById("inputdeadline");
const inputdescription = document.getElementById("inputdescription");
const inputdate = document.getElementById("inputdate");
const inputtime = document.getElementById("inputtime");


const deadlines = document.getElementById("parentdeadline");
let deadlinefromlocalstorage = JSON.parse(localStorage.getItem("mydeadline"));
let descriptionfromlocalstorage = JSON.parse(localStorage.getItem("mydescription"));
let duedatefromlocalstorage = JSON.parse(localStorage.getItem("myduedate"));
let timerfromlocalstorage = JSON.parse(localStorage.getItem("mytimer"));


function process()
{
    for(let s = ((mydeadline.length)-1) ; s>=0; s--)
    {
        let datecalc = new Date(JSON.stringify(myduedate[s],mytimer[s]));

        deadlines.innerHTML += "<div id='deadlines'>" + "<div id='header'>" +"<h2>" + mydeadline[s] + "</h2>" + "<p>" + mydescription[s] + "</p>" + "<p style='margin-top: 20px;color:#f7bc52;'>" +"DUE DATE: "+ myduedate[s] + "</p>"+ "</div>" + "<div id='timer'>" + "<p id='timer'>" + "Timer" + "</p>"  + "</div>"+"</div>";
        deadlines.innerHTML += "<br>"
    }

}

if(deadlinefromlocalstorage)
{
    mydeadline = deadlinefromlocalstorage;
    mydescription = descriptionfromlocalstorage;
    myduedate = duedatefromlocalstorage;
    mytimer = timerfromlocalstorage;
    process();
}

savebtn.addEventListener("click",function(){
    mydeadline.push(inputdeadline.value);
    mydescription.push(inputdescription.value);
    myduedate.push(inputdate.value);
    mytimer.push(inputtime.value);
    console.log(mydeadline);
    localStorage.setItem("mydeadline",JSON.stringify(mydeadline));
    localStorage.setItem("mydescription",JSON.stringify(mydescription));
    localStorage.setItem("myduedate",JSON.stringify(myduedate));
    localStorage.setItem("mytimer",JSON.stringify(mytimer));
    process();
})


savebtn.addEventListener("click",function(){

    var countDownDate = new Date(inputdate.value + inputtime.value + ":00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "; 

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
 }, 1000);


})


savebtn.addEventListener("keypress",function(event){
    if(event.key === "Enter")   
    {
        mydeadline.push(inputdeadline.value);
    mydescription.push(inputdescription.value);
    myduedate.push(inputdate.value);
    mytimer.push(inputtime.value);
    console.log(mydeadline);

    }
    console.log(mydeadline);
    localStorage.setItem("mydeadline",JSON.stringify(mydeadline));
    localStorage.setItem("mydescription",JSON.stringify(mydescription));
    localStorage.setItem("myduedate",JSON.stringify(myduedate));
    localStorage.setItem("mytimer",JSON.stringify(mytimer));
    process();
})




