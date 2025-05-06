<script> 
	import { base } from '$app/paths';
  

  import { onMount } from 'svelte'; // Lifecycle function to run code when component mounts
  import { fly } from 'svelte/transition'; // Importing fly transition from Svelte for animation

  // Log message when Contact page is loaded
  onMount(() => {
    console.log("Contact Page Loaded");
  });
</script>

<!-- Main container, fly-in transition -->
<div in:fly={{ y: 200, duration: 600 }}>
  <section class="contact-container">

    <!-- Header section  -->
    <div class="contact-header">
      <div class="header-row">
        <h1>CONTACT</h1> <!-- Main heading -->
        <a href="{base}/" class="icon"> <!-- Link back to homepage -->
          <img src="{base}/website-logo.png" alt="Website Logo" /> <!-- Website logo -->
        </a>
      </div>
      <p>LET'S WORK TOGETHER!</p> <!-- Subtitle -->
    </div>

    <!-- Animated footer section -->
    <div class="footer-wrapper" in:fly={{ y: 100, duration: 700, delay: 200 }}>
      <footer class="contact-footer">
        
        <!-- name at the top of the footer -->
        <div class="footer-name">SOLOMIYA<br />DATSKIV</div>

        <!-- Column with programming projects -->
        <div class="footer-column">
          <h3>MY PROGRAMMING PROJECTS</h3>
          <p><a href="{base}https://solomiya-datskiv.codeberg.page/flatland-UI-design-project/">Flatland UI Design</a></p>
          <p><a href="{base}https://ui-programming-24-25.codeberg.page/Solomiya_Datskiv_CO0301892-UI-Programming-Module-Project/">UI Programming Module</a></p>
        </div>

        <!-- Column with social links -->
        <div class="footer-column">
          <h3>LET'S CONNECT</h3>
          <p><a href="{base}https://instagram.com">📷 Instagram</a></p>
          <p><a href="{base}https://github.com/MiyaDatskiv">🌐 GitHub</a></p>
        </div>

        <!-- Column with contact information -->
        <div class="footer-column">
          <h3>GET IN TOUCH</h3>
          <p><a href="{base}mailto:mia.datskiv@gmail.com">💌 mia.datskiv@gmail.com</a></p>
          <p>📞Phone: +353 852 882 303</p>
        </div>
      </footer>

      <!-- Footer disclaimer -->
      <p class="footer-note" in:fly={{ y: 30, duration: 600, delay: 800 }}>
        BTW: STEALING IDEAS AND ART IS BAD FOR YOUR KARMA. DON'T BE LIKE THIS :)
      </p>
    </div>
  </section>
</div>

<style>
/* ===== CONTACT HEADER STYLES ===== */
.contact-header {
  padding: 0 0rem;
  text-align: left;
}

/* Flex container for the header row */
.header-row {
  display: flex;
  margin-top: -50px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Main heading style */
.contact-header h1 {
  font-family: 'Yeseva One', serif;
  font-size: 7rem;
  font-weight: 100;
  margin: 0;
  color: black;
}

/* Subtitle under the heading */
.contact-header p {
  font-family: 'Cherry Cream Soda', cursive;
  font-size: 1.0rem;
  color: #731211;
  font-weight: bold;
  margin-top: -1rem;
}

/* ===== ICON LOGO STYLES ===== */
.icon img {
  width: 130px;
  height: auto;
  max-width: 100%;
  filter: drop-shadow(0 2px 10px #eae0dc);
  transition: transform 0.3s ease;
}

/* Enlarging logo on hover */
.icon:hover img {
  transform: scale(1.1);
}

/* ===== FOOTER WRAPPER ===== */
.footer-wrapper {
  position: relative;
  z-index: 1;
}

/* ===== FOOTER STYLES ===== */
.contact-footer {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: black;
  color: white;
  padding: 3rem 1rem 3rem;
  border-top-left-radius: 100% 400px;
  border-top-right-radius: 100% 400px;
  margin-top: 0rem;
  flex-wrap: wrap;
}

/* name in center top of footer */
.footer-name {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Yeseva One', serif;
  font-size: 1.4rem;
  color: white;
  text-align: center;
  line-height: 1.4;
  z-index: 2;
  text-align: left;
}

/* Footer content column */
.footer-column {
  margin-top: 6rem;
  max-width: 250px;
  text-align: left;
}

/* Footer column heading */
.footer-column h3 {
  font-family: 'Cherry Cream Soda', cursive;
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-transform: uppercase;
}

/* Footer links */
.footer-column a {
  color: white;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

/* ===== FOOTER NOTE ===== */
.footer-note {
  text-align: right;
  font-size: 0.9rem;
  color: #a4b5c3;
  background: black;
  padding-right: 20px;
  bottom: 0%;
}

/* ===== RESPONSIVE STYLES ===== */
@media (max-width: 768px) {
  .contact-header {
    margin-top: 10px;
  }

  .contact-header h1 {
    font-size: 3rem;
  }

  .icon img {
    width: 90px;
  }

  .header-row {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .contact-container {
    overflow: scroll;
  }

  .contact-header {
    margin-top: 45px;
    margin-bottom: 5%;
    padding: 0 1rem;
  }

  .contact-header h1 {
    font-size: 2.3rem;
  }

  .contact-header p {
    font-size: 0.7rem;
    margin-top: 0;
  }

  .icon img {
    width: 50px;
  }

  .header-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  /* Fixed footer layout on mobile */
  .contact-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 6rem 1.5rem 2rem;
    border-top-left-radius: 100% 200px;
    border-top-right-radius: 100% 200px;
    z-index: 10;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
  }

  .footer-name {
    font-size: 1rem;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .footer-column {
    margin: 0;
    margin-left: 1rem;
    padding: 0;
  }

  .footer-column h3 {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  .footer-column p,
  .footer-column a {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .footer-note {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 0.7rem;
    padding: 0.5rem;
    margin-right: 2rem;
    text-align: right;
    z-index: 9;
  }
}
</style>
