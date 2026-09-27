document.addEventListener("DOMContentLoaded", function () {



    const themeBtn = document.getElementById("themeBtn");
    const footerThemeBtn = document.getElementById("footerThemeBtn");

    function updateThemeButtons() {

        const isDark = document.body.classList.contains("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = isDark ? "☀️" : "🌙";
        }

        if (footerThemeBtn) {
            footerThemeBtn.textContent =
                isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        }
    }


    function toggleDarkMode() {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        updateThemeButtons();
    }


    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButtons();


    if (themeBtn) {
        themeBtn.addEventListener("click", toggleDarkMode);
    }

    if (footerThemeBtn) {
        footerThemeBtn.addEventListener("click", toggleDarkMode);
    }


    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (name === "" || email === "" || message === "") {

                alert("Please fill in all fields.");

                return;
            }


            if (!email.includes("@")) {

                alert("Please enter a valid email address.");

                return;
            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted successfully."
            );

            contactForm.reset();
        });
    }



    const topBtn = document.getElementById("topBtn");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";
        }

    });


    if (topBtn) {

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

});
