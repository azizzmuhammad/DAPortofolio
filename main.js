// FORM SUBMIT HANDLER
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusText = document.getElementById("status");
  
    if (!form) return;
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // 💥 WAJIB
  
      statusText.textContent = "Sending...";
      statusText.style.color = "#2563eb";
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxSSdDxMejGVPCMGOyDFMpT3OH9tA6gBITX805oj2JdCwkW4t6mxPJe6WNJCyGFDu16/exec",
          {
            method: "POST",
            body: formData
          }
        );
  
        const result = await response.text();
  
        if (result.trim() === "success") {
          window.location.href = "https://azizzmuhammad.github.io/DAPortofolio/success.html";
        } else {
          throw new Error("Result is not success");
        }
      } catch (err) {
        statusText.textContent = "Failed to send message.";
        statusText.style.color = "red";
        console.error("Form submission error:", err);
      }
    });
  });
  
  {/* document.querySelector(".contact-form").addEventListener("submit", function(e) {
  //     e.preventDefault();
  //     alert("Thank you! Your message has been sent.");
  //     this.reset();
  //   }); */}
  
  /* HAMBURGER MENU */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  
  /* ACTIVE SECTION ON SCROLL */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-btn");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  
  // Smooth scroll & close mobile menu
  document.querySelectorAll('.nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  
