export function initializeTheme() {
  const checkbox = document.getElementById('checkbox');

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-theme');
    checkbox.checked = true;
  } else {
    document.documentElement.classList.add('light-theme');
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  });
}

function setDarkTheme() {
  document.documentElement.classList.remove('light-theme');
  document.documentElement.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
}

function setLightTheme() {
  document.documentElement.classList.remove('dark-theme');
  document.documentElement.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
}
