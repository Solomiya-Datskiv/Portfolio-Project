<script lang="ts">
	import { base } from '$app/paths';


	import { page } from '$app/stores';
	import MobileMenu from '$lib/components/Menu.svelte';

	let menuOpen = false;

	function closeMenu() {
		menuOpen = false;
	}

	// Get the current path
	$: currentPath = $page.url.pathname;

	// Convert pathname to readable page label
	$: currentPageLabel = (() => {
		switch (currentPath) {
			case '/about': return 'ABOUT';
			case '/works': return 'WORKS';
            case '/painting': return 'WORKS';
			case '/drawing': return 'WORKS';
			case '/digitalart': return 'WORKS';
			case '/otherprojects': return 'WORKS';
			case '/contact': return 'CONTACT';
			case '/': return ''; // Showing logo on homepage
			default: return '';
		}
	})();
</script>

<nav class="nav">
	<ul>
		<!-- Left: Menu Button -->
		<li><button class="menu-btn" on:click={() => menuOpen = true}>☰</button></li>

		<!-- Mobile Center Title -->
				<!-- Center: Mobile Page Label or Logo with Selector -->
                <li class="mobile-center">
                    {#if currentPath === '/'}
                        <a href="{base}/" class="nav-item selected">
                            <img src="{base}/website-logo.png" alt="Logo" class="mobile-logo" />
                        </a>
                    {:else}
                        <span class="nav-item selected">{currentPageLabel}</span>
                    {/if}
                </li>

		<!-- Logo -->
		<li class="logo-container">
			<a href="{base}/" class="nav-item logo {currentPath === '/' ? 'selected' : ''}">
				<img src="{base}/website-logo.png" alt="Website Logo" />
			</a>
		</li>

		<!-- Desktop Center Links -->
		<div class="center-links">
			<li><a href="{base}/about" class="nav-item {currentPath === '/about' ? 'selected' : ''}">ABOUT</a></li>
			<li><a href="{base}/works" class="nav-item {currentPath === '/works' ? 'selected' : ''}">WORKS</a></li>
			<li><a href="{base}/contact" class="nav-item {currentPath === '/contact' ? 'selected' : ''}">CONTACT</a></li>
		</div>
	</ul>

	<!-- Mobile Overlay Menu -->
	<MobileMenu {menuOpen} {closeMenu} />
</nav>

<style>
	.nav {
		font-family: 'Cherry Cream Soda', cursive;
		font-size: 1.2rem;
		width: 100%;
		position: relative;
        
	}

    .nav-item:hover,
    	.logo:hover {
            filter: drop-shadow(0 2px 10px darkred);
    }

	.nav ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		position: relative;
	}

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

	.center-links {
		display: flex;
		justify-content: center;
		flex-grow: 1;
		gap: 60px;
		position: relative;
	}

	.nav-item {
		position: relative;
		text-decoration: none;
		color: black;
		padding: 10px 20px;
		transition: color 0.3s ease;
	}

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
		opacity: 0.1;
	}

	.nav-item.selected::before,
	.logo.selected::before {
		transform: translate(-50%, -50%) scale(1.5);
		opacity: 1;
	}

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

	/* Centered Mobile Page Label / Logo */
	.mobile-center {
		display: none; /* Hidden on desktop */
		position: static;
		padding-top: 5%;
		pointer-events: none;
	}

	.mobile-logo {
		width: 40px;
		pointer-events: auto;
	}

    .nav ul {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative; /* for absolute children */
	width: 100%;
	padding: 0;
	margin: 0;
	list-style: none;
}


	/* Responsive Styles */
    /* Tablet Landscape and Large Phones */
    @media (max-width: 1024px) and (min-width: 769px) {
        .nav-item.selected,
	    .logo.selected {
        background: none;

	}

    .nav {
            font-size: 0.9em;
        }
    }

	@media (max-width: 768px) {

        
        .nav-item.selected,
	    .logo.selected {
        background: none;

	}

		.center-links {
			display: none;
		}

		.logo-container {
			display: none;
		}

		.mobile-center {
			display: block;
		}

		.menu-btn {
			font-size: 1.8rem;
		}
        .mobile-center {
		display: block;
		position: absolute;
		left: 50%;
		text-align: center;
		pointer-events: none;
	}

	.mobile-center .nav-item {
		pointer-events: auto;
	}

	}

	@media (max-width: 480px) {
        .nav {
            font-size: 0.9em;
        }

		.menu-btn {
			font-size: 1.6rem;
		}
		.mobile-logo {
			width: 35px;
		}
	}
</style>
