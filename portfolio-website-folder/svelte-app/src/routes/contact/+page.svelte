<script> 
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    });

    import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 200, duration: 600 }}>
<section class="contact-container">
    <div class="top-icons">
        <a href="/" class="icon" >
            <img src="/website-logo.png" alt="Website Logo">

    </div>
    <!-- Contact Heading -->
    <div class="contact-header">
        <h1>CONTACT</h1>
        <p>LET'S WORK TOGETHER!</p>


    </div>

    <!-- Footer Section -->
    <footer class="contact-footer">
        <div class="footer-column">
            <h3>MY PROGRAMMING PROJECTS</h3>
            <p><a href="https://solomiya-datskiv.codeberg.page/flatland-UI-design-project/">Flatland UI Design</a></p>
            <p><a href="https://ui-programming-24-25.codeberg.page/Solomiya_Datskiv_CO0301892-UI-Programming-Module-Project/">UI Programming Module</a></p>
        </div>

        <div class="footer-column">
            <h3>LET'S CONNECT</h3>
            <p><a href="https://instagram.com">📷 Instagram</a></p>
            <p><a href="https://facebook.com">📘 Facebook</a></p>
        </div>

        <div class="footer-column">
            <h3>GET IN TOUCH</h3>
            <p><a href="mailto:mia.datskiv@gmail.com">mia.datskiv@gmail.com</a></p>
            <p>📞 +353852882303</p>
            <p>📍 5, The Glen, Carlow R93 Y5P2</p>
        </div>
    </footer>

    <p class="footer-note">
        BTW: STEALING IDEAS AND ART IS BAD FOR YOUR KARMA. DON'T BE LIKE THIS :)
    </p>
</section>
</div>

<style>
/* ===== CONTACT HEADER ===== */
.contact-container {
    text-align: center;
    padding-top: 0px;
}

.contact-header h1 {
    font-family: 'Yeseva One', serif;
    font-size: 7rem;
    font-weight: 100;
    margin-top: 0px;
    margin-bottom: 0px;
    color: black;
    text-align: left;
}

.contact-header p {
    font-family: 'Cherry Cream Soda', cursive;
    font-size: 1.5rem;
    color: #731211;
    font-weight: bold;
    text-align: left;

}

/* ===== FOOTER SECTION ===== */
.contact-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
    padding: 50px 20px;
    border-top-left-radius: 50% 50px;
    border-top-right-radius: 50% 50px;
    margin-top: 50px;
}

.footer-column {
    text-align: left;
}

.footer-column h3 {
    font-family: 'Yeseva One', serif;
    font-size: 1.2rem;
    margin-bottom: 10px;
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
    font-size: 0.9rem;
    margin-top: 10px;
    color: white;
    background: black;
    padding: 10px;
    border-radius: 5px;
}


.top-icons {
        position: absolute;
        top: 12rem;
        right: 3.5rem;
        display: flex;
    }

    .icon img {
        width: 160px;
        height: 160px;
        filter: drop-shadow(0 2px 10px #eae0dc);
        transition: transform 0.3s ease;
    }

    .icon:hover img {
        transform: scale(1.2);
    }
</style>
