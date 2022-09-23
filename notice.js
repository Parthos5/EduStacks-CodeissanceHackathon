/*localStorage.clear();*/

const publishbtn =  document.getElementById("submit");
let mysub= [];
let mycontent = [];
const subject = document.getElementById("inputsubject");
const content = document.getElementById("inputcontent");
const notices = document.getElementById("notices");
let subfromlocalstorage = JSON.parse(localStorage.getItem("mysub"));
let contentfromlocalstorage = JSON.parse(localStorage.getItem("mycontent"));

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();


function render()
{
    for(let i = ((mysub.length)-1) ; i>=0; i--)
    {
    notices.innerHTML += "<div id='update'>" +"<h3>" + mysub[i] + "</h3>" + "<p>" + mycontent[i] + "</p>" +"<br>"+ "<h5>"+"Added on " + cDay + "/" + cMonth + "/" + cYear +"</h>"+"</div>" ;
    }

}

if(subfromlocalstorage)
{
    mysub = subfromlocalstorage;
    mycontent = contentfromlocalstorage;
    render();
}


publishbtn.addEventListener("click",function(){
    mysub.push(inputsubject.value);
    mycontent.push(inputcontent.value);
    localStorage.setItem("mysub",JSON.stringify(mysub));
    localStorage.setItem("mycontent",JSON.stringify(mycontent));
    console.log(mycontent);
    console.log(mysub);
    render();
})

publishbtn.addEventListener("keypress",function(event){
    if(event.key == "Enter")
    {
    mysub.push(inputsubject.value);
    mycontent.push(inputcontent.value);
    localStorage.setItem("mysub",JSON.stringify(mysub));
    localStorage.setItem("mycontent",JSON.stringify(mycontent));
    console.log(mycontent);
    console.log(mysub);
    render();
    }
})


JSON.parse(mysub);
JSON.parse(mycontent);