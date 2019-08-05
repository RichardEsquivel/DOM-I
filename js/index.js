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
});

//*** Header ***

const ctaText = document.querySelector('h1');
ctaText.innerHTML = 'DOM <br> Is <br> Awesome';

const coolBtn = document.querySelector('button');
coolBtn.textContent = 'Get Started';

coolBtn.style.color = 'blue';

const topContentHeading = document.querySelectorAll('.top-content h4');

console.log(topContentHeading);

topContentHeading[0].textContent = siteContent['main-content']['features-h4'];
topContentHeading[1].textContent = siteContent['main-content']['about-h4'];

const topContentText = document.querySelectorAll('.top-content p');
console.log(topContentText);

topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

const topContentImg = document.getElementById('middle-img');
topContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// 'main-content': {
//   'features-h4': 'Features',
//   'features-content':
//     'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
//   'about-h4': 'About',
//   'about-content':
//     'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
//   'middle-img-src': 'img/mid-page-accent.jpg',
//   'services-h4': 'Services',
//   'services-content':
//     'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
//   'product-h4': 'Product',
//   'product-content':
//     'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
//   'vision-h4': 'Vision',
//   'vision-content':
//     'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// },
