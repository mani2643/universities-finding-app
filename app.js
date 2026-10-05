let url = "http://universities.hipolabs.com/search?country=";
// let url = "https://api.api-ninjas.com/v1/university?country=";
let form = document.querySelector('form');
let themeSwitch = document.querySelector("#theme-switch");
let select = document.querySelector('select');

let darkmode = localStorage.getItem('darkmode');

let universities = [];

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
},{})

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    let country = document.querySelector("input");
    
    if(country.value.trim() === ""){
        alert("There is nothing to search!");
        return;
    }
    let colArr = await getColleges(country.value);
    show(colArr);

    country.value = "";
    universities = colArr;

    colArr.forEach((el)=>{
        select.innerHTML += `
            <option value=${el['state-province']}>${el['state-province']}</option>
        `;
    })
})

select.addEventListener('change',()=>{
    console.log(select.value);
})

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("error: ",e);
    }
}

function show(colArr){
    let list = document.querySelector("#list");

    list.innerHTML = "";

    colArr.forEach((el)=>{
        list.innerHTML += `
            <li>${el.name}</li>
        `;
    })
    const todoElements = document.querySelectorAll('li');
    todoElements.forEach(el => observer.observe(el));
}



function enableDarkmode(){
    document.body.classList.add('darktheme');
    localStorage.setItem('darkmode','active');
}
function disableDarkmode(){
    document.body.classList.remove('darktheme');
    localStorage.setItem('darkmode',null);
}

if(darkmode === 'active'){
    enableDarkmode();
}else{
    disableDarkmode();
}

themeSwitch.addEventListener('click',()=>{
    let darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
})