<script lang="ts">
    import { page } from '$app/stores';  

    let isOpen = false;
    $: currentPath = $page.url.pathname;
</script>

<nav class="nav">
    <ul class:open={isOpen}>
        <!-- Menu Button (Left) -->
        <li><button class="menu-btn">☰</button></li>

        <!-- Logo (home link) -->
        <li>
            <a href="/" class="nav-item logo {currentPath === '/' ? 'selected' : ''}">
                <img src="/website-logo.png" alt="Website Logo">
            </a>
        </li>

        <!-- Center Links -->
        <div class="center-links">
            <li><a href="/about" class="nav-item {currentPath === '/about' ? 'selected' : ''}">ABOUT</a></li>
            <li><a href="/works" class="nav-item {currentPath === '/works' ? 'selected' : ''}">WORKS</a></li>
            <li><a href="/contact" class="nav-item {currentPath === '/contact' ? 'selected' : ''}">CONTACT</a></li>
        </div>
    </ul>
</nav>

<style>
    .nav {
        font-family: 'Cherry Cream Soda', cursive;
        font-size: 1.2rem;
        width: 100%;
    }

    .nav ul {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        position: relative;
    }

    /* Menu button */
    .menu-btn {
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
    }

    /* Logo */
    .logo img {
        width: 45px;
    }

    /* Center links */
    .center-links {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        gap: 60px;
        position: relative;
    }

    /* Nav items */
    .nav-item {
        position: relative;
        text-decoration: none;
        color: black;
        padding: 10px 20px;
        transition: color 0.3s ease;
    }

    /* Black circle - always visible but scaled down when not active */
    .nav-item::before {
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.2);
        transition: transform 0.4s ease;
        z-index: -1;
        opacity: 0.3;
    }

    /* Selected (active) state - scales up and becomes more visible */
    .nav-item.selected::before,
    .logo.selected::before {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
    }

    /* Highlight active link */
    .nav-item.selected,
    .logo.selected {
        color: white;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0.2);
        transition: transform 0.4s ease;
    }

    .logo.selected {
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .nav ul {
            flex-direction: column;
            background: rgba(255,255,255,0.95);
        }

        .center-links {
            flex-direction: column;
            margin-top: 10px;
        }
    }
</style>