<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<div class="background"></div>

<section class="about-container">
    <img src="/portfolio-picture.png" alt="About us" class="about-image">
    <div class="about-text">
        <h1>ABOUT</h1>
        <li><section class="bulletpoint">
            <img src="/bulletpoint.png" alt="bulletpoint"> Computing in Interactive Digital Art and Design<br>                          
            South East Technological University (Carlow, Ireland)  </li>

        <li><section class="bulletpoint">
            <img src="/bulletpoint.png" alt="bulletpoint"> Art with Animation Studies, Level 5<br>                                                 
            Ormonde College of Further Education (Kilkenny, Ireland)  </li>
        <li><section class="bulletpoint">
            <img src="/bulletpoint.png" alt="bulletpoint"> Design of Small Architectural Objects<br>                                             
            Ivan Trush College of Applied Arts and Crafts (Lviv, Ukraine)   </li>

    
    </div>
    <aside class="about-aside">
        <h4>Our Vision</h4>
        <p>Our platform focuses on creating enjoyable and useful experiences for all users, both 
            artists who want to sell their creations and customers who want to explore and purchase 
            them. We will provide not just a shopping website, but 
            an aesthetically pleasing and accessible platform for buying and selling original art. We 
            want to make our webpage a space designed for creative, artistic people and make it easy to 
            use for everyone, beginners and professionals.</p>
            <li>  </li>
            <li>  </li>
    </aside>

</section>

<style>
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #a4b5c3;
        background-size: 90%;
        background-position: center;
        z-index: -1;
    }


.about-container {
    display: grid;
    grid-template-columns: 0.65fr 1.4fr;
    grid-template-areas:
        "image text"
        "image aside";
    gap: 30px;
    align-items: left;

    padding-bottom: 40px;
    background: #a4b5c3;

    /* 
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);*/
}

h1 {
    color: #7B5E46;
    font-size: 2.7em;
    text-align: left;
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
    text-align: left;
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