// Simple form submit handler
<form 
  action="https://script.google.com/macros/s/AKfycbwmWmNHSVa8qpVLhbFWBpD5pmk98vQUkOysoHYNOGVcPZQsyK8njzHc790gCxzDNa8/exec"
  method="POST"
  class="contact-form"
>
  <input name="name" placeholder="Your Name" required>
  <input name="email" type="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>

  <button type="submit" class="btn">Send Message</button>
</form>


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
