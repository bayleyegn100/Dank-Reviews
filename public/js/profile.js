const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#reviewer-comment').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
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
    .querySelector('.new-reviewer-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.reviewer-list')
    .addEventListener('click', delButtonHandler);
  