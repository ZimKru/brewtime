
// When the document has loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add an event listener for the "add-malt-button"
  document.getElementById("add-malt-button").addEventListener("click", function() {
    // Get the malt variety and weight
let maltVariety = document.getElementById("malt-variety").value;
let maltVarietyUpper = maltVariety.charAt(0).toUpperCase() + maltVariety.slice(1);
    let maltWeight = document.getElementById("malt-weight").value;

    // Create a new list item element
let maltItem = document.createElement("li");
maltItem.innerHTML = `${maltVarietyUpper} ${maltWeight}g`;
document.getElementById("malt-items").appendChild(maltItem);

    // Add the new list item to the malt items list
    document.getElementById("malt-items").appendChild(maltItem);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener for the "add-hop-button"
    document.getElementById("add-hop-button").addEventListener("click", function() {
        // Get the hop variety, weight and alpha acid
let hopVariety = document.getElementById("hop-variety").value;
let hopVarietyUpper = hopVariety.charAt(0).toUpperCase() + hopVariety.slice(1);
        let hopWeight = document.getElementById("hop-weight").value;
        let hopAlpha = document.getElementById("alpha-acid").value;

let hopItem = document.createElement("li");
hopItem.innerHTML = `${hopVarietyUpper} ${hopWeight}g AA: ${hopAlpha}%`;
document.getElementById("hop-items").appendChild(hopItem);

    // Add the new list item to the malt items list
    document.getElementById("hop-list").appendChild(hopItem);
  });
});

