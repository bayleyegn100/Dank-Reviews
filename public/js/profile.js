const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete review');
    }
  }
};

let deleteButtons = document.querySelectorAll('.delete-button')
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", delButtonHandler)
});