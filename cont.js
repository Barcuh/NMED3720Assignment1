//alert("Click anywhere on the page to test playing audio from an extension.")

var counter = 0;

document.addEventListener("click", function () {
    counter = counter + 1;
    console.log(counter);
    if (counter == 3) {
        playAudio();
        counter = 0;
    }
});


function playAudio() {
    var myAudio = new Audio(chrome.runtime.getURL("note.mp3"));
    myAudio.play();
}

//https://stackoverflow.com/questions/51572489/playing-sound-on-click-event-with-pure-javascript
//https://stackoverflow.com/questions/27496465/how-can-i-play-sound-in-a-chrome-extension


//document.addEventListener('click', () => {
//    let url = chrome.runtime.getURL('note.mp3')
//    console.log(url)
//
//    let a = new Audio(url)
//    a.play()
//})
