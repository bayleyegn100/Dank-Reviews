const loginButton = document.querySelector('#login')
const reviewButton = document.querySelector('#review')

const newReview = async function (event) {
    event.preventDefault();

    const newReview = document.querySelector('#reviewText').value.trim();
    const newImage = document.querySelector('#currentImage').getAttribute('src');

    if (newReview) {
        const response = await fetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify({ newReview, newImage }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const goLogin = function (event) {
    event.preventDefault();

    document.location.replace('/login')
};

if (reviewButton !== null) {
    reviewButton.addEventListener('click', newReview);
};

if (loginButton !== null) {
loginButton.addEventListener('click', goLogin);
};