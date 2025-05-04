<script>
    // Importing onMount lifecycle function from Svelte.
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Works Page Loaded");
    });

    // 'fly' transition for animation.
    import { fly } from 'svelte/transition';
</script>

<!-- Decorative background gradient  -->
<div class="background-works"></div>

<!-- Wrapper to animate section on load with 'fly' effect.-->
<div in:fly={{ y: 200, duration: 600 }}>

<section class="works-container">
    <!-- Main heading for the Works section -->
    <h1 class="works-title">WORKS</h1>

    <!-- Individual category section: Painting -->
    <div class="category">
        <!-- Vertical label for category -->
        <span class="vertical-text">PAINTING</span>
        <!-- Clickable image linking to subpage -->
        <a href="/painting">
            <img src="/cliffs.jpg" alt="Painting" class="work-image">
        </a>
    </div>

    <!-- Category: Drawing -->
    <div class="category">
        <span class="vertical-text">DRAWING</span>
        <a href="/drawing">
            <img src="/cranes.jpg" alt="Drawing" class="work-image">
        </a>
    </div>

    <!-- Category: Digital Art -->
    <div class="category">
        <span class="vertical-text">DIGITAL ART</span>
        <a href="/digitalart">
            <img src="/woman2d.jpg" alt="Digital Art" class="work-image">
        </a>
    </div>

    <!-- Category: Other Projects -->
    <div class="category">
        <span class="vertical-text">OTHER PROJECTS</span>
        <a href="/otherprojects">
            <img src="/wood..JPG" alt="Other Projects" class="work-image">
        </a>
    </div>

</section>

</div>

<style>
/* Background Layer Styling:
   Fullscreen gradient background placed behind content using absolute positioning. */
.background-works {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #a4b5c3, #eae0dc);
    z-index: -1;
}

/* Main Container for Work Sections:
   Horizontally distributes work categories using flexbox. */


/* Section Title Styling:
   Large serif heading positioned in top-left of the section. */
.works-title {
    font-family: 'Yeseva One', serif;
    text-transform: uppercase;
    font-weight: 100;
    position: absolute;
    top: -50px;
    left: 20px;
    font-size: 7em;
    color: black;
    text-shadow: 2px 2px 2px #ccc; /* subtle 3D effect */
}

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* align items to bottom */
    position: relative;
    height: 390px; /* enough height to contain tallest label + image */
}


/* Make all images align at same vertical level */
.works-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 100px; /* Push entire section down instead of per item */
    position: relative;
    gap: 30px; /* Optional: control spacing between categories */
}

/* Fix the stripe positioning so it stretches from top of viewport */
.category::before {
    content: "";
    position: fixed;
    top: -200vh; /* Start offscreen */
    width: 65px;
    height: 100vh;
    background-color: #eae0dc;
    z-index: -1;

    animation: slideDown 1.2s ease-out forwards;
    animation-delay: 0.4s;
}
@keyframes slideDown {
    from {
        top: -200vh;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}



/* Category Labels (e.g., "PAINTING"):
   Rotated vertical text using writing-mode and transform. */
   .vertical-text {
    position: absolute;
    bottom: 220px; /* Adjust so the text ends just above the image */
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Cherry Cream Soda', cursive; 
    font-size: 1.3em;
    letter-spacing: 3px;
    color: #2e2e2e;
}


/* Artwork Image Styling:
   Displays work as circular thumbnails with hover animation. */
.work-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%; /* makes image circular */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* subtle depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

/* Hover Interaction:
   Image slightly lifts and enlarges when hovered over. */
.work-image:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive Layout Adjustments:
   On smaller screens, switch layout to vertical stack. */
@media (max-width: 768px) {

    .works-title{
        top: 0px;
        left: 0px;
        font-size: 3rem;
        justify-content: left;
    }
    .works-container {
        flex-direction: column;
        align-items: center;
        gap: 5px; /* Reduce space between stacked categories */
        padding-top: 130px; /* Reduce top spacing */

    }

    .category {
        height: auto; /* Let height shrink to fit */
        margin-bottom: 70px; /* Reduce space between categories */
    }

    /* Expand background stripe on mobile. */
    .category::before {
        width: 50%;
    }

    /* Make category labels horizontal for mobile. */
    .vertical-text {
        writing-mode: horizontal-tb;
        transform: rotate(0);
        margin-top: 20px;
    }

    .work-image {
    object-fit: cover;
    border-radius: 50%; /* makes image circular */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* subtle depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}
}
</style>
