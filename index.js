const writeButton = document.querySelector('.add-form-button');
const addComment = document.querySelector('.comments');
const nameInputElement = document.querySelector('.add-form-name');
const textInputElement = document.querySelector('.add-form-text');



const comments = [
    {
        name: "Глеб Фокин",
        time: "12.02.22 12:18",
        text: "Это будет первый комментарий на этой странице",
        likesCounter: 3,
        isLiked: false

    },
    {
        name: "Варвара Н.",
        time: "13.02.22 19:22",
        text: "Мне нравится как оформлена эта страница! ❤",
        likesCounter: 75,
        isLiked: false
    },
];


const renderComments = () => {
    const commentsElements = comments.map((comment) => {
        return `   <li class="comment">
        <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.time}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">
                ${comment.text}
            </div>
        </div>
        <div class="comment-footer">
            <div class="likes">
                <span class="likes-counter">${comment.likesCounter}</span>
                <button class="like-button ${comment.isLiked ? 'active-like' : ''}"></button>
            </div>
        </div>
        </li> `
    });

    const commentsHtml = commentsElements.join('')

    addComment.innerHTML = commentsHtml;

    const likeButtonElements = document.querySelectorAll('.like-button');

    likeButtonElements.forEach((likeButton, index) => {
        likeButton.addEventListener('click', (event) => switchLike(event, index))
    })    
}

function pushText(event) {
    console.log(event.target, event.currentTarget);
}

function switchLike(event, index) {    
    const button = event.target;
    const counter = button.previousElementSibling;

    if (button.classList.contains('active-like')) {
        comments[index].isLiked = false;
        comments[index].likesCounter -= 1;
        button.classList.remove('active-like');
        counter.textContent = Number(counter.textContent) - 1;
    } else {
        comments[index].isLiked = true
        comments[index].likesCounter += 1

        button.classList.add('active-like');
        counter.textContent = Number(counter.textContent) + 1;
    }
}

renderComments()


function time() {
    let myDate = new Date();
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    return myDate.toLocaleString("ru", options)
}


writeButton.addEventListener('click', newComment)
function newComment() {

    nameInputElement.classList.remove('error')
    textInputElement.classList.remove('error');

    if (nameInputElement.value === "") {
        nameInputElement.classList.add('error')
        return;
    }

    if (textInputElement.value === "") {
        textInputElement.classList.add('error')
        return;
    }

    comments.push({
        name: nameInputElement.value,
        time: time(),
        text: textInputElement.value,
        likesCounter: 0,
        isLiked: false
    })

    renderComments()

    nameInputElement.value = "";

    textInputElement.value = "";

}

