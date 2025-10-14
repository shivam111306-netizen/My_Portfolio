console.log("Hello World");

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/*---------------------Hamburger-------------------------*/


var sideMenu = document.getElementById("side-menu");

function openmenu() {
    sideMenu.style.right = "10px";
}

function closemenu() {
    sideMenu.style.right = "-270px";
}



/*------------------------------Certificate------------------------------*/

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const imgSrc = button.getAttribute('data-img');
        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('popup').style.display = 'none';
    }
});

/*-------------------------------Google From---------------------------*/


const scriptURL = 'https://script.google.com/macros/s/AKfycbyAjaog8TKRP5JGRDQGpnK-ZcfD5ksGgOFfFKcQVjaYDHv_CLovq1SaAq-3alDKKxVB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thanks For Your Response!!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


