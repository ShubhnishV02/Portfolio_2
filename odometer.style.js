document.addEventListener("DOMContentLoaded", function () {
    const funfactSection = document.querySelector('.funfact-area');
    const odometerElements = document.querySelectorAll('.odometer');

    // Initialize Odometer.js (you need to include the odometer.js library)
    const runOdometer = () => {
        odometerElements.forEach(odometerEl => {
            const finalCount = odometerEl.getAttribute('data-count');
            odometerEl.innerHTML = finalCount; // This triggers the odometer count
        });
    };

    // Use IntersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Ensure the element is fully visible before triggering odometer
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                runOdometer();
                observer.unobserve(funfactSection); // Stop observing after running once
            }
        });
    }, {
        threshold: 0.5 // Set the threshold to 50% visibility before running
    });

    // Start observing the funfact section
    observer.observe(funfactSection);
});
