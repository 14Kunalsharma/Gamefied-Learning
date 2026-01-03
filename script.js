// Animate progress bars on load
document.addEventListener("DOMContentLoaded", function () {
    // Animate lesson progress bars
    document.querySelectorAll('.lesson-progress .progress-bar').forEach(bar => {
      let width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => { bar.style.width = width; }, 300);
    });
  
    // Animate module progress bars
    document.querySelectorAll('.module-bar .module-progress').forEach(bar => {
      let width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => { bar.style.width = width; }, 400);
    });
  
    // Sidebar navigation active state
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

  
    // Buttons (future expansion)
    document.querySelectorAll('.small-btn, .primary-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        alert('This feature will be available soon!');
      });
    });
  });
  