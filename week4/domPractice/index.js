
const sendPost = () => {
    // alert('Enviaste el formulario!')
    const textareaPost = document.getElementById('postTextarea');
    const postsContainer = document.getElementById('posts-container');
    const rowPost = document.createElement('div');
    const postDiv = document.createElement('div');
    const textElementP = document.createElement('p');
    const textNodePost = document.createTextNode(textareaPost.value);
    textElementP.appendChild(textNodePost);
    postDiv.appendChild(textElementP);
    rowPost.appendChild(postDiv);
    postsContainer.prepend(rowPost);

    postDiv.classList.add('col-6', 'post-card')
    rowPost.classList.add('row', 'justify-content-md-center')

    textareaPost.value = '';
    
    console.log(postsContainer)
};

function changeProfilPic(element) {    
    // const img = document.createElement('img');
    // img.src = 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419'
    element.src = 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419'
}

function changeFunnyPic(element) {
    element.src = 'https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300';

}