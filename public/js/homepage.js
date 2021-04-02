const newReview = async = function (event) {
    event.preventDefault();

    const newReview = document.querySelector('#reviewText').nodeValue.trim();

    if (newReview) {
        const response = await fetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify({ newReview }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#review').addEventListener('submit', newReview);