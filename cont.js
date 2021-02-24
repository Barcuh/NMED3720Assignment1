alert("Click anywhere on the page.");

var counter = 0;

document.addEventListener("click", function () {
    counter = counter + 1;
    console.log(counter);
    var items = Array(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11);

    var randomItem = items[Math.floor(Math.random() * items.length)];
    if (counter == 3) {
        playAudio();
        counter = 0;
    }

    function playAudio() {
        console.log(randomItem, items[randomItem]);
        randomItem.play();
    }
});

var audio1 = new Audio(chrome.runtime.getURL("ILikeTurtles.mp3"));
var audio2 = new Audio(chrome.runtime.getURL("MyNameisJeff.mp3"));
var audio3 = new Audio(chrome.runtime.getURL("PewDiePie.mp3"));
var audio4 = new Audio(chrome.runtime.getURL("SkrrtSkrrt.mp3"));
var audio5 = new Audio(chrome.runtime.getURL("Spongebob2HoursLater.mp3"));
var audio6 = new Audio(chrome.runtime.getURL("WatchYourProfanity.mp3"));
var audio7 = new Audio(chrome.runtime.getURL("WeveGotABadassOverHere.mp3"));
var audio8 = new Audio(chrome.runtime.getURL("WhatAreThose.mp3"));
var audio9 = new Audio(chrome.runtime.getURL("WhyAreYouRunning.mp3"));
var audio10 = new Audio(chrome.runtime.getURL("Worldstar.mp3"));
var audio11 = new Audio(chrome.runtime.getURL("Wow.mp3"));