/*sections to load*/
var sections = [ {sectionName:"Objective", sectionSelector:"#objective", isLoaded:false}, 
			     {sectionName:"Education" ,sectionSelector:"#education", isLoaded:false},
			     {sectionName:"Experience" ,sectionSelector:"#experience", isLoaded:false},
			     {sectionName:"Projects", sectionSelector:"#projects", isLoaded:true},
			     {sectionName:"Skills" , sectionSelector:"#skills", isLoaded:false},
			     {sectionName:"Associations", sectionSelector:"#associations", isLoaded:false}];

const numSections = 6;
const fadeSpeed = 2000; // two second fades
const logoName = "Andrew Sanchez";
var lastActiveSectionSelector = "#projects";
var toLoad = 6;  // number of sections left to load 


// when document is ready
$(document).ready(function(){
	var isMobile = false;
	
	// make svg logo
	makeLogo();

	// mobile condition
	if (typeof window.orientation !== 'undefined') {
		isMobile = true;
	}

	//add listener to banner
	$("#close-banner-btn").click(function() {
		// remove welcome banner
		$(".welcome-banner").hide(1000);
	});

	// add nav click listeners
	var i = 0;
	for(i = 0; i < sections.length; i++) {
		addNavListener(sections[i]);
	}

	// load launch page
	pageLoad( sections[3] );

});

/*
 * adds listeners to nav buttons
 * Arguments:
 *     sectionObject - (Object) Contains section information
 */
function addNavListener( sectionObject ) {
	// query nav section list item
	$(`${sectionObject.sectionSelector}-link`).click(function() {
		if( lastActiveSectionSelector != sectionObject.sectionSelector) { 
			if(sectionObject.isLoaded == false) {  // if section is not loaded
				sectionObject.isLoaded = pageLoad(sectionObject);
			} else {
				pageTransition(sectionObject);
			}
		}
	});
}

/*
 * Performs animations for nav clicks, once the html is loaded on the DOM.
 * Arguments:
 *     sectionObject - (Object) Contains section information
 */
function pageTransition( sectionObject ) {
	// hide last section
	$(lastActiveSectionSelector).hide('fast');
	lastActiveSectionSelector = sectionObject.sectionSelector;
	// update header
	$(".page-header-text").text(sectionObject.sectionName);
	// show selected section
	$(sectionObject.sectionSelector).fadeIn(fadeSpeed);
	// TODO: highlight selected section in navbar
}


/*
 * loads html pages in the order they were requested
 * Arguments:
 *    sectionObject - (Object) Contains section information
 */
function pageLoad( sectionObject ) {
	var loadLocator = "";
	var sectionHTMLPath = "../" + String(sectionObject.sectionName).toLowerCase() +".html " + sectionObject.sectionSelector;
	var result = numSections - toLoad;
	loadLocator = "#holder" + result;
	toLoad = toLoad - 1;  //update sections left

	$(loadLocator).load(sectionHTMLPath, function(){
		// once loaded fade in section
		$(loadLocator).fadeIn(fadeSpeed);
		pageTransition(sectionObject);
	});

	$(loadLocator).after("<br>");
	
	return true;
}

// Dynamically draws logo
function makeLogo() {
	var widthNav = $("#navList").outerWidth(true);
	// x scales
	var sf = scaleFactor( 320, widthNav);
	var height = 71*sf;
	var yText = 49*sf;  
	
	// y scales
	sf = scaleFactor( 71, height);
	var xText = 9*sf;
	var sWidth = 18*sf;
	
	// x bar locations
	var startX1 = widthNav-(sWidth*3);
	var startX2 = startX1 + sWidth;
	var startX3 = startX2 + sWidth;

	svgHTML = `<svg id="logoCenter" width="${widthNav}" height="${height}">
            <rect width="${startX1}" height="${height}" style="fill:rgb(5,5,5)" />
            <rect x="${startX1}" width="${sWidth}" height="${height}" style="fill:rgb(0,162,229)" />
            <rect x="${startX2}" width="${sWidth}" height="${height}" style="fill:rgb(230,22,16)" />
            <rect x="${startX3}" width="${sWidth}" height="${height}" style="fill:rgb(254,251,100)" />
            <text x="${xText}" y="${yText}" fill="white">${logoName}</text>
            Sorry, your browser does not support inline SVG.
          </svg>`;

	$("#logoContainer").html(svgHTML);

}

/* Scaling helper function
 * Arguments:
 *    lengthRef: (number) reference length of the object you want to scale
 *    lengthTarget: (number) target length
 */
function scaleFactor( lengthRef, lengthTarget ) {
	sf = lengthRef/lengthTarget;
	if( lengthRef > lengthTarget ) {
		return 1/sf;
	} else {
		return sf;
	}
}
