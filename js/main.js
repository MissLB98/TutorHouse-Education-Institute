//js

/*MENU

const header = document.getElementById('header');
let headerHTML = `
	<ul id="menu">
		<a href="index.html"><li>Home</li></a>
		<a href="services.html"><li>Services</li></a>
		<a href="contact.html"><li>Contact</li></a>
	</ul>
	
	<img id="logo" src="img/logo.jpg" alt="logo"/>
	
	<div>
		<h2 class="sub-heading">Educational Institution in Bellville</h2>
		<a class="call" href="tel:0218243336">CALL: 021 824 3336</a>
	</div>
	<h1 class="sub-heading-2">We specialize in Home Schooling, Tutoring and After Care for Grade R to Grade 12.</h1>
`;
header.innerHTML = headerHTML;
*/

//google map

function initMap() {
	var uluru = {lat: -33.889757, lng: 18.634406};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}





//FOOTER
const footer = document.getElementById('footer');
let footerHTML = `
	<a class="call" href="tel:0218243336">CALL: 021 824 3336</a>
	<p>&copy; TutorHouse</p>
`;

footer.innerHTML = footerHTML;