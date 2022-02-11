async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const postTitle = document.querySelector('input[name="post-title"]').value.trim();
    console.log(postTitle);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: postTitle
        })
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

  
  }
  
  document.querySelector('.edit-post-form').addEventListener('click', deleteFormHandler);