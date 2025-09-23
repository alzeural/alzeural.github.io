// Progress tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress from localStorage or set to 0
    const courses = ['html', 'css', 'javascript', 'python', 'sql'];
    
    courses.forEach(course => {
        const progress = localStorage.getItem(`${course}-progress`) || 0;
        updateProgressBar(course, progress);
    });
    
    // Function to update progress bar
    function updateProgressBar(course, progress) {
        const progressFill = document.querySelector(`[data-course="${course}"] .progress-fill`);
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
            progressFill.setAttribute('data-progress', progress);
        }
    }
    
    // Function to mark a lesson as complete (to be called from lesson pages)
    window.markLessonComplete = function(course, lessonNumber, totalLessons) {
        const currentProgress = parseInt(localStorage.getItem(`${course}-progress`) || 0);
        const progressPerLesson = 100 / totalLessons;
        const newProgress = Math.min(100, currentProgress + progressPerLesson);
        
        localStorage.setItem(`${course}-progress`, newProgress);
        updateProgressBar(course, newProgress);
        
        // If we're not on the homepage, redirect there to see updated progress
        if (!window.location.pathname.endsWith('index.html') && 
            window.location.pathname !== '/') {
            window.location.href = '../index.html';
        }
    };
});
