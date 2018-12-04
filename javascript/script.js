var sortButton = document.getElementById("sort-button");
var sortForm = document.getElementById("sort-form");

sortButton.addEventListener("click", function() {
    sortForm.classList.toggle("clicked");
});

var filter = document.getElementById("filter-button");
var filterForm = document.getElementById("filter-form");

filter.addEventListener("click", function() {
    filterForm.classList.toggle("clicked");
});
