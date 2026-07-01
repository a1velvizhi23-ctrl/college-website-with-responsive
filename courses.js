// Courses Page - Filter by Department
function filterCourses(category, btn){

    // Highlight active filter button
    document.querySelectorAll(".filter-btn").forEach(function(b){
        b.classList.remove("active");
    });
    btn.classList.add("active");

    // Show or hide course cards based on category
    const cards = document.querySelectorAll(".course-card");
    cards.forEach(function(card){
        if(category === "all" || card.dataset.category === category){
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

// Courses Page - View Details
function courseDetails(courseName){
    alert(
        "Course: " + courseName +
        "\nFull syllabus and fee details will be updated soon."
    );
}