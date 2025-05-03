<script lang="ts">
	export let menuOpen: boolean;
	export let closeMenu: () => void;
</script>


{#if menuOpen}
	<div class="menu-overlay">
		<button class="close-btn" on:click={closeMenu}>✕</button>

		<nav class="overlay-links">
			<a href="/" on:click={closeMenu}>
				<span>Home</span>
				<img src="/website-logo.png" alt="Logo" class="menu-logo" />
			</a>
			<a href="/about" on:click={closeMenu}>About</a>
			<a href="/works" on:click={closeMenu}>Works</a>

			<!-- Sub-links under works -->
			<div class="sub-links">
				<a href="/painting" on:click={closeMenu}>Painting</a>
				<a href="/drawing" on:click={closeMenu}>Drawing</a>
				<a href="/digitalart" on:click={closeMenu}>Digital Art</a>
				<a href="/otherprojects" on:click={closeMenu}>Other Projects</a>
			</div>

			<a href="/contact" on:click={closeMenu}>Contact</a>
		</nav>
	</div>
{/if}

<style>
.menu-overlay {
		position: fixed;
		inset: 0;
		background: radial-gradient(circle at right, rgba(111, 9, 9, 0.8), #a4b5c3);
		z-index: 1000;
		display: flex;
		flex-direction: column;
		padding-left: 1.5rem;
		animation: slideIn 0.5s ease;
	}

	@keyframes slideIn {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.close-btn {
		align-self: flex-start;
		font-size: 2.5rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	.overlay-links {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 0.1rem;
        margin-left: 6rem;

        font-family: 'Yeseva One', serif;
        font-weight: 100;
		font-size: 4.5rem;
		text-transform: capitalize;
	}

	.overlay-links a {
		text-decoration: none;
		color: black;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.menu-logo {
		width: 50px;
		margin-left: 1rem;
	}

	.sub-links {
		font-size: 1.3rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		margin-left: 12rem;
		font-family: 'Cherry Cream Soda', cursive;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	/* Mobile-specific adjustments */
	@media (max-width: 768px) {

        .close-btn {
		font-size: 1.5rem;
        }

	.menu-logo {
		width: 35px;
	}

        .overlay-links {
		font-size: 2.8rem;
	}

		.overlay-links {
			gap: 1.5rem;
		}
        .sub-links {
		font-size: 1.1rem;
	}
		.sub-links {
			gap: 0.8rem;
			margin-left: clamp(5.5rem, 8vw, 6rem);
		}

		.menu-logo {
			margin-left: 0.5rem;
		}
	}

	/* Very small devices */
	@media (max-width: 480px) {

        .overlay-links {
		font-size: 2rem;
		margin-left: 1rem;
	}
		.overlay-links {
            margin-top: 2rem;
			gap: 1.2rem;
		}

		.sub-links {
            font-size: 0.8rem;
			gap: 0.6rem;
		}
	}

</style>