let caption;

// Image Preview
document.getElementById('imageInput').addEventListener('change', function() {
    var imagePreview = document.getElementById('imagePreview');
    var file = this.files[0];
    if(file) {
        imagePreview.src = URL.createObjectURL(file);
    } else {
        imagePreview.src = "https://placehold.co/500x300/orange/white"; 
    }
});

//Display Caption
function displayCaption(caption) {
    var captionContainer = document.getElementById('captionContainer');
    var imageCaption = document.getElementById('imageCaption');
    
    imageCaption.textContent = caption;
    captionContainer.style.display = "block";
    captionContainer.classList.add('has-caption');
}

//Submit button
document.getElementById('submitBtn').addEventListener('click', function() {
    var imageInput = document.getElementById('imageInput');
    var loadingSpinner = document.getElementById('loadingSpinner');
    
    if(imageInput.files.length > 0){
        var file = imageInput.files[0];
        
        // Show loading, disable submit button
        loadingSpinner.classList.add('active');
        this.disabled = true;
        
        displayCaption("Processing..."); // Placeholder text
        getCaptionForImage(file); // Mock function to simulate getting a caption
    } else {
        alert('Please select an image first!');
    }
});


//Process Caption
// It's an API call so we use async/await
async function getCaptionForImage(imageFile){
    var loadingSpinner = document.getElementById('loadingSpinner');
    var submitBtn = document.getElementById('submitBtn');
    
    // Create a FormData object and append the file
    let formData = new FormData();
    formData.append('file', imageFile);

    try {
        let response = await axios.post('http://localhost:3000/caption-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // Handle success
        if (response.data) {
            caption = response.data;
            console.log(caption); 
            displayCaption(caption); 
        }
    } catch (error) {
        // Handle error
        console.error('Error:', error);
        displayCaption('Error generating caption. Please try again.');
    } finally {
        // Hide loading, re-enable button
        loadingSpinner.classList.remove('active');
        submitBtn.disabled = false;
    }
}


// Voicing Button
document.getElementById('speakBtn').addEventListener('click', function() {
    if (!caption || caption === "Processing...") {
        alert('Please generate a caption first!');
        return;
    }
    speakText(caption);
});

// Speech function
function speakText(text) {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
        // Create a new instance of SpeechSynthesisUtterance
        var speech = new SpeechSynthesisUtterance(text);

        // Optionally, set some parameters
        speech.lang = 'en-US'; // Set the language
        speech.rate = 1; // Set the speed, 1 is the default rate
        speech.pitch = 1; // Set the pitch, 1 is the default pitch

        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        // Speech synthesis not supported
        alert("Sorry, your browser does not support text-to-speech!");
    }
}
