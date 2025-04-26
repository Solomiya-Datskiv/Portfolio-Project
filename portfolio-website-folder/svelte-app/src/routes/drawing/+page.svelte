<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let scrollContainer: HTMLElement | null = null;
    let images: HTMLImageElement[] = [];
    let currentCenterIndex = 0;
    let scrollProgress = 0;

    let fullscreenImage: string | null = null; // store which image is open in fullscreen

    const imagesPaths = [
        "/drawing/drawing1.jpg",
        "/drawing/drawing2.jpg",
        "/drawing/drawing3.jpg",
        "/drawing/drawing4.jpg",
        "/drawing/drawing5.jpg",
        "/drawing/drawing6.jpg",
        "/drawing/drawing7.jpg",
        "/drawing/drawing8.JPG",
        "/drawing/drawing9.JPG",
        "/drawing/drawing10.JPG",
        "/drawing/drawing11.JPG",
        "/drawing/drawing12.jpg",
        "/drawing/drawing13.jpg",
        "/drawing/drawing14.jpg",
    ];

    function scrollLeft() {
        if (scrollContainer && images.length > 0) {
            const targetIndex = Math.max(currentCenterIndex - 1, 0);
            scrollToImage(targetIndex);
        }
    }

    function scrollRight() {
        if (scrollContainer && images.length > 0) {
            const targetIndex = Math.min(currentCenterIndex + 1, images.length - 1);
            scrollToImage(targetIndex);
        }
    }

    function scrollToImage(index: number) {
        if (!scrollContainer || !images[index]) return;
        const containerCenter = scrollContainer.offsetWidth / 2;
        const imgCenter = images[index].offsetLeft + images[index].offsetWidth / 2;
        scrollContainer.scrollTo({
            left: imgCenter - containerCenter,
            behavior: 'smooth'
        });
    }

    function handleScroll() {
        if (!scrollContainer || images.length === 0) return;

        const containerCenter = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;
        let closestDistance = Infinity;
        let closestIndex = 0;

        images.forEach((img, index) => {
            const imgCenter = img.offsetLeft + img.offsetWidth / 2;
            const distance = Math.abs(containerCenter - imgCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        currentCenterIndex = closestIndex;

        // Update scrollbar
        const totalScrollWidth = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
        scrollProgress = (scrollContainer.scrollLeft / totalScrollWidth) * 100;
    }

    function handleScrollbarInput(event: Event) {
        const input = event.target as HTMLInputElement;
        if (scrollContainer) {
            const totalScrollWidth = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
            scrollContainer.scrollLeft = (parseFloat(input.value) / 100) * totalScrollWidth;
        }
    }

    function openFullscreen(image: string) {
        fullscreenImage = image;
    }

    function closeFullscreen() {
        fullscreenImage = null;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            closeFullscreen();
        }
    }

    onMount(() => {
        setTimeout(() => {
            if (scrollContainer) {
                images = Array.from(scrollContainer.querySelectorAll('img'));
                Promise.all(images.map(img => img.complete ? Promise.resolve() : new Promise(res => img.onload = res)))
                    .then(() => {
                        scrollToImage(0);
                    });
            }
            window.addEventListener('keydown', handleKeydown);
        }, 0);
    });
</script>

<div transition:fade>
    <h2>DRAWING</h2>

    <div class="gallery-container">
        <button class="scroll-button left" on:click={scrollLeft}>&lt;</button>

        <section 
            bind:this={scrollContainer} 
            class="artwork-gallery"
            on:scroll={handleScroll}
        >
            {#each imagesPaths as image, index}
                <img 
                    src={image} 
                    alt="Painting {index + 1}"
                    class:center={index === currentCenterIndex}
                    on:click={() => openFullscreen(image)}
                />
            {/each}
        </section>

        <button class="scroll-button right" on:click={scrollRight}>&gt;</button>
    </div>

    <!-- Custom Scrollbar -->
    <input 
        type="range" 
        min="0" 
        max="100" 
        bind:value={scrollProgress} 
        class="scrollbar"
        on:input={handleScrollbarInput}
    />
</div>

{#if fullscreenImage}
    <div class="fullscreen-overlay" on:click={closeFullscreen}>
        <img src={fullscreenImage} alt="Fullscreen Painting" transition:scale={{ duration: 400 }} />
    </div>
{/if}

<style>
h2 {
    padding: 0rem 3rem;
    text-align: left;
    font-size: 2rem;
}

.gallery-container {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem 0;
    width: 100%;
    overflow: hidden;
}

.scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    border: none;
    font-size: 2rem;
    color: #eae0dc;
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
    gap: 40px;
    padding: 0 calc(50% - 130px);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    height: 420px;
    align-items: center;
}

.artwork-gallery::-webkit-scrollbar {
    display: none;
}

.artwork-gallery img {
    height: 300px;
    width: auto;
    object-fit: contain;
    scroll-snap-align: center;
    border-radius: 0px;
    transition: all 0.5s ease;
    opacity: 0.5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.artwork-gallery img.center {
    height: 380px;
    width: auto;
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
    z-index: 2;
}

.artwork-gallery img:hover {
    transform: scale(1.08);
}

/* Fullscreen Overlay */
.fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: zoom-out;
}

.fullscreen-overlay img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);
}

/* Custom Scrollbar Styling */
.scrollbar {
    width: 80%;
    margin: 1rem auto 0 auto;
    display: block;
    -webkit-appearance: none;
    height: 8px;
    border-radius: 4px;
    background: #a4b5c3;
    outline: none;
}

.scrollbar::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 20px;
    background: #333;
    border-radius: 4px;
    cursor: pointer;
}

.scrollbar::-moz-range-thumb {
    width: 30px;
    height: 20px;
    background: #333;
    border-radius: 4px;
    cursor: pointer;
}
</style>
