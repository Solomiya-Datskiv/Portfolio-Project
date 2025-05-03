<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
    import { fly } from 'svelte/transition';
</script>

<div class="background"></div>

<div in:fly={{ y: 200, duration: 600 }}>
<section class="about-container">
    <div class="image-wrapper">
        <img src="/portfolio-picture.png" alt="Solomiya Photograph" class="about-image">
        <h1 class="about-title">ABOUT</h1>
        <p class="about-subtitle1">HI! I'M SOLOMIYA, ARTIST AND</p>
        <p class="about-subtitle2"> DESIGNER BASED IN IRELAND</p>
      </div>

    <div class="about-text">
        <h2>EDUCATION</h2>
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
        <h2>SKILLS</h2>
        <ul class="skills-list">
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Digital Illustration </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Adobe Creative Suite </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Figma, Penpot, Canva </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Animation/Storyboarding </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> UI Design </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Graphic Design </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> Microsoft Office </section></li>
            <li><section class="bulletpoint"> <img src="/bulletpoint.png" alt="bulletpoint"> UI Programming </section></li>
        </ul>
        

            </aside>

</section>

</div>

<style>
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #a4b5c3;
        background-size: 100%;
        background-position: center;
        z-index: -1;
    }


.about-container {
    display: grid;
    grid-template-columns: 0.75fr 1.4fr;
    grid-template-areas:
        "image text"
        "image aside";
    gap: 60px;
    align-items: left;

    padding-bottom: 0px;
    background: #a4b5c3;

    /* 
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);*/
}

.image-wrapper {
  position: relative;
  grid-area: image;
  margin-top: -50px; /* move image up by 50px */
}

.about-title {
    font-family: 'Yeseva One', serif;
    text-transform: uppercase;
    font-weight: 100;
  position: absolute;
  top: 0.5%;
  left: 0%;
  font-size: 7em;
  color: white;
  text-shadow: 15px 2px 4px #000;
}

.about-subtitle1 {
 font-family: 'Cherry Cream Soda', cursive; 
  position: absolute;
  top: 25%;
  left: 1%;
  font-size: 1.2em;
  color: white;
  text-align: left;
}

.about-subtitle2 {
 font-family: 'Cherry Cream Soda', cursive; 
  position: absolute;
  top: 29%;
  left: 1%;
  font-size: 1.2em;
  color: white;
  text-align: left;
}


h2 {
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
    text-align: left;
}
.about-aside{
    grid-area: aside;
    border-radius: 10px;
    text-align: left;

}

.skills-list {
    columns: 2; /* splits into two columns */
    -webkit-columns: 2;
    -moz-columns: 2;
    column-gap: 40px; /* space between columns */
    list-style: none;
    padding: 0;
    margin: 0;
}

.skills-list li {
    margin-bottom: 1rem;
}

.bulletpoint {
    display: flex;
    align-items: center;
}

.bulletpoint img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

h2{
    text-shadow: 15px 5px 15px #eae0dc;
}


@media (max-width: 768px) {
  .about-container {    
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  .image-wrapper {
    position: relative;
    margin-top: 0;
    text-align: center;
  }

  .about-title {
    text-align: left;

    font-size: 3rem;
    top: 10px;
    left: 50%;
    text-shadow: 4px 2px 2px #000;
  }

  .about-subtitle1,
  .about-subtitle2 {
    font-size: 1rem;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    margin-top: 0.5rem;
    text-align: left;
  }

  .about-subtitle2 {
    margin-bottom: 1rem;
  }

  .about-image {
    width: 90%;
    margin-top: 2rem;
    border-radius: 10px;
  }

  .about-text,
  .about-aside {
    text-align: left;
    padding: 0 1rem;
  }

  .skills-list {
    columns: 1;
  }

  h2 {
    font-size: 2rem;
    text-align: left;
  }
}


@media (max-width: 480px) {
  .about-title {
    font-size: 2.5rem;
  }

  .about-subtitle1,
  .about-subtitle2 {
    font-size: 0.9rem;
  }

  .skills-list {
    font-size: 0.9rem;
  }
}

</style>