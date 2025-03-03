document.addEventListener("DOMContentLoaded", function () {
    // Select all h2 elements
    const headings = document.querySelectorAll("h2");

    headings.forEach((heading, index) => {
        const sectionId = `section-${index}`;
        heading.setAttribute("data-section-id", sectionId);

        // Create a div to wrap the section content
        const sectionContent = document.createElement("div");
        sectionContent.id = sectionId;
        sectionContent.classList.add("section", "collapsed");

        // Move all elements until the next h2 inside sectionContent
        let nextElement = heading.nextElementSibling;
        while (nextElement && nextElement.tagName !== "H2") {
            const toMove = nextElement;
            nextElement = nextElement.nextElementSibling;
            sectionContent.appendChild(toMove);
        }

        // Insert the sectionContent div after the heading
        heading.parentNode.insertBefore(sectionContent, heading.nextSibling);

        // Add click event to toggle the section
        heading.style.cursor = "pointer";
        heading.addEventListener("click", () => {
            sectionContent.classList.toggle("collapsed");
        });
    });
});

// // Add styles dynamically
// const style = document.createElement("style");
// style.innerHTML = `
//     .collapsed {
//         display: none;
//     }
//     h2 {
//         cursor: pointer;
//         color: blue;
//     }
// `;
document.head.appendChild(style);
