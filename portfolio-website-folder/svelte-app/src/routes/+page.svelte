<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<!-- Background with gradient overlay -->
<div class="background-container">
    <div class="background"></div>
    <div class="gradient-overlay"></div>
</div>

<div class="container">
    <!-- Top Icons - moved to top right -->
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
        <h1 class="title">DAtSKIV</h1>
        <h3 class="subtitle">creative portfolio</h3>
    </div>
    
</div>

<style>
    /* General Styling */
    :global(body) {
        margin: 0;
        padding: 0;
        height: 100vh; /* Changed from min-height to height */
        overflow: hidden; /* Prevent scrolling */        
    }

    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 2rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }

    /* Background with gradient overlay */
    .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('/Self portrait.png');
        background-size: cover;
        background-position: center;
    }

    .gradient-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 0%, rgba(164, 181, 195, 1) 100%);
    }

    /* Title Section */
    .title-container {
        margin-top: 10%;
        text-align: left;
    }

    .title {
        color: #eae0dc;
        font-family: 'Yeseva One', serif;
        font-size: 6rem;
        font-weight: 100;
        text-transform: uppercase;
        margin: 0;
        line-height: 1;
        text-shadow: 5px 2px 2px #000;
    }

    .subtitle {
        font-family: 'Cherry Cream Soda', cursive;  
        font-size: 2rem;
        color: darkred;
        font-weight: bold;
        margin-top: 1rem;
        text-shadow: 5px -150px 300px rgb(0, 41, 74);

    }

    /* Top Icons */
    .top-icons {
        position: absolute;
        top: 11rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column; /* Changed from row to column */
        gap: 0.5rem; /* spacing between icons */
    }

    .icon img {
        width: 40px;
        height: 40px;
        filter: drop-shadow(0 2px 10px #eae0dc);
        transition: transform 0.3s ease;
    }

    .icon:hover img {
        transform: scale(1.2);
    }



    /* Responsive Design */
    @media (max-width: 768px) {
        .title {
            font-size: 3rem;
        }
        
        .subtitle {
            font-size: 1.5rem;
        }
        

        .top-icons {
            top: 1rem;
            right: 1rem;
        }
    }
</style>