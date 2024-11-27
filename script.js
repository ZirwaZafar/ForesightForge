// Handle the goal submission and roadmap generation
document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const goal = document.getElementById("goal").value;
    if (goal) {
        generateRoadmap(goal);
        document.getElementById("goal").value = ''; // Reset the input field
    }
});

// Generate a simple roadmap based on the goal
function generateRoadmap(goal) {
    const roadmapContent = document.getElementById("roadmap-content");
    roadmapContent.innerHTML = `
        <h3>Your goal: ${goal}</h3>
        <p>Here is a personalized roadmap for achieving your goal:</p>
        <ul>
            <li>Step 1: Research about ${goal}</li>
            <li>Step 2: Break down the goal into smaller tasks</li>
            <li>Step 3: Set deadlines for each task</li>
            <li>Step 4: Start working and track progress</li>
        </ul>
    `;
    showProgress();
}

// Show a simple progress tracker
function showProgress() {
    const progressContent = document.getElementById("progress-content");
    progressContent.innerHTML = `
        <p>Track your progress here:</p>
        <input type="range" min="0" max="100" value="0" id="progress-bar">
        <p>Progress: <span id="progress-value">0%</span></p>
    `;
    const progressBar = document.getElementById("progress-bar");
    const progressValue = document.getElementById("progress-value");
    
    progressBar.addEventListener("input", function() {
        progressValue.textContent = progressBar.value + "%";
    });
      }
