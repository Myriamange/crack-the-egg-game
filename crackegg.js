let egg=document.getElementById('egg');
egg.addEventListener("click",crack);

let chicken=document.getElementById("chicken");
chicken.addEventListener("click",laidEggs);
let laids=document.getElementById("laid_eggs");

function crack(){
	egg.setAttribute("src","iimage/easter-egg.svg");
}


function laidEggs(){
	new_egg=document.createElement("image");
	new_egg.setAttribute("src","image/easter-egg.svg");
	new_egg.addEventListener("click",crack);

	laids.appendChild(new_egg);
}
	


