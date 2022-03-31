
document.getElementById('poct').addEventListener('mouseover', mouseOver);
document.getElementById('poct').addEventListener('mouseout', mouseOut);
document.getElementById('info').addEventListener('mouseover', mouseOver);
document.getElementById('info').addEventListener('mouseout', mouseOut);

document.getElementById('phone1').addEventListener('mouseover', mouseOverPhone);
document.getElementById('phone1').addEventListener('mouseout', mouseOutPhone);
document.getElementById('phone2').addEventListener('mouseout', mouseOutPhone);
document.getElementById('phone2').addEventListener('mouseover', mouseOverPhone);

document.getElementById('loc1').addEventListener('mouseover', mouseOverLoc);
document.getElementById('loc1').addEventListener('mouseout', mouseOutLoc);
document.getElementById('loc2').addEventListener('mouseover', mouseOverLoc);
document.getElementById('loc2').addEventListener('mouseout', mouseOutLoc);

function mouseOver() {
    document.getElementById('poct').style.color = "red";
    document.getElementById('info').style.color = "red";
}

function mouseOut() {
    document.getElementById('poct').style.color = "black";
    document.getElementById('info').style.color = "black";
}

function mouseOverPhone() {
    document.getElementById('phone1').style.color = "red";
    document.getElementById('phone2').style.color = "red";
}

function mouseOutPhone() {
    document.getElementById('phone1').style.color = "black";
    document.getElementById('phone2').style.color = "black";
}

function mouseOverLoc() {
    document.getElementById('loc1').style.color = "red";
    document.getElementById('loc2').style.color = "red";
}

function mouseOutLoc() {
    document.getElementById('loc1').style.color = "black";
    document.getElementById('loc2').style.color = "black";
}
// first a tag change
let cngColor = document.getElementById('changeColor');
cngColor.addEventListener('mouseover', function handleMouseOver() {
    cngColor.style.color = 'aqua'
});

cngColor.addEventListener('mouseout', function handleMouseOut(){
    cngColor.style.color = 'white'
})
// second a tag change
let cngColorDrop = document.getElementById('changeColorDrop');
cngColorDrop.addEventListener('mouseover', function handleMouseOver() {
    cngColorDrop.style.color = 'aqua'
});

cngColorDrop.addEventListener('mouseout', function handleMouseOut(){
    cngColorDrop.style.color = 'white'
})

