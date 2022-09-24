/*localStorage.clear();*/

const reportpublish =  document.getElementById("submit-repo");
let myname= [];
let myrollno = [];
let myphysics= [];
let mychemistry= [];
let mymaths= [];
let mytotal = [];
const inputname = document.getElementById("name");
const inputrollno = document.getElementById("rollno");
const inputmaths = document.getElementById("math");
const inputphysics = document.getElementById("phy");
const inputchemistry = document.getElementById("chem");

const insertdata = document.getElementById("insertdata");

let namefromlocalstorage = JSON.parse(localStorage.getItem("myname"));
let rollnofromlocalstorage = JSON.parse(localStorage.getItem("myrollno"));
let physicsfromlocalstorage = JSON.parse(localStorage.getItem("myphysics"));
let chemistryfromlocalstorage = JSON.parse(localStorage.getItem("mychemistry"));
let mathsfromlocalstorage = JSON.parse(localStorage.getItem("mymaths"));

function calculate(){
    for(let q = 0;q<=((myname.length)-1);q++)
    {
        mytotal = parseInt(mymaths[q]) + parseInt(myphysics[q]) + parseInt(mychemistry[q]);
        insertdata.innerHTML += "<tr>"+"<td>"+myname[q]+"</td>"+ "<td>"+myrollno[q]+"</td>"+"<td>"+mymaths[q]+"</td>"+"<td>"+myphysics[q]+"</td>"+"<td>"+mychemistry[q]+"</td>"+"<td>"+mytotal+"</td>"+"</tr>";
    }
}

if(namefromlocalstorage)
{
    myname = namefromlocalstorage;
    myrollno = rollnofromlocalstorage;
    mymaths = mathsfromlocalstorage;
    myphysics = physicsfromlocalstorage;
    mychemistry = chemistryfromlocalstorage;
    calculate();
}



reportpublish.addEventListener("click",function(){
    myname.push(inputname.value);
    myrollno.push(inputrollno.value);
    mymaths.push(inputmaths.value);
    myphysics.push(inputphysics.value);
    mychemistry.push(inputchemistry.value);
    /*name.push(inputtotal.value);*/

    localStorage.setItem("myname",JSON.stringify(myname));
    localStorage.setItem("myrollno",JSON.stringify(myrollno));
    localStorage.setItem("mymaths",JSON.stringify(mymaths));
    localStorage.setItem("myphysics",JSON.stringify(myphysics));
    localStorage.setItem("mychemistry",JSON.stringify(mychemistry));

    calculate();
})

/*reportpublish.addEventListener("keypress",function(event){
    if(event.key === "Enter")
    {
        myname.push(inputname.value);
    myrollno.push(inputrollno.value);
    mymaths.push(inputmaths.value);
    myphysics.push(inputphysics.value);
    mychemistry.push(inputchemistry.value);
    /*name.push(inputtotal.value);*/

 
