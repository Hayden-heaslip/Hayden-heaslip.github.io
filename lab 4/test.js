const StoryText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertx = ["Willy the Goblin","Big Daddy","Father Christmas"]

const inserty = ["the soup kitchen","Disneyland","the White House"]

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function result() {
    let newStory = StoryText
    return newStory;
}
console.log(result());