function changeLanguage(language) {
    document.documentElement.lang = language;
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    var styleTag = document.createElement('style');
    styleTag.innerHTML = `
       
body {
    background-color: #6e7781;
    padding-top: 56px;
}

.navbar-nav .nav-item {
    margin-right: 120px;
    /* font-family: 'Raleway';font-size: 16px; */
    font-family: 'Raleway', sans-serif;
    font-weight: inherit;
}

.carousel-inner {
    max-height: auto;
    /* O'zingiz kerakli o'lchamni tanlang */
    overflow: hidden;
}

.main-image-container img {
    width: 100%;
    height: auto;
}
#accordion {
 margin-top: 20px; /* Adjust the margin as needed */
}

.card {
 background-color: #f8f9fa; /* Set your desired background color */
 border: 1px solid #dee2e6;
 border-radius: 5px;
 margin-bottom: 10px;
}

.card-header {
 background-color: #343A40; /* Set your desired header background color */
 color: #fff; /* Set the text color for the header */
}

.card-body {
 background-color: #69747e; /* Set your desired content background color */
}

/* main.css */
#result {
    margin-top: 100px; /* Adjust as needed */
    padding: 20px;
    background-color: #6e7781;
    border-radius: 10px;
}

.person {
    margin-bottom: 20px; /* Spacing between individual person data */
}

.person p {
    margin: 5px 0;
}

.person img {
    max-width: 100%; /* Ensure images don't overflow their container */
    border-radius: 5px; /* Rounded corners for images */
}


.middle {
    width: 100%;
    height: 18px;
}
.anything{
    width: 100%;
    height: 20px;
}
.anything2{
    width: 100%;
    height: 28px;
}

.footer-icons {
 display: flex;
 justify-content: center;
 align-items: center;
}

.footer-icon {
 margin: 0 10px; /* Adjust the margin as needed */
 width: 40px; /* Set the desired width */
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #343a40; /* Set the background color */
 transition: background-color 0.3s ease; /* Add a transition effect */
}


@media (max-width: 1200px) {
    footer {
        text-align: center;
    }

    .footer-icons {
        display: flex;
        /* font-size: 14px; */
        color: #ffffff;
        margin: 0 10px;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon {
        font-size:20px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon:hover {
        color: #28a745;
        transform: scale(1.2);
    }

    p {
        margin-bottom: 5px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    p:hover {
        color: #28a745;
        transform: scale(1.2);
    }
}

@media (max-width: 767px) {
    footer {
        text-align: center;
    }

    .footer-icons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-icon {
        margin: 0 10px;
        font-size: 20px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .footer-icon:hover {
        color: #28a745;
        transform: scale(1.2);
    }

    p {
        margin-bottom: 5px;
        width: auto;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    p:hover {
        color: #28a745;
        transform: scale(1.2);
    }
}

@media (min-width: 992px) {
    #changeButton {
        display: none;
    }
}

footer {
    background-color: #343a40;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.footer-icon {
    font-size: 14px;
    color: #ffffff;
    margin: 0 10px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 20px;
    margin: 14px;
}

.footer-icon:hover {
    color: #28a745;
    transform: scale(1.2);
}

.main-image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.overlay-container {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.overlay:hover {
    opacity: 1;
}

@media (max-width: 767px) {
    .main-image-container {
        flex-direction: column;
    }

    .overlay-container {
        width: 100%;
    }
}
@media (max-width: 900px){
    .anything{
        width: 100%;
        height: 20px;
    }
    .anything2{
        width: 100%;
        height: 25px;
    }
}
@media (max-width: 290px){
    .anything{
        width: 100%;
        height: 15px;
    }
    .anything2{
        width: 100%;
        height:10px;
    }
}
@media (max-width: 380px){
    .anything{
        width: 100%;
        height: 15px;
    }
    .anything2{
        width: 100%;
        height:10px;
    }
}
    `;
    
    document.head.appendChild(styleTag);
});
// main.js faylida saqlang

    var data = [
        {
            ID: 1010,
            Isim: "Orzubek",
            Familya: "Kamariddinoov",
            Yosh: 18,
            "Soch rangi": "Qora",
            Boyi: 190,
            Rasm: "istockphoto-1410538853-170667a.webp" // Sizning shaxsiy rasmingizni nomi
        },
        {
            ID: 1020,
            Isim: "John",
            Familya: "Doe",
            Yosh: 30,
            "Soch rangi": "Qizil",
            Boyi: 180,
            Rasm: "https://example.com/john.jpg" // Sizning rasmingizning URL manzili
        },
        // Qolgan obyektlar...
        // 20 ta obyekt
    ];

    function searchByID() {
        var searchID = parseInt(document.getElementById("searchInput").value); // ID ni olish
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = ""; // Natijani qayta yozishdan oldin divni bo'shatish

        // Obyektlarni qidirish
        var found = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].ID === searchID) {
                found = true;
                var personHTML = "<div class='card'>";
                personHTML += "<div class='card-body'>";
                personHTML += "<h5 class='card-title'>" + data[i].Isim + " " + data[i].Familya + "</h5>";
                personHTML += "<p class='card-text'>Yosh: " + data[i].Yosh + "</p>";
                personHTML += "<p class='card-text'>Soch rangi: " + data[i]["Soch rangi"] + "</p>";
                personHTML += "<p class='card-text'>Boyi: " + data[i].Boyi + "</p>";
                personHTML += "<img src='" + data[i].Rasm + "' class='card-img-top' alt='" + data[i].Isim + "'>";
                personHTML += "</div>";
                personHTML += "</div>";
                resultDiv.innerHTML += personHTML;
                break;
            }
        }

        if (!found) {
            resultDiv.innerHTML = "<div class='alert alert-danger' role='alert'>Bunday ID topilmadi</div>";
        }
    }



    // Şu anki tarih ve saat
var simdikiZaman = new Date();

// Saat, dakika ve saniyeyi alma
var saat = simdikiZaman.getHours();
var dakika = simdikiZaman.getMinutes();
var saniye = simdikiZaman.getSeconds();

// Sonucu yazdırma
console.log('Şu anki saat: ' + saat + ':' + dakika + ':' + saniye);

async function fetchWorldTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone');
        const timezones = await response.json();
        
        for (const timezone of timezones) {
            const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
            const data = await response.json();
            
            const country = timezone.split('/')[0];
            const time = new Date(data.utc_datetime).toLocaleTimeString();
            
            console.log(`${country}: ${time}`);
        }
    } catch (error) {
        console.error('Hata:', error);
    }
}

fetchWorldTime();

// HTML özel karakterlerini escape etme
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// Kullanıcı girişi gibi potansiyel olarak tehlikeli verileri güvenli hale getirme
var userInput = "<script>alert('XSS attack!');</script>";
var safeInput = escapeHtml(userInput);
document.getElementById("output").innerHTML = safeInput;

// Sayfanın gömülü olup olmadığını kontrol etme
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

function kalkulayator(a, b, amal) {
    switch (amal) {
        case '+':
            return a + b;
        case '-':
            return a + b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0)
                return a / b;

            else {
                return "Nolga bolish mumkun emas";
            } default:
            return "Notog'ri amal";
    }

}
let son1 = parseFloat(prompt("Birinchi soni kiriting"));
let amal = prompt("Amal kiriting");
let son2 = parseFloat(prompt("Ikkinchi soni kiriting"));

let natija = kalkulayator(son1, son2, amal);
console.log("Natija", natija);
