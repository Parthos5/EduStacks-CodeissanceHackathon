/*localStorage.clear();*/

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

        deadlines.innerHTML += "<div id='deadlines'>" + "<div id='header'>" +"<h2>" + mydeadline[s] + "</h2>" + "<p>" + mydescription[s] + "</p>" + "<p style='margin-top: 20px;color:#f7bc52;'>" +"DUE DATE: "+ myduedate[s] + "</p>"+ "</div>" + "<div id='timer'>" + "<p>" + "Timer" + "</p>"  + "</div>"+"</div>";
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




