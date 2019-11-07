/*sections to load*/
var sections = [ {sectionName:"objective", sectionSelector:"#objective", isLoaded:false}, 
			     {sectionName:"education" ,sectionSelector:"#education", isLoaded:false},
			     {sectionName:"experience" ,sectionSelector:"#experience", isLoaded:false},
			     {sectionName:"projects", sectionSelector:"#projects", isLoaded:false},
			     {sectionName:"skills" , sectionSelector:"#skills", isLoaded:false},
			     {sectionName:"associations", sectionSelector:"#associations", isLoaded:false}];

var numHolders = 6;  // number of section holders to load.

// when document is ready
$(document).ready(function(){
	var isMobile = false;

	// Load pages under list items if on mobile
	if (typeof window.orientation !== 'undefined') {
		isMobile = true;
	}

	// add nav click listeners
	var i = 0;
	for(i = 0; i < sections.length; i++) {
		addNavListener(sections[i], isMobile);
	}

	// contact info
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
		}		
	});

	//TODO save y positions of pages loaded on window make a scroll listener 
	//that highlights the current section
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
		$(sectionSelector+"-link").after("<li id='mobile-section-" + sectionName +"'></li>");
		$("#mobile-section-"+sectionName).load(sectionHTMLPath);
	}
	else {
		var result = 6 - numHolders;
		loadLocator = "#holder"+result;
		numHolders = numHolders - 1;  //update sections left
		$(loadLocator).load(sectionHTMLPath, function(){
			// once loaded fade in section
			$(loadLocator).fadeIn(1000);
		});
		$(loadLocator).after("<br>");
	}

	return true;
}

/*
 * Fades in borders clockwise
 * Arguments:
 *     selector - (String) CSS selector
 */
function borderAnimation( selector ) {

}

