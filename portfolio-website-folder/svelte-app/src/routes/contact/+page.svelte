<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
  
    onMount(() => {
      console.log("Contact Page Loaded");
    });
  </script>
  
  <div in:fly={{ y: 200, duration: 600 }}>
    <section class="contact-container">
  
<!-- Contact Heading -->
<div class="contact-header">
    <div class="header-row">
      <h1>CONTACT</h1>
      <a href="/" class="icon">
        <img src="/website-logo.png" alt="Website Logo" />
      </a>
    </div>
    <p>LET'S WORK TOGETHER!</p>
  </div>
  
<!-- Footer Section -->
<footer class="contact-footer">
    <!-- Centered Name -->
    <div class="footer-name">SOLOMIYA<br />DATSKIV</div>
  
    <div class="footer-column">
      <h3>MY PROGRAMMING PROJECTS</h3>
      <p><a href="https://solomiya-datskiv.codeberg.page/flatland-UI-design-project/">Flatland UI Design</a></p>
      <p><a href="https://ui-programming-24-25.codeberg.page/Solomiya_Datskiv_CO0301892-UI-Programming-Module-Project/">UI Programming Module</a></p>
    </div>
  
    <div class="footer-column">
      <h3>LET'S CONNECT</h3>
      <p><a href="https://instagram.com">📷 Instagram</a></p>
      <p><a href="https://github.com/MiyaDatskiv">🌐 GitHub</a></p>
    </div>
  
    <div class="footer-column">
      <h3>GET IN TOUCH</h3>
      <p><a href="mailto:mia.datskiv@gmail.com">💌 mia.datskiv@gmail.com</a></p>
      <p>📞Phone: +353 852 882 303</p>
    </div>
  </footer>
  
  
      <p class="footer-note">
        BTW: STEALING IDEAS AND ART IS BAD FOR YOUR KARMA. DON'T BE LIKE THIS :)
      </p>
    </section>
  </div>
  
  <style>
/* ===== CONTACT HEADER ===== */
.contact-header {
  padding: 0 1rem;
  text-align: left;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-header h1 {
  font-family: 'Yeseva One', serif;
  font-size: 7rem;
  font-weight: 100;
  margin: 0;
  color: black;
}

.contact-header p {
  font-family: 'Cherry Cream Soda', cursive;
  font-size: 1.0rem;
  color: #731211;
  font-weight: bold;
  margin-top: -1rem;
}

/* ===== ICON ===== */
.icon img {
  width: 130px;
  height: auto;
  max-width: 100%;
  filter: drop-shadow(0 2px 10px #eae0dc);
  transition: transform 0.3s ease;
}

.icon:hover img {
  transform: scale(1.1);
}




    /* ===== FOOTER SECTION ===== */
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

/* Position the name above the columns */
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

.footer-column {
  margin-top: 6rem;
  max-width: 250px;
  text-align: left;
}

    
    .footer-column h3 {
        font-family: 'Cherry Cream Soda', cursive;
        font-size: 1.2rem;
        margin-bottom: 5px;
        text-transform: uppercase;
    }
    
    .footer-column a {
        color: white;
        text-decoration: none;
    }
    
    
    .footer-column a:hover {
        text-decoration: underline;
    }
    
    /* ===== FOOTER NOTE ===== */
    .footer-note {
        text-align:  right;
        font-size: 0.9rem;
        color: #a4b5c3;
        background: black;
        padding-right: 20px;
        bottom: 0%;
    }
    
    
  
  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .contact-header {
  margin-bottom: 50%;
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

.contact-container{
    overflow: scroll;
}

.contact-header {
  margin-top: 0;
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

/* FOOTER */

.contact-footer {
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 6rem 1.5rem 2rem; /* <-- Key fix: More top padding */
  gap: 1.5rem;
  border-top-left-radius: 100% 200px;
  border-top-right-radius: 100% 200px;
  position: relative;
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
  padding: 0;
}

.footer-column h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.footer-column p,
.footer-column a {
  font-size: 0.85rem;
  line-height: 1.4;
}

.footer-note {
  font-size: 0.7rem;
  padding-right: 10px;
  margin-top: 0rem;
  text-align: right;
}
}


  </style>
  