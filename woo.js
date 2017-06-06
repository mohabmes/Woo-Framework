
showSlide(0);
showTab(0);

/********************************************
slideshow
********************************************/

function showSlide(n){
	var slides = document.getElementsByClassName('slide');
	var dots = document.getElementsByClassName('dot');
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" fade", "");
  	}
  	for (i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[n].style.display = "block";
	slides[n].className += " fade";
	dots[n].className += " active";
}

/********************************************
Tabs
********************************************/
function showTab(n){
	var tabs = document.getElementsByClassName('tabcontent');
	var icon = document.getElementsByClassName('tabicon');
	for (i=0; i<tabs.length; i++){
		 tabs[i].style.display="none";
		 icon[i].className= icon[i].className.replace(" active","");
		 tabs[i].className = tabs[i].className.replace(" fade", "");
	}
	for (i=0; i<icon.length; i++){
		 
	}
	tabs[n].style.display = "block";
	tabs[n].className += " fade";
	icon[n].className +=" active";
}
/********************************************
Accordion
********************************************/
var accordion = document.getElementsByClassName('accordion');
var panel = document.getElementsByClassName('content');
for (i = 0; i < accordion.length; i++){ 
	panel[i].style.display="none";
	accordion[i].onclick = function(){
		var nS = this.nextElementSibling;
		if( nS.style.display=="none"){
			nS.style.display="block";
			nS.className += " animationMove";
			this.className += " active";
		}
		else{ 
			nS.style.display="none";
			nS.className = nS.className.replace(" animationMove", "");
			this.className = this.className.replace(" active","");
		}
	}
}



/********************************************
modal Box
********************************************/

var modal = document.getElementById('modal');
var btn = document.getElementById('modal-btn');
btn.onclick = function(){
	modal.style.display="block";
}

/********************************************
Image Box
********************************************/
var imgmodal = document.getElementById('img-modal');
var imgbtn = document.getElementById('img-modal-btn');
imgbtn.onclick = function(){
	imgmodal.style.display="block";
	imgmodal.lastElementChild.innerHTML=imgmodal.childNodes[1].alt;
}

/********************************************
Gallery
********************************************/
function gallery(n){
	var g = document.getElementById('gallery');
	var gmodal = document.getElementById('gallery-modal');
	var gmodalimg = document.getElementById('gallery-img');
	var gcap = document.getElementById('gallery-modal');
	gmodal.style.display = "block";
	n*=2;
	n++;
	gmodalimg.src=g.childNodes[n].src;
	gcap.lastElementChild.innerHTML= g.childNodes[n].alt;
}
var ss=0;
function galleryshow(n){
	var g = document.getElementById('gallery').childNodes.length;
	ss=ss+n;
	if(ss<0 || ss>(g/2)-1){ss=0;}
	
	gallery(ss);
}
//To Close modals 
window.onclick = function(event) {
	var modal = document.getElementById('modal');
	var imgmodal = document.getElementById('img-modal');
	var gmodal = document.getElementById('gallery-modal');
	if (event.target == modal) {
		modal.style.display = "none";
	}
	else if (event.target == imgmodal) {
		imgmodal.style.display = "none";
	}
	else if(event.target == gmodal){
		gmodal.style.display = "none";
	}
}
/********************************************
Dropdowns
********************************************/
function showdropdown(){
	var btndd = document.getElementById('dropdown-btn');
	btndd.classList.toggle("show");
	
}
/********************************************
Snackbar
********************************************/
function showSnackbar(){
	var sb = document.getElementById('snackbar');
	sb.className+=" show";
	setTimeout( function(){sb.className = sb.className.replace(" show", "");}, 3000);
}