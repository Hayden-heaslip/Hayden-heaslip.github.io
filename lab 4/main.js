//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const StoryText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertx = ["Willy the Goblin","Big Daddy","Father Christmas"]

const inserty = ["the soup kitchen","Disneyland","the White House"]

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  const newStory = StoryText
  const para = document.createElement("p");
  const xitem = randomValueFromArray(insertx)
  const yitem = randomValueFromArray(inserty)
  const zitem = randomValueFromArray(insertz)
  newStory.replace(":insertx:", xitem)
  newStory.replace(":inserty:", yitem)
  newStory.replace(":insertz:", zitem)
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
  if(customName.value !== '') {
    const name = customName.value;
    newStory.replace("bob", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.4286);
    const temperature =  Math.round(94);

  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}