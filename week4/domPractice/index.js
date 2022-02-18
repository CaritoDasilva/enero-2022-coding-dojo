
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