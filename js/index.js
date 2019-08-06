const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// ****Nav Bar***

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// created roundLogo selected cta-img through DOM and set attribute to img-src value of img/header.png
const roundLogo = document.getElementById('cta-img');
roundLogo.setAttribute('src', siteContent['cta']['img-src']);

//created value of anchor and assigned to siteContent.nav value, selected all a href links and assigned to value of anchor, used forEach to execute function that moved through array
//nav and printed nav-item-1 through 6 created text content to generate anchor link values needed for href links
const anchor = siteContent['nav'];
const navBar = document.querySelectorAll('a');
navBar.forEach(function(item, i) {
	item.textContent = anchor[`nav-item-${i + 1}`];
	item.style.color = 'green';
});

//Assignment of value to append and prepend navigation bar
const navigationModify = document.querySelector('nav');

//First Prepended Nav Link
const teamPageLink = document.createElement('a');
teamPageLink.textContent = 'Team Info';
teamPageLink.setAttribute('href', '#');
teamPageLink.style.color = 'green';

//Second appended Nav Link
const gitHubLink = document.createElement('a');
gitHubLink.textContent = 'Our Code!';
gitHubLink.setAttribute('href', '#');
gitHubLink.style.color = 'green';

//Prepend and append navBar using navigationModify
navigationModify.prepend(teamPageLink);
navigationModify.append(gitHubLink);
//*** Header ***

const ctaText = document.querySelector('h1');
ctaText.innerHTML = 'DOM <br> Is <br> Awesome';

const coolBtn = document.querySelector('button');
coolBtn.textContent = 'Get Started';

coolBtn.style.color = 'blue';

// Top Body Section Headings
const topContentHeading = document.querySelectorAll('.top-content h4');

console.log(topContentHeading);

topContentHeading[0].textContent = siteContent['main-content']['features-h4'];
topContentHeading[1].textContent = siteContent['main-content']['about-h4'];

// Top Body Section Paragraphs
const topContentText = document.querySelectorAll('.top-content p');
console.log(topContentText);

topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

//Middle image stretching across center of page content
const topContentImg = document.getElementById('middle-img');
topContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Lower Body Section Headings
const bottomContentHeading = document.querySelectorAll('.bottom-content h4');
console.log(bottomContentHeading);

bottomContentHeading[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeading[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeading[2].textContent = siteContent['main-content']['vision-h4'];

// Lower Body Section Paragraphs
const bottomParagraphText = document.querySelectorAll('.bottom-content p');
console.log(bottomParagraphText);

bottomParagraphText[0].textContent = siteContent['main-content']['services-content'];
bottomParagraphText[1].textContent = siteContent['main-content']['product-content'];
bottomParagraphText[2].textContent = siteContent['main-content']['vision-content'];

//Contact Info Heading
const contactInfoHeader = document.querySelectorAll('.contact h4');
contactInfoHeader[0].textContent = siteContent['contact']['contact-h4'];

//Contact Information
const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];
//Footer Content
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];
