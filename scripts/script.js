
// Clicking on Navbar elements
document.addEventListener('DOMContentLoaded',
	function () {
		const navItems = document
			.querySelectorAll('.nav-item');

		navItems.forEach(item => {
			item.addEventListener('click',
				function () {
					navItems.forEach(navItem => navItem
						.classList.remove('active'));
					this.classList.add('active');
				});
		});
	});

// changing the colour of the navbar as one scrolls
document.addEventListener('scroll',
	function (){
		const navbar = document.querySelector('.navbar');

		if(scrollY > 0){
			navbar.classList.add('scrolled');
		}else{
			navbar.classList.remove('scrolled');
		}
	})