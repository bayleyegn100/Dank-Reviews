const loginButton = document.querySelector('#login')
const reviewButton = document.querySelector('#review')

const newReview = async function (event) {
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

const goLogin = function (event) {
    event.preventDefault();

    document.location.replace('/login')
};

if (reviewButton !== null) {
    reviewButton.addEventListener('submit', newReview);
};

loginButton.addEventListener('click', goLogin);