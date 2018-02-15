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
	
	<p>Floral background <a href="https://www.freepik.com/free-vector/abstract-floral-background_789164.htm">Designed by Freepik</a></p>
	
	<p>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> and <a href="http://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
	
	<p>&copy; TutorHouse</p>
`;

footer.innerHTML = footerHTML;