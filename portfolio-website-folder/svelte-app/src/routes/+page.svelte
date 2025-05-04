<script> 
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<!-- Background with gradient overlay -->
<div class="background-container">
    <div class="background"></div> <!-- Background image -->
    <div class="gradient-overlay"></div>
</div>

<div class="container">
    <!-- Social icons (Instagram and GitHub) -->
    <div class="top-icons">
        <a href="https://www.instagram.com/crdmnu?igsh=MTRnNXZveWc1enQzag==" class="icon">
            <img src="/instaSign.png" alt="Instagram"/>
        </a>
        <a href="https://github.com/MiyaDatskiv" class="icon">
            <img src="/githubSign.png" alt="GitHub"/>
        </a>
    </div>

    <!-- Title Section -->
    <div class="title-container">
        <h1 class="title">SOLOMIYA</h1>
        <h1 class="title">DATSKIV</h1>
        <h3 class="subtitle">creative portfolio</h3>
    </div>
</div>

<style>

:global(body.dark) .background {
    /* Switching to dark mode background when 'dark' class is on body */
    background-image: url('/Self portrait dark.png');
}

:global(html, body) {
    /* Remove spacing and full height */
    margin: 0;
    padding: 0;
    height: 100%;
}

/* Container for centered text*/
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 1; 
}

/* Fixed background image and gradient */
.background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    pointer-events: none; /* clicks*/
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/Self portrait.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.gradient-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(164, 181, 195, 1) 100%);
}

/* Title section */
.title-container {
    position: fixed; 
    text-align: left;
    padding: 0 20px;
    width: 100%;
    max-width: 1200px;
}

.title {
    color: #eae0dc;
    font-family: 'Yeseva One', serif;
    font-size: clamp(3rem, 9vw, 7rem); 
    font-weight: 100;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    text-shadow: 5px 2px 2px #000;
}

.subtitle {
    font-family: 'Cherry Cream Soda', cursive;  
    font-size: clamp(1.2rem, 3vw, 2rem);
    color: darkred;
    font-weight: bold;
    margin-top: 0.3rem;
}

/* Social icons column */
.top-icons {
    position: fixed;
    top: 45.5%;
    right: 10.5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 10; /* Above other content */
}

.icon img {
    width: clamp(40px, 3vw, 50px);
    height: clamp(40px, 3vw, 50px);
    filter: drop-shadow(0 2px 10px #eae0dc); /* Glow effect */
    transition: transform 0.3s ease;
}

.icon:hover img {
    transform: scale(1.2); /* zoom on hover */
}

/* Tablet styles */
@media (max-width: 1024px) and (min-width: 769px) {
    .title {
        font-size: 4.5rem;
    }
    
    .subtitle {
        font-size: 1.8rem;
    }

    .top-icons {
        top: 57.0%;
        right: 5.5%;
    }
}

/* Mobile styles */
@media (max-width: 768px) {
    .top-icons {
        top: 55.5%;
    }

    .title-container {
        padding-top: 3rem;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 2.8rem;
        line-height: 1.2;
    }

    .subtitle {
        font-size: 1.2rem;
        margin-top: 0.8rem;
    }

    .top-icons {
        gap: 0.8rem;
        top: 35.5%;
        left: -250px;
    }
}
</style>
