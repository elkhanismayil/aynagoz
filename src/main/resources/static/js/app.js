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

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let navbar_height;
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar-dark').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

// $(window).on('load', function () {
//     $('#loading').hide();
// });