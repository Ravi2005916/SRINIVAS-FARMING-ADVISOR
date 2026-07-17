function recommend(){

let farmer=document.getElementById("farmer").value;
let crop=document.getElementById("crop").value;
let soil=document.getElementById("soil").value;
let pest=document.getElementById("pest").value;

if(farmer=="" || crop=="" || soil=="" || pest==""){

alert("Please fill all details.");
return;

}

let pesticide="";
let fertilizer="";
let irrigation="";
let tips="";

if(crop=="Rice"){

fertilizer="Urea + DAP";
irrigation="Maintain standing water (2-5 cm).";

if(pest=="Stem Borer"){
pesticide="Cartap Hydrochloride";
tips="Spray in the early morning or evening.";
}

else if(pest=="Brown Plant Hopper"){
pesticide="Imidacloprid";
tips="Avoid excessive nitrogen fertilizer.";
}

else{
pesticide="Consult Agricultural Officer";
tips="Monitor the crop regularly.";
}

}

else if(crop=="Cotton"){

fertilizer="NPK 20:20:20";
irrigation="Water every 6-7 days.";

if(pest=="Aphids"){
pesticide="Thiamethoxam";
tips="Remove heavily infected leaves.";
}

else if(pest=="Whitefly"){
pesticide="Acetamiprid";
tips="Use yellow sticky traps.";
}

else{
pesticide="Consult Agricultural Officer";
tips="Inspect field weekly.";
}

}

else if(crop=="Tomato"){

fertilizer="Vermicompost + NPK";
irrigation="Water every 3-4 days.";

if(pest=="Leaf Spot"){
pesticide="Mancozeb";
tips="Avoid overhead watering.";
}

else{
pesticide="Copper Oxychloride";
tips="Remove infected leaves.";
}

}

else if(crop=="Maize"){

fertilizer="Urea";
irrigation="Water every 5 days.";

if(pest=="Armyworm"){
pesticide="Emamectin Benzoate";
tips="Inspect leaves frequently.";
}

else{
pesticide="Lambda Cyhalothrin";
tips="Keep field weed-free.";
}

}

else if(crop=="Chilli"){

fertilizer="Potash Rich Fertilizer";
irrigation="Every 4 days.";
pesticide="Spinosad";
tips="Maintain field hygiene.";

}

else if(crop=="Groundnut"){

fertilizer="Gypsum + DAP";
irrigation="Every 7 days.";
pesticide="Chlorpyrifos";
tips="Rotate crops every season.";

}

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h2>Hello ${farmer} 👨‍🌾</h2>

<p><b>Crop:</b> ${crop}</p>

<p><b>Soil:</b> ${soil}</p>

<p><b>Pest:</b> ${pest}</p>

<hr>

<p>💊 <b>Pesticide:</b> ${pesticide}</p>

<p>🌿 <b>Fertilizer:</b> ${fertilizer}</p>

<p>💧 <b>Irrigation:</b> ${irrigation}</p>

<p>✅ <b>Tips:</b> ${tips}</p>

`;

}