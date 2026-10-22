/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen =
        navLinks.classList.contains("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =====================================================
   JUMP-DOWN BUTTON
===================================================== */

const exploreButton =
    document.getElementById("exploreButton");


exploreButton.addEventListener("click", function () {

    const aboutSection =
        document.getElementById("about");

    aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("main section[id]");


const observerOptions = {

    root: null,

    rootMargin: "-25% 0px -60% 0px",

    threshold: 0

};


const sectionObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.getAttribute("id");

                navigationLinks.forEach(
                    function (link) {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute("href")
                            === "#" + id
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            });

        },

        observerOptions
    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});