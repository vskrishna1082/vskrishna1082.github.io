dead_div = document.getElementById("dead-cat");
living_div = document.getElementById("living-cat");

if (Math.random()<=0.25) {
dead_div.style.display = "none";
living_div.style.display = "inline";
}
