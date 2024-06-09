// Ensure the original SVG element exists
var originalSvg = document.getElementById('svgStar');
// Get the container divs
var containers = [
    document.getElementById('star-review-1'),
    document.getElementById('star-review-2'),
    document.getElementById('star-review-3')
];

// Loop to create and append duplicates
for (var i = 0; i < containers.length; i++) {
    for (var j = 0; j < 5; j++) { // Append 5 SVGs to each container
        // Clone the original SVG element
        var svgStar = originalSvg.cloneNode(true);

        // Change the ID to avoid duplicates
        svgStar.id = 'svgStar' + (i * 5 + j + 1);

        console.log(svgStar.outerHTML + " test");

        // Optionally modify attributes or content of the cloned SVG element

        // Append the cloned SVG to the container
        containers[i].appendChild(svgStar);
    }
}