const onSubmit = (e) => {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === '') {
        alert('Please give a description of the image to generate');
        return;
    }

    generateImageRequest(prompt, size);
}

const generateImageRequest = async (prompt, size) => {
    
}

// selects HTML element by id(image-form) and adds an eventlistener, 1st arg: event type. 2nd arg: function to use. 
document.querySelector('#image-form').addEventListener('submit', onSubmit);