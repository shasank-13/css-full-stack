/* LOGIN */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Honey" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

/* CHECK LOGIN */
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    } else {
        loadPage("home");
    }
}
/* LOGOUT */
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

/* DYNAMIC CONTENT */
let content = document.getElementById("content");


function loadPage(page) {
    removeActive();
    if (!content) content = document.getElementById("content");
    var el = document.getElementById(page);
    if (el) el.classList.add("active");

    if (page === "home") {
        changeBackground("home-bg");
        content.innerHTML = `
             <h2>Home</h2>
             <img src="project image.jpg" class="section-img">
             <p>Welcome to the website.</p>
        `;
    }

    if (page === "about") {
        changeBackground("about-bg");
        content.innerHTML = `
             <h2>About</h2>
             <img src="projectH.jpg" class="section-img">
             <p>Frontend project using HTML, CSS, and JavaScript.</p>
        `;
    }

    if (page === "services") {
        changeBackground("services-bg");
        content.innerHTML = `
             <h2>Services</h2>
             <img src="project image.jpg" class="section-img">
             <p></p>
        `;
    }

    if (page === "Contact") {
        changeBackground("contact-bg");
        content.innerHTML = `
             <h2>Contact</h2>
             <img src="project image.jpg" class="contact-img">
             <p></p>
        `;
    }
    if (page === "contact") {
        changeBackground("contact-bg");
        content.innerHTML = `
             <h2>Contact</h2>
             <img src="project image.jpg" class="section-img">
             <input type="text" placeholder="Your Name"><br><br>
                <input type="email" placeholder="Your Email"><br><br>
                <button>Submit</button>
        `;
    }
}
function removeActive() {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
}

function changeBackground(className) {
    document.body.className = className;
}

// compatibility wrappers for existing HTML (lowercase names)
function loadpage(page) {
    loadPage(page);
}