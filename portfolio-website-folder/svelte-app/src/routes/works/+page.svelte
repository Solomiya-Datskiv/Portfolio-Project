<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<div class="background-works"></div>

<section class="works-container">
    <h1 class="works-title">WORKS</h1>

    <div class="category">
        <span class="vertical-text">PAINTING</span>
        <a href="/painting">
            <img src="/cliffs.jpg" alt="Painting" class="work-image">
        </a>
    </div>
    
    <div class="category">
        <span class="vertical-text">DRAWING</span>
        <a href="/drawing">
            <img src="/cranes.jpg" alt="Drawing" class="work-image">
        </a>
    </div>
    
    <div class="category">
        <span class="vertical-text">DIGITAL ART</span>
        <a href="/digitalart">
            <img src="/woman2d.jpg" alt="Digital Art" class="work-image">
        </a>
    </div>
    
    <div class="category">
        <span class="vertical-text">OTHER PROJECTS</span>
        <a href="/otherprojects">
            <img src="/wood..JPG" alt="Other Projects" class="work-image">
        </a>
    </div>
    
</section>

<style>
/* Background gradient */
.background-works {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #a4b5c3, #eae0dc);
    z-index: -1;
}

/* Works container */
.works-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 0px;
    position: relative;
}

/* Title */
.works-title {
    position: absolute;
    top: 0px;
    left: 50px;
    font-size: 5em;
    font-family: 'Cinzel', serif;
    color: black;
    text-shadow: 2px 2px 2px #ccc;
}

/* Category stripe */


.category::before {
    content: "";
    position: absolute;
    top: 0;
    width: 65px;
    height: 100%;
    background-color: #eae0dc;
    z-index: -1;
}

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative;
    padding-top: 100px;
}

.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Cherry Cream Soda', cursive; 
    font-size: 1.5em;
    margin-bottom: 50px;
    letter-spacing: 3px;
    color: #2e2e2e;
}

.works-title {
    position: absolute;
    top: 20px;
    left: 50px;
    font-size: 5em;
    font-family: 'Cinzel', serif;
    color: black;
    text-shadow: 2px 2px 2px #ccc;
}


/* Circular work images */
.work-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.work-image:hover {
    transform: translateY(-10px) scale(1.05); /* move up and slightly enlarge */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* bigger shadow */
}


/* Responsive */
@media (max-width: 768px) {
    .works-container {
        flex-direction: column;
        align-items: center;
    }
    .category::before {
        width: 80%;
    }
    .vertical-text {
        writing-mode: horizontal-tb;
        transform: rotate(0);
        margin: 10px 0;
    }
}
</style>
