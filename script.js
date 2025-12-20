function showHome() {
    document.getElementById("content").innerHTML = `
        <h2>Home</h2>
        <img src="project image.jpg" class="section-img">
        <p>Welcome to our website. This is the home section.</p>
    `;
}

function showAbout() {
    document.getElementById("content").innerHTML = `
        <h2>About Us</h2>
        <img src="projectH.jpg" class="section-img">
        <p>We are a team learning web development using HTML, CSS, and JavaScript.</p>
    `;
}

function showServices() {
    document.getElementById("content").innerHTML = `
        <h2>Our Services</h2>
        <img src="projectH1.jpg" class="section-img">
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
        <img src="projectH1.jpg" class="section-img">
        <p>Email: example@email.com</p>
        <p>Phone: +91 9*********5</p>
    `;
}
