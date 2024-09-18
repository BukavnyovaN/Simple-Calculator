export function showErrorDialog(message) {
  const errorDialog = document.getElementById('errorDialog');
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorDialog.showModal();
}

export function initializeErrorHandler() {
  const errorDialog = document.getElementById('errorDialog');
  const closeDialogBtn = document.getElementById('closeDialogBtn');

  closeDialogBtn.addEventListener('click', () => {
    errorDialog.close();
  });
}
