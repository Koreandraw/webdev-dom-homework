const writeButton = document.querySelector('.add-form-button');
const addComment = document.querySelector('.comments');
const nameInputElement = document.querySelector('.add-form-name');
const textInputElement = document.querySelector('.add-form-text');

function time () {
    let myDate = new Date();
    const months = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
    let fullDate = myDate.getDate() + "." + months[myDate.getMonth()] + "." + myDate.getFullYear() + " " + myDate.getHours() +":" + myDate.getMinutes();
    return fullDate;
}


writeButton.addEventListener('click', newComment)
function newComment() {

    nameInputElement.classList.remove('error'), textInputElement.classList.remove('error');  

    if (nameInputElement.value === "" || textInputElement.value === "") {
        nameInputElement.classList.add('error'), textInputElement.classList.add('error')        
        return;
    }

    const oldCommentList = addComment.innerHTML;
    addComment.innerHTML = oldCommentList + 
    `   <li class="comment">
            <div class="comment-header">
                <div>${nameInputElement.value}</div>
                <div>${time()}</div>
            </div>
            <div class="comment-body">
                <div class="comment-text">
                    ${textInputElement.value}
                </div>
            </div>
            <div class="comment-footer">
                <div class="likes">
                    <span class="likes-counter">0</span>
                    <button class="like-button"></button>
                </div>
            </div>
        </li> `
}