// Simple form submit handler
const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusText.textContent = "Sending...";
  statusText.style.color = "#2563eb";

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwmWmNHSVa8qpVLhbFWBpD5pmk98vQUkOysoHYNOGVcPZQsyK8njzHc790gCxzDNa8/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      

    const result = await response.json();

    if (result.status === "success") {
      statusText.textContent = "Message sent successfully!";
      statusText.style.color = "green";
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    statusText.textContent = "Failed to send message.";
    statusText.style.color = "red";
  }
});

// document.querySelector(".contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     this.reset();
//   });
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
