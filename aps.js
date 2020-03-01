const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greeting = [
  "rati rati ",
  "Doing good homeboi",
  "leave me alone ",
  "xachapuri "
];
const weather = ["weather is fine"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is activated,you can to nicrophoee");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutloud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutloud(massage) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I dnot know what you said";

  if (massage.includes("how are you")) {
    const finaltext = greeting[Math.floor(Math.random(greeting.length))];
    speech.text = finaltext;
    console.log(finaltext);
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
