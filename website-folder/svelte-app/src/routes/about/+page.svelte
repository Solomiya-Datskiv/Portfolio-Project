<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<section class="about-container">
    <img src="/about-img.jpg" alt="About us" class="about-image">
    <div class="about-text">
        <h1>About Us</h1>
        <p> LeArt is a unique platform dedicated to connecting artists and buyers who appreciate original artworks and handmade creations. Our mission is to support independent artists by providing a space where they can showcase and sell their work, while art lovers can discover and purchase truly one-of-a-kind pieces.
        Whether you're an artist looking to share your creativity or a collector searching for something special, LeArt is the perfect destination for art enthusiasts.</p>
    </div>
    <aside class="about-aside">
        <h4>Our Vision</h4>
        <p>Our platform focuses on creating enjoyable and useful experiences for all users, both 
            artists who want to sell their creations and customers who want to explore and purchase 
            them. We will provide not just a shopping website, but 
            an aesthetically pleasing and accessible platform for buying and selling original art. We 
            want to make our webpage a space designed for creative, artistic people and make it easy to 
            use for everyone, beginners and professionals.</p>
    </aside>

</section>

<style>
    .about-container {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-template-areas:
        "image text"
        "image aside";
    gap: 30px;
    align-items: center;

    padding-bottom: 40px;
    background: var(--background-color);
    

    /* 
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);*/
}

h1 {
    color: #7B5E46;
    font-size: 2.7em;
    text-align: center;
}
.about-image{
    grid-area: image;
    width: 100%;
    border-radius: 10px;

}
.about-text {
    grid-area: text;
    font-size: 1.1em;
    line-height: 1;
    color: #7B5E46;
}
.about-aside{
    grid-area: aside;
    background: #6f5336;
    color:antiquewhite;
    padding: 1rem;
    border-left: 4px solid #3E2C24;
    border-radius: 10px;
}

@media (max-width: 768px){
    .about-container{
        grid-template-columns: 1fr;
        grid-template-areas:
        "image"
        "text"
        "aside";
        text-align: center;
    }
}
</style>