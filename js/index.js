// date and time
let date;
let hour;
let minute;
let second;
let partOfDay;
let timeFormat;
let timeZone;
partOfDay = "AM";
timeFormat = "12hours";

// variables
const colors = [
    {name:"red", css: "red"},
    {name:"green", css: "green"},
    {name:"blue", css: "blue"},
];
const fonts = [
    {name:"orbitron", css: "'Orbitron', sans-serif"},
    {name:"freckle face", css: "'Freckle Face', cursive"},
    {name:"zen dots", css: "'Zen Dots', cursive"},
];


// elements
const body = document.querySelector("body")
const pHour = document.querySelector("#p-hour");
const pMinute = document.querySelector("#p-minute");
const pSecond = document.querySelector("#p-second");
const pPartOfDay = document.querySelector("#container-clock > p:nth-of-type(4)");
const spanPartOfDay = document.querySelector("#container-clock > span:nth-of-type(3)");
const spanTimeZone = document.querySelector("#span-timezone");
const btn12Hours = document.querySelector("#btn-12hours");
const btn24Hours = document.querySelector("#btn-24hours");
const selectColor = document.querySelector("#select-color");
const selectStyle = document.querySelector("#select-style");
const containerClockP = document.querySelectorAll("#container-clock > p");


//event functions
btn12Hours.addEventListener('click', function(){
    timeFormat = "12hours";
    btn12Hours.classList.add("active");
    btn24Hours.classList.remove("active");
    pPartOfDay.classList.remove("display-none");
    spanPartOfDay.classList.remove("display-none");
    updateTime();
});

btn24Hours.addEventListener('click', function(){
    timeFormat = "24hours";
    btn12Hours.classList.remove("active");
    btn24Hours.classList.add("active");
    pPartOfDay.classList.add("display-none");
    spanPartOfDay.classList.add("display-none");
    updateTime();
});

const updateTime = function(){
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    if(hour >= 5 && hour <= 17){
        body.style.backgroundColor="#fff";
    }else{
        body.style.backgroundColor="#28282B";
    }

    if (timeFormat === "12hours"){
        if(hour > 12){
            hour -= 12;
            partOfDay = "PM";
        }
        if(hour === 0){
            hour = 12;
        }
    }
    
    pHour.textContent = hour.toString().padStart(2,"0");
    pMinute.textContent = minute.toString().padStart(2,"0");
    pSecond.textContent = second.toString().padStart(2,"0");
    pPartOfDay.textContent = partOfDay;
    spanTimeZone.textContent = date.toString();
}

selectColor.addEventListener('change', function(){
    for(let i = 0; i < containerClockP.length; i++){
        containerClockP[i].style.color = selectColor.value;
    }
});

selectStyle.addEventListener('change', function(){
    for(let i = 0; i < containerClockP.length; i++){
        containerClockP[i].style.fontFamily = selectStyle.value;
    }
});


// arrays
for(let i = 0; i < colors.length; i++){
    const option = document.createElement("option");
    option.textContent= colors[i].name;
    option.value= colors[i].css;
    selectColor.append(option);

}

for(let i = 0; i < fonts.length; i++){
    const option = document.createElement("option");
    option.textContent= fonts[i].name;
    option.value= fonts[i].css;
    selectStyle.append(option);
}

// onload/initial
for(let i = 0; i < containerClockP.length; i++){
    containerClockP[i].style.color = colors[0].css;
}

for(let i = 0; i < containerClockP.length; i++){
    containerClockP[i].style.fontFamily = fonts[0].css;
}

// spanTimeZone.textContent = date.toString();

updateTime();
setInterval(function(){updateTime();}, 1000);

