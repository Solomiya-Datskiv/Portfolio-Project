<script>
	import { Navigation } from "$lib";
  // import base to prefix local paths
    import { base } from '$app/paths';

    
	let checked = false;
	let themeIcon = `${base}/LightModeSign.png`; // default icon

	function toggleTheme() {
		checked = !checked;
		document.body.classList.toggle("dark", checked);
        themeIcon = checked ? `${base}/MoonIcon.png` : `${base}/LightModeSign.png`;
	}
</script>


<header>
	<Navigation />

	<div class="theme-toggle">
		<img src={themeIcon} alt="Theme Icon" class="theme-icon" />
		<input type="checkbox" id="themeSwitch" on:change={toggleTheme} />
		<label for="themeSwitch"></label>
	</div>
</header>


<style>


    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50px;
        padding: 0.5rem 1.6rem;
        margin: 20px auto;
        max-width: 90%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    /* Theme Toggle */
    .theme-toggle {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .theme-toggle input {
        display: none;
    }

    .theme-toggle label {
        width: 40px;
        height: 20px;
        background: #acacac;
        border-radius: 10px;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    .theme-toggle label::after {
        content: "";
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 1px;
        left: 2px;
        transition: 0.3s;
    }

    .theme-toggle input:checked + label {
        background: black;
    }

    .theme-toggle input:checked + label::after {
        left: 20px;
        background: #fff;
    }
    .theme-icon{
        width: 30px;
		height: 30px; 
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        header {
        background: rgba(255, 255, 255, 0.5);
            padding: 0.3rem 1rem;
            margin: 10px auto;
            border-radius: 30px;
        }

        .theme-toggle {
            order: 3;
        }
        img{
            scale: 0.8;
        }

	.theme-toggle {
		gap: 10px;
	}


    }
</style>