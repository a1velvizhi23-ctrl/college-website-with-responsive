// About Page - Animated Stat Counters
function animateStats(){
    const statBoxes = document.querySelectorAll(".stat-box h4");

    statBoxes.forEach(function(box){
        const text = box.textContent.trim();
        const target = parseInt(text.replace(/\D/g, ""), 10);
        const suffix = text.replace(/[0-9]/g, "");

        let current = 0;
        const duration = 1500;
        const steps = 60;
        const increment = target / steps;

        const counter = setInterval(function(){
            current += increment;
            if(current >= target){
                box.textContent = target + suffix;
                clearInterval(counter);
            } else {
                box.textContent = Math.floor(current) + suffix;
            }
        }, duration / steps);
    });
}

// Run counters once stats section is visible on screen
const statsSection = document.querySelector(".stats-row");

if(statsSection){
    const observer = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                animateStats();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
}

// About Page - Welcome Console Message
window.onload = function(){
    console.log("About Page Loaded - DreamVista College");
};