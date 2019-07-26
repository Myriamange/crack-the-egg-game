let title;
let instruction;
let input;
let submitBtn;
let acceptanceMsg;
let acceptanceImg;

let positiveColor="#3BCF10";
let negativeColor="#b22222";
 
title=document.createElement("h1");
title.textContent="driver License Permit Application";

instructions=document.createElement("p");
instructions.textContent="Enter yoour age";

input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name","age");

submitBtn=document.createElement("button");
submitBtn.setAttribute("type","submit");
submitBtn.textContent="submit application";
submitBtn.addEventListener("click",submitAplication);

acceptanceMsg=document.createElement("p");
acceptanceMsg.textContent="you nedd to submit your age before any result";
acceptanceMsg.style="color:#ECD61B";

 acceptanceImg=document.createElement("img");
 acceptanceImg.setAttribute("alt","not yet an image available");

 function(){
 	alert("yes i recieved your application");
 	let userage=input.value;
 	if (userage<=15){
 		acceptanceMsgtextContent="sorry, we cannot issue you a driver license";
 		acceptanceMsg.style="color:"+nagativeColor;
 		acceptanceImg.setAttribute("src","image/sad.svg");

 	}
 else{
 	acceptanceMsgtextContent="congratulation,your application is approved";
 	acceptanceMsg.style="color:"+positiveColor;
 	acceptanceImg.setAttribute("src","image/smiling.svg");


 }

document.body.appendChild(title);
document.body.appendChild(instructions);
document.body.appendChild(input);
document.body.appendChild(submitBtn);
document.body.appendChild(acceptanceMsg);
document.body.appendChild(acceptanceImg);
