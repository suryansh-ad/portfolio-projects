const socials = document.getElementById('socials');
const lines = document.querySelectorAll(" #line");

socials.addEventListener("mouseenter", function(e) {
    lines.forEach(function(line) {
        line.style.height = '50%';
    });
});

socials.addEventListener("mouseleave", function(event) {
    lines.forEach(function(line) {
        line.style.height = '';
    });
});

const areaofplay = document.getElementById("areaofplay");
const areaofplay2 = document.getElementById("areaofplay2")
const myvideo =  document.getElementById("myvideo")
const myvideo2 =  document.getElementById("myvideo2")
areaofplay.addEventListener("mouseenter",playvid)
areaofplay.addEventListener("mouseleave",pausevid)
areaofplay2.addEventListener("mouseenter",playvid2)
areaofplay2.addEventListener("mouseleave",pausevid2)
function playvid()
{
    myvideo.play();
}
function pausevid()
{
    myvideo.pause();
}
function playvid2()
{
    myvideo2.play();
}
function pausevid2()
{
    myvideo2.pause();
}