 // MOBILE MENU TOGGLE
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");

      menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        mobileMenu.classList.toggle("hidden");
      });

      // TUTUP MOBILE MENU SAAT LINK DIKLIK
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });

      // DROPDOWN TOGGLE & OUTSIDE CLICK
      const ddlBtn = document.getElementById("dropdown-button");
      const ddlMenu = document.getElementById("dropdown-menu");

      ddlBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = ddlBtn.getAttribute("aria-expanded") === "true";
        ddlBtn.setAttribute("aria-expanded", String(!isOpen));
        ddlMenu.classList.toggle("hidden");
      });

      // TUTUP DROPDOWN SAAT KLIK LUAR
      document.addEventListener("click", (e) => {
        if (!ddlBtn.contains(e.target) && !ddlMenu.contains(e.target)) {
          ddlMenu.classList.add("hidden");
          ddlBtn.setAttribute("aria-expanded", "false");
        }
      });

      // TUTUP DROPDOWN SAAT LINK DIKLIK
      document.querySelectorAll("#dropdown-menu a").forEach((item) => {
        item.addEventListener("click", () => {
          ddlMenu.classList.add("hidden");
          ddlBtn.setAttribute("aria-expanded", "false");
        });
      });