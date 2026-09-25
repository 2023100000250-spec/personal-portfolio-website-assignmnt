const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "") {
        alert("Please enter your name.");
        return;
    }

                             
    if (email === "") {
        alert("Please enter your email.");
        return;
    }


    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }


     if (message === "") {
        alert("Please enter your message.");
        return;
    }


    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    });
