// mobile nav toggle
        const navToggle = document.getElementById("navToggle");
        const mainNav = document.getElementById("main-nav");
        navToggle.addEventListener("click", () => {
            const open = mainNav.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", open);
        });

        // typed effect
        if (typeof Typed !== "undefined") {
            new Typed("#element", {
                strings: ["Web developer", "Web designer", "Frontend Engineer"],
                typeSpeed: 60,
                backSpeed: 40,
                loop: true,
            });
        }

        // Optional: close mobile nav when link clicked (improves UX)
        mainNav.addEventListener("click", (e) => {
            if (e.target.tagName === "A" && window.innerWidth <= 640) {
                mainNav.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });