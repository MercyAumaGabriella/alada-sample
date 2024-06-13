
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

// submitting credentials for the newsletter
let subscribingForm = document.getElementById('subscribe-form');

subscribingForm.addEventListener('submit', (e) =>{
	e.preventDefault();

	let fname = document.getElementById('text-input');
	let email = document.getElementById('email-input');

	if(fname == "" || email == "" ){
		alert("Ensure you put values in both fields");
	}else{
		alert("Your information has successfully been submitted");
		console.log(`${fname.value} has subscribed to your newsletter under the email: ${email.value}`);

		fname.value = "";
		email.value = "";
	}
})
