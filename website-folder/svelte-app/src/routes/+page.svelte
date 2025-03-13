<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(()  => {
        console.log("Home Page Loaded")
    });
</script>

<h1>Welcome to LeArt</h1>
<p>This is Homepage of our Website for Buying and Selling Original Artworks!</p>

<div class="gallery">
    <Card title="Card 1" description="The first card" />
    <Card title="Card 2" description="The second card" />
    <Card title="Card 3" description="The third card" />
    <Card title="Card 4" description="The fourth card" />

</div>

<style>
    /* Flexbox for Dynamic Layout */
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px; /* Creates spacing between items */
        justify-content: center;
        margin-top: 2rem;
    }

    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card:first-child) {
        border: 3px solid gold; /* Emphasize the first card */
    }

    :global(.gallery > .card:last-child) {
        border: 3px solid crimson; /* Emphasize the last card */
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(even)) {
        background-color: #ebebeb;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

    /* Apply a special styling to every third card */
    :global(.gallery > .card:nth-child(3n)) {
        border-left: 5px solid #98caff; /* Left accent border */
    }

    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }

</style>