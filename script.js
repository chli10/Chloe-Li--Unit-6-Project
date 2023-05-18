// Declare your genre arrays here
let dramas = [
"https://asianwiki.com/images/e/e5/The_Glory-p2.jpg","https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"];
let dramaBox = document.querySelector(".dramas");
for (let drama of dramas) {
	let img = "<img src=" + drama + ">";
    dramaBox.insertAdjacentHTML ("beforeend", img);
}


let comedies = [
"https://flxt.tmsimg.com/assets/p184338_b_v13_aq.jpg",
"https://flxt.tmsimg.com/assets/p7893510_b_v13_ab.jpg",
"https://www.cleveland.com/resizer/opMMdXiOio0iPspiJDuvfXH5MAo=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LGCO4GRDUBHW5O335IRSRFBS6I.jpg"
];
let comedyBox = document.querySelector(".comedies");
for (let comedy of comedies) {
	let img = "<img src=" + comedy + ">";
    comedyBox.insertAdjacentHTML ("beforeend", img);
}
let thrillers = [
"https://flxt.tmsimg.com/assets/p8838315_b_v8_aa.jpg",
"https://theaggie.org/wp-content/uploads/2023/01/aliceinborderland_ar.jpg",
"https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg"
];
let thrillerBox = document.querySelector(".thrillers");
for (let thriller of thrillers) {
	let img = "<img src=" + thriller + ">";
    thrillerBox.insertAdjacentHTML ("beforeend", img);
}


// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");

// Submit Button 
let submitButton = document.querySelector(".submitButton"); 
submitButton.onclick = function() {
  let input = document.querySelector(".genreInput").value;
    if (input === "drama"){
    dramaBox.style.display="block";}
    else if (input === "comedy"){
    comedyBox.style.display="block";}
    else if (input === "thriller"){
    thrillerBox.style.display="block";}
    
};
let shows=[];
let suggestButton = document.querySelector(".suggestButton");
suggestButton.onclick = function(){
	let suggestInput=document.querySelector(".suggestInput").value;
    shows.push(suggestInput);
    console.log(shows);
};

