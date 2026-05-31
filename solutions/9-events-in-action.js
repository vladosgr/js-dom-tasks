export default () => {
  // BEGIN
  const tabs = document.querySelectorAll('[data-bs-target]');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.dataset.bsTarget;
      const targetPane = document.querySelector(targetId);
      if (!targetPane) return;
      const tabContent = targetPane.parentElement;
      tabContent.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      targetPane.classList.add('active');
      const navContainer = tab.closest('.nav-tabs') || 
                           tab.closest('.nav') || 
                           tab.parentElement;
      if (navContainer) {
        navContainer.querySelectorAll('[data-bs-target]').forEach(t => {
          t.classList.remove('active');
        });
        tab.classList.add('active');
      }
    });
  });
  // END
};
