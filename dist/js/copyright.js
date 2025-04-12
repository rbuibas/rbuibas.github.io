// Simple copyright year update
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const footers = document.querySelectorAll('#main-footer');
  
  if (footers.length > 0) {
    footers.forEach(function(footer) {
      footer.innerHTML = `Copyright &copy; ${currentYear}`;
    });
  }
}); 