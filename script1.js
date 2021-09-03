function getUserName() {
    let userName = prompt('What is your name, please?: ');
    document.write('Welcome ' + userName);
}

function yourBestCity() {
    let preferredCity = prompt('Do you like Seattle or NYC better?: ');

    if (preferredCity.toLowerCase() == 'seattle') {
        let emoji = "https://images.unsplash.com/photo-1558035866-0ee1a667f163?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/200x200"

        document.write('<img src="' + emoji + '">');
    } else {
        emoji = "https://images.unsplash.com/photo-1596057176846-4dfa9a53c9ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80/200x150"

        document.write('<img src="' + emoji + '">');
    }
}

// function to change background color per user selection
function lightBackground() {
    let lighBackground = prompt('Do you want light background, yes or no? ');

    if (lighBackground.toLowerCase() == 'yes') {
        document.body.style.backgroundColor = 'white';
    }
    else if (lighBackground.toLowerCase() == 'no') {
        document.body.style.backgroundColor = 'burlywood';
    } else {
        showAlert();
        lightBackground();
    }
}

function showAlert() {
    alert("Error: please, enter yes or no! press ok to continue...");
}

// function to display images according to user selection
function displaySeaImages() {
    let numOfImages = prompt('How many images of Seattle you want to see. Enter \n\    numbers between 2 and 6');

    while (numOfImages < 2 || numOfImages > 6) {
        alert("Error: please, enter a number between 2 and 6 ok to continue...");
        numOfImages = prompt('How many images of Seattle you want to see. Enter \n\
         numbers between 2 and 6');

    }

    for (let i = 0; i < numOfImages; i++) {

        let seaImage = "https://images.unsplash.com/photo-1535581652167-3a26c90bbf86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/900x150"

        document.write('<img src="' + seaImage + '">');
    }
    alert(numOfImages + " Seattle images was displayed!");
}

