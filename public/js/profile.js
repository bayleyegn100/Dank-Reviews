const newFormHandler = async (event) => {
    event.preventDefault();
  
    const context = document.querySelector('#content').value.trim();
  
    if (context) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ context }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/review/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('#createReview')
    .addEventListener('click', newFormHandler);
  
    let deleteButtons = document.querySelectorAll('.delete-button')
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", delButtonHandler)
    });
  