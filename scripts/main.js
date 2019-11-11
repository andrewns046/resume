/*sections to load*/
var sections = [ {sectionName:"objective", sectionSelector:"#objective", isLoaded:false}, 
			     {sectionName:"education" ,sectionSelector:"#education", isLoaded:false},
			     {sectionName:"experience" ,sectionSelector:"#experience", isLoaded:false},
			     {sectionName:"projects", sectionSelector:"#projects", isLoaded:false},
			     {sectionName:"skills" , sectionSelector:"#skills", isLoaded:false},
			     {sectionName:"associations", sectionSelector:"#associations", isLoaded:false}];

const numSections = 6;
const logoName = "Andrew Sanchez";
var numHolders = 6;  // number of section holders to load.
var nextScrollY = 0;

// when document is ready
$(document).ready(function(){
	var isMobile = false;
	// make svg logo
	makeLogo();

	// Load pages under list items if on mobile
	if (typeof window.orientation !== 'undefined') {
		isMobile = true;
	}

	//prepare first scroll
	nextScrollY = $(".jumbotron").outerHeight(true);

	// add nav click listeners
	var i = 0;
	for(i = 0; i < sections.length; i++) {
		addNavListener(sections[i], isMobile);
	}

	$("#contact-link").click(function() {$("#contact-info").fadeIn(1000);});
});

/*
 * adds listeners to nav buttons
 * Arguments:
 *     sectionObject - (Object) Contains section information
 *     isMobile - (Boolean) If true sections will be added as a new nav item, otherwise section is
 *                          added to placeholder
 */
function addNavListener( sectionObject, isMobile ) {
	// query nav section list item
	$(sectionObject.sectionSelector+"-link").click(function() {
		if(sectionObject.isLoaded == false) {  // if section is not loaded
			sectionObject.isLoaded = cardLoad(sectionObject.sectionName, sectionObject.sectionSelector, isMobile);
		} else { 
			location.href = "#";
			location.href = sectionObject.sectionSelector;
		}		
	});
}

/*
 * loads html pages in bootstrap cards in the order they were requested
 * Arguments:
 *     sectionName - (String) name of section. (ex objective, education, ...)
 *     sectionSelector - (String) #sectionName
 *     isMobile - (Boolean) If true sections will be added as a new nav item, otherwise section is
 *                          added to placeholder
 */
function cardLoad(sectionName , sectionSelector, isMobile ) {
	var loadLocator = "";
	var sectionHTMLPath = "../" + sectionName +".html " + sectionSelector;
	if( isMobile == true) {
		//create new list item after section link 
		$(sectionSelector+"-link").after("<div id='mobile-section-" + sectionName +"'></div>");
		$("#mobile-section-"+sectionName).load(sectionHTMLPath);
	}
	else {
		var result = numSections - numHolders;
		loadLocator = "#holder"+result;
		numHolders = numHolders - 1;  //update sections left
		$(loadLocator).load(sectionHTMLPath, function(){
			// once loaded fade in section
			$(loadLocator).fadeIn(2000);
			//scroll window past current section
			$("html, body").animate({ scrollTop: nextScrollY }, "slow");
			nextScrollY += ($(sectionSelector).outerHeight(true) + 40);
		});

		$(loadLocator).after("<br>");
	}

	return true;
}

// Dynamically draws logo
function makeLogo() {
	var widthNav = $("#navList").outerWidth(true);
	var sf = scaleFactor( 320, widthNav);
	var height = 71*sf;
	var yText = 49*sf;
	sf = scaleFactor( 71, height);
	var sWidth = 18*sf;
	var xText = 9*sf
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

	$("#navList").before(svgHTML);

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
