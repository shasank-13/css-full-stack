function showHome() {
    document.getElementById("content").innerHTML = `
        <h2>Home</h2>
        <img src="images/home.jpg" class="section-img" alt="Home Image">
        <p>Welcome to our website. This is the home section.</p>
    `;
}

function showAbout() {
    document.getElementById("content").innerHTML = `
        <h2>About Us</h2>
        <img src="images/about.jpg" class="section-img" alt="About Image">
        <p>We are a team learning web development using HTML, CSS, and JavaScript.</p>
    `;
}

function showServices() {
    document.getElementById("content").innerHTML = `
        <h2>Our Services</h2>
        <img src="images/services.jpg" class="section-img" alt="Services Image">
        <ul>
            <li>Web Design</li>
            <li>Frontend Development</li>
            <li>JavaScript Projects</li>
        </ul>
    `;
}

function showContact() {
    document.getElementById("content").innerHTML = `
        <h2>Contact Us</h2>
        <img src="images/contact.jpg" class="section-img" alt="Contact Image">
        <p>Email: example@email.com</p>
        <p>Phone: +91 9000000005</p>
    `;
}
