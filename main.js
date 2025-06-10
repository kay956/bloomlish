<script>
  // Accordion toggle logic
  document.querySelectorAll('a.toggle-button').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      const expanded = button.getAttribute('aria-expanded') === 'true';
      const controlledPanelId = button.getAttribute('aria-controls');
      const controlledPanel = document.getElementById(controlledPanelId);

      // Close all panels
      document.querySelectorAll('a.toggle-button').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        panel.classList.remove('expanded');
      });

      // Toggle current panel if it was previously closed
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
        controlledPanel.classList.add('expanded');
      }
    });
  });
</script>