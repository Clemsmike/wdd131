
const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

// Additional temple objects
{
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/800%2C/0/default"
},
{
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/e44b3c89b3485fa2f2c8aa09791d4334dfe23511/full/%2C500/0/default"
},
{
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/08d5a9e90a0c8347a61d17335775c5e118b33a9a/full/800%2C/0/default"
}

];

// Select the temple container
const templeContainer = document.querySelector("#temple-container");

// Display temple cards
function displayTemples(templeList) {
templeContainer.innerHTML = "";

templeList.forEach((temple) => {
    const card = document.createElement("figure");

    card.classList.add("temple-card");

    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} square feet</p>
        <img src="${temple.imageUrl}"
             alt="${temple.templeName} temple"
             loading="lazy"
             width="400"
             height="250">
    `;

    templeContainer.appendChild(card);
});

}

// Filter: Home - display all temples
document.querySelector("#home").addEventListener("click", (event) => {
event.preventDefault();
displayTemples(temples);
});

// Filter: Old - temples dedicated before 1900
document.querySelector("#old").addEventListener("click", (event) => {
event.preventDefault();

const oldTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
});

displayTemples(oldTemples);

});

// Filter: New - temples dedicated after 2000
document.querySelector("#new").addEventListener("click", (event) => {
event.preventDefault();

const newTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
});

displayTemples(newTemples);

});

// Filter: Large - temples larger than 90,000 square feet
document.querySelector("#large").addEventListener("click", (event) => {
event.preventDefault();

const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
});

displayTemples(largeTemples);

});

// Filter: Small - temples smaller than 10,000 square feet
document.querySelector("#small").addEventListener("click", (event) => {
event.preventDefault();

const smallTemples = temples.filter((temple) => {
    return temple.area < 10000;
});

displayTemples(smallTemples);

});

// Display all temples when the page loads
displayTemples(temples);

// Set the current copyright year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Set the last modified date
document.querySelector("#lastModified").textContent = document.lastModified;