// HTML program1
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset= "UFT-8">
    <title>Simple Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- <!HEADER --> 
     <header>
        <h1>My Simple Websiye</h1>
        <nav>
            <u1>
                <li><a href="#" onclick="showHome()">Home</a></li>
                <li><a href="#" onclick="showAbout()">About</a></li>
                <li><a href="#" onclick="showServices()">Services</a></li>
                <li><a href="#" onclick="showContact()">Contact</a></li>
            </u1>
        </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main>
        <section id="content">
            <h2>Welcome!</h2>
            <p>This is the Home section. Click the menu to explore.</p>
        </section>
    </main>
    <!-- FOOTER -->
    <footer>
        <p>@ 2025 My Simple Website</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
*/

// java script program2
/* function showHome() {
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
*/
// style.css
/* 
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.section-img {
    width: 100%;
    max-width: 400px;
    display: block;
    margin: 15px auto;
    border-radius: 8px;
}
header {
    background-color: black;
    color: white;
    padding: 15px;

}
header h1 {
    margin: 0;

}
nav u1 {
    list-style: none;
    padding: 0;
    margin-top: 10px;
    display: flex;
}
nav ul li a:hover {
    color: white;
    text-decoration: solid;
    font-weight: bold;
}
nav ul li a:hover {
    text-decoration: underline;
}
main{
    padding: 20px;
    min-height: 300px;
}
#content {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
}
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}
*/

