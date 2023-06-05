const onSubmit = (e) => {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === '') {
        alert('Please give a description of the image to generate');
        return;
    }

    generateImageRequest(prompt, size);
}

const generateImageRequest = async (prompt, size) => {
    try {
        showSpinner();
        
        // get response from a fetch request to this endpoint
        const response = await fetch('openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        // check if response is okay because 'catch' wouldn't catch a 400 error
        if(!response.ok) {
            removeSpinner();
            throw new Error('Sorry, but that image could not be generated');
        }

        const data = await response.json();
        
        // taking the data property of the data object and saving it as imageURL
        const imageURL = data.data;
        document.querySelector('#image').src = imageURL

        removeSpinner();

    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

const showSpinner = () => {
    document.querySelector('.spinner').classList.add('show');
}

const removeSpinner = () => {
    document.querySelector('.spinner').classList.remove('show');
}

// selects HTML element by id(image-form) and adds an eventlistener, 1st arg: event type. 2nd arg: function to use. 
document.querySelector('#image-form').addEventListener('submit', onSubmit);