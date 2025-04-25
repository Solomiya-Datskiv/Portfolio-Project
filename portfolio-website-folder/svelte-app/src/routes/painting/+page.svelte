<script lang="ts">
    import { fade } from 'svelte/transition';
  
    let scrollContainer: HTMLElement | null = null;
  
    function scrollLeft() {
      scrollContainer?.scrollBy({ left: -350, behavior: 'smooth' });
    }
  
    function scrollRight() {
      scrollContainer?.scrollBy({ left: 350, behavior: 'smooth' });
    }
  </script>
  
  
  
  <div transition:fade>
    <h1>Painting Gallery</h1>
  
    <div class="gallery-container">
      <button class="scroll-button left" on:click={scrollLeft}>&lt;</button>
  
      <section bind:this={scrollContainer} class="artwork-gallery">
        <img src="/painting/painting1.jpg" alt="Painting 1">
        <img src="/painting/painting2.jpg" alt="Painting 2">
        <img src="/painting/painting3.png" alt="Painting 3">
        <img src="/painting/painting4.jpg" alt="Painting 4">
        <img src="/painting/painting5.jpg" alt="Painting 5">
        <img src="/painting/painting6.JPG" alt="Painting 6">
        <img src="/painting/painting7.jpg" alt="Painting 7">
        <img src="/painting/painting8.jpg" alt="Painting 8">
        <img src="/painting/painting9.jpg" alt="Painting 9">
        <img src="/painting/painting10.jpg" alt="Painting 10">
        <img src="/painting/painting11.jpg" alt="Painting 11">
        <img src="/painting/painting12.jpg" alt="Painting 12">
        <img src="/painting/painting13.jpg" alt="Painting 13">
        <img src="/painting/painting14.jpg" alt="Painting 14">
        <img src="/painting/painting15.jpg" alt="Painting 15">
        <img src="/painting/painting16.jpg" alt="Painting 16">
        <img src="/painting/painting17.jpg" alt="Painting 17">


      </section>
  
      <button class="scroll-button right" on:click={scrollRight}>&gt;</button>
    </div>
  </div>
  
  <style>
    h1 {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-family: 'Cinzel', serif;
      color: #2e2e2e;
    }
  
    .gallery-container {
      display: flex;
      align-items: center;
      position: relative;
      padding: 2rem 0;
      width: 100%;
    }
  
    .scroll-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255,255,255,0.7);
      border: none;
      font-size: 2rem;
      color: #333;
      cursor: pointer;
      padding: 10px 16px;
      z-index: 10;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  
    .scroll-button.left {
      left: 10px;
    }
  
    .scroll-button.right {
      right: 10px;
    }
  
    .artwork-gallery {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 20px;
      padding: 0 60px; /* leave space for scroll buttons */
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
    }
  
    .artwork-gallery::-webkit-scrollbar {
      display: none;
    }
  
    .artwork-gallery img {
      width: 300px;
      height: auto;
      border-radius: 10px;
      scroll-snap-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
    }
  
    .artwork-gallery img:hover {
      transform: scale(1.05);
    }
  </style>
  