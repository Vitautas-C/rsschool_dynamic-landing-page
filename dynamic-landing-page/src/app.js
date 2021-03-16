import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');

const defaultCity = "London";
const temp = document.querySelector(".temp");

const feelsLike = document.querySelector(".feels-like");

const precipitation = document.querySelector(".precipitation");

// const humidity = document.querySelector(".humidity");
// const wind = document.querySelector(".wind");

// const sunset = document.querySelector(".sunset");
// const sunrise = document.querySelector(".sunrise");
// const dayLеngth = document.querySelector(".day-lеngth")

const usersСity = document.querySelector(".city");
const weatherWrapper = document.querySelector(".weather__wrapper");
const weatherIconn = document.querySelector(".weather__icon");

// function convertTime(time) {
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     convertedTime = `${hours} ч. ${minutes} мин.`;
//     return convertedTime;
// };


let showFeelsLike = false;

const showWeather = () => {

    let city = usersСity.textContent;
    if (city == false) {
        city = defaultCity;
    }
    console.log("city: ", city);
    const apiKey = "5b58aee62c41eb64fcab16edce2e5cc1";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        window.data = data;
        console.log(data);
        if (data.cod !== 200) {
            console.log("City not found");
            popup.classList.add("block");
            localStorage.setItem("usersСity", defaultCity);
        }

        let weatherIcon = data.weather[0].icon;
        weatherWrapper.style.backgroundImage = `url(../img/icons/${weatherIcon}.jpg`;


        precipitation.textContent = data.weather[0].description;

        temp.textContent = window.data.main.temp.toFixed(1) + " °C";

        // humidity.textContent = data.main.humidity;
        // wind.textContent = data.wind.speed;

        // let sunsetTime = new Date(data.sys.sunset * 1000);
        // sunset.textContent = convertTime(sunsetTime);

        // let sunriseTime = new Date(data.sys.sunrise * 1000);
        // sunrise.textContent = convertTime(sunriseTime);

        // let dayLеngthTime = new Date(sunsetTime - sunriseTime);
        // dayLеngth.textContent = convertTime(dayLеngthTime);
    });
}


function showFeelsLikeSwitch() {
    if (showFeelsLike) {
        temp.textContent = "Feels like: " + window.data.main.feels_like.toFixed(1) + " °C";
        showFeelsLike = false;
    } else {
        temp.textContent = window.data.main.temp.toFixed(1) + " °C";
        showFeelsLike = true;
    }
};


const time = document.querySelector(".time");
const date = document.querySelector(".date");


let showAmPm = false;

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    if (showAmPm) {
        hour = hour % 12 || 12;
    } else {
        hour = hour % 24 || 0;
    }

    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}
    ${showAmPm ? amPm : ""}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function showTimeSwitch() {
    if (showAmPm) {
        showAmPm = false;
    } else {
        showAmPm = true;
    }
};


function showDate() {
    let today = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    let currentDate = today.toLocaleDateString("en-GB", options);
    date.innerText = `${currentDate}`;
    console.log(currentDate)
}


function setGreet() {
    const greeting = document.querySelector(".greeting");
    let daytime;
    let today = new Date();
    let hour = today.getHours();

    switch (true) {
        case (hour < 4):
            greeting.textContent = "Good Night, ";
            daytime = "night";
            break;
        case (hour < 12):
            greeting.textContent = "Good Morning, ";
            daytime = "morning";
            break;
        case (hour < 17):
            greeting.textContent = "Good Afternoon, ";
            daytime = "day";
            break;
        case (hour < 24):
            greeting.textContent = "Good Evening, ";
            daytime = "evening";
            break;
        default:
            console.log(hour);
            break;

    };
    document.body.style.backgroundImage = `url(../img/background/${daytime}.jpg)`;
};


function getСityName() {
    if (localStorage.getItem("usersСity") == false) {
        usersСity.textContent = "[Enter Сity]";
    } else {
        usersСity.textContent = localStorage.getItem("usersСity");
    }
}

function setСityName(e) {
    if (e.which == 13 || e.keyCode == 13 || e.type == "blur") {
        if (usersСity.textContent == false) {
            usersСity.textContent = localStorage.getItem("usersСity").trim();
            localStorage.setItem("usersСity", e.target.textContent);
        } else {
            localStorage.setItem("usersСity", e.target.textContent);
            usersСity.blur();
        }
    }
    if (e.which == 13 || e.keyCode == 13 || e.type == "blur") {
        usersСity.blur();
        showWeather();

    }
}


const name = document.querySelector(".name");

function getName() {
    if (localStorage.getItem("name") == false) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

function setName(e) {
    if (e.which == 13 || e.keyCode == 13 || e.type == "blur") {
        if (name.textContent == false) {
            name.textContent = localStorage.getItem("name").trim();
            localStorage.setItem("name", e.target.textContent);
        } else {
            localStorage.setItem("name", e.target.textContent);
            name.blur();
        }
    }
}


const focus = document.querySelector(".focus");

function getFocus() {
    if (localStorage.getItem("focus") == false) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

function setFocus(e) {
    if (e.which == 13 || e.keyCode == 13 || e.type == "blur") {
        if (focus.textContent == false) {
            focus.textContent = localStorage.getItem("focus").trim();
            localStorage.setItem("focus", e.target.textContent);
        } else {
            localStorage.setItem("focus", e.target.textContent);
            focus.blur();
        }
    }
}


function userInput(e) {
    const thisElem = e.target;
    console.log(thisElem)
    if (thisElem.className === "city" || thisElem.className === "name" || thisElem.className === "focus") {
        thisElem.textContent = "";
    }
}

const popup = document.querySelector(".modal");
const applyPopupButton = popup.querySelector(".modal__button");
const closePopupButton = popup.querySelector(".modal__button-close");

const canceling = () => {
    popup.classList.remove("block");
    usersСity.textContent = defaultCity;
    showWeather();
};


document.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
        popup.classList.remove("block");
        usersСity.textContent = defaultCity;
        showWeather();
    }
})


usersСity.addEventListener("keypress", setСityName);
usersСity.addEventListener("blur", setСityName);
usersСity.addEventListener("click", userInput);

time.addEventListener("click", showTimeSwitch);
temp.addEventListener("click", showFeelsLikeSwitch);

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
name.addEventListener("click", userInput);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
focus.addEventListener("click", userInput);

closePopupButton.addEventListener("click", canceling);
applyPopupButton.addEventListener("click", canceling);

// Run
getСityName();
showWeather();
showTime();
showDate();
setGreet();
getName();
getFocus();