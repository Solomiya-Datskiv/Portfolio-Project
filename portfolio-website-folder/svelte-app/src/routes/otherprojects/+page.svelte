<script lang="ts"> 
	import { base } from '$app/paths';

    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let scrollContainer: HTMLElement | null = null;
    let images: HTMLImageElement[] = [];
    let currentCenterIndex = 0;
    let scrollProgress = 0;

    const imagesPaths = [
    `${base}/otherprojects/project1.JPG`,
    `${base}/otherprojects/project2.JPG`,
    `${base}/otherprojects/project3.JPG`,
    `${base}/otherprojects/project4.jpeg`,
    `${base}/otherprojects/project5.jpg`,
    `${base}/otherprojects/project6.jpg`,
    `${base}/otherprojects/project7.jpg`
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

    onMount(() => {
        setTimeout(() => {
            if (scrollContainer) {
                images = Array.from(scrollContainer.querySelectorAll('img'));
                Promise.all(images.map(img => img.complete ? Promise.resolve() : new Promise(res => img.onload = res)))
                    .then(() => {
                        scrollToImage(0);
                    });
            }
        }, 0);
    });
</script>

<div transition:fade>
    <h2>OTHER PROJECTS</h2>

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
                />
            {/each}
        </section>

        <button class="scroll-button right" on:click={scrollRight}>&gt;</button>
    </div>

    <!-- Scrollbar -->
    <input 
        type="range" 
        min="0" 
        max="100" 
        bind:value={scrollProgress} 
        class="scrollbar"
        on:input={handleScrollbarInput}
    />
</div>



<style>
:global(body.dark) .scrollbar{
    background: #eae0dc;
}

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
    padding: 0 calc(50% - 70px);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    height: 420px;
    align-items: center;
}

.artwork-gallery::-webkit-scrollbar {
    display: none;
}

.artwork-gallery img {
    height: 250px;
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



/* Scrollbar Styling */
.scrollbar {
    width: 80%;
    margin: 1rem auto 0 auto;
    display: block;
    -webkit-appearance: none;
    appearance: none;

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

@media (max-width: 1424px) {
    .artwork-gallery {
        padding: 0 calc(50% - 50px);
        gap: 20px;
        height: 320px;
    }

    .artwork-gallery img {
        height: 180px;
    }

    .artwork-gallery img.center {
        height: 260px;
    }

    .scroll-button {
        font-size: 1.5rem;
        padding: 6px 12px;
    }

    .scrollbar {
        width: 90%;
    }
}

@media (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
        padding: 0 1.5rem;
    }

    .artwork-gallery {
        padding: 0 calc(50% - 50px);
        gap: 16px;
        height: 260px;
    }

    .artwork-gallery img {
        height: 140px;
    }

    .artwork-gallery img.center {
        height: 200px;
    }

    .scroll-button {
        font-size: 1.2rem;
        padding: 4px 10px;
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 1.3rem;
        padding: 0 1rem;
    }

    .artwork-gallery {
        padding: 0 calc(50% - 50px);
        gap: 12px;
        height: 200px;
    }

    .artwork-gallery img {
        height: 100px;
    }

    .artwork-gallery img.center {
        height: 150px;
    }

    .scroll-button {
        font-size: 1rem;
        padding: 3px 8px;
    }

    .scrollbar {
        width: 95%;
    }
}
</style>
