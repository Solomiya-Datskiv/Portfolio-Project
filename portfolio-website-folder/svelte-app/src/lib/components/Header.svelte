<script> 
    import { Navigation } from "$lib";
</script>

<header>

    <!-- Navigation -->
    <Navigation />

    <!-- Theme Switcher (Right) -->
    <div class="theme-toggle">
        <img src="/icons/sun.svg" alt="Light Mode">
        <input type="checkbox" id="themeSwitch">
        <label for="themeSwitch"></label>
    </div>
</header>

<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.5); /* 70% Transparent */
        border-radius: 50px;
        padding: 0.05rem 1.6rem;
        margin: 10px auto;
        max-width: 90%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* More visible shadow */
    }


    /* Theme Toggle */
    .theme-toggle {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .theme-toggle input {
        display: none;
    }

    .theme-toggle label {
        width: 40px;
        height: 20px;
        background: #ddd;
        border-radius: 10px;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    .theme-toggle label::after {
        content: "";
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 2px;
        transition: 0.3s;
    }

    .theme-toggle input:checked + label {
        background: black;
    }

    .theme-toggle input:checked + label::after {
        left: 20px;
        background: #fff;
    }
</style>

 
 
 
 
 <!--
<script>
     // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    Logo
    <div class="logo">
        <img src="/website-logo.png" alt="Website Logo">
        <h1>LeArt</h1>
    </div>

     Navigation
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
        }

        .logo {
            display: flex;
            align-items: center;
        }
        .logo img {
            width: 50px;
            margin-right: 10px;
        }
    }
</style>
-->