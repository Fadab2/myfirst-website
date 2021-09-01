let preferredCity = prompt('Do you like Seattle or NYC better?: ');

if (preferredCity.toLowerCase() == 'seattle') {
    let emoji = "https://images.unsplash.com/photo-1558035866-0ee1a667f163?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/200x200"

    document.write('<img src="' + emoji + '">');
} else {
    emoji = "https://images.unsplash.com/photo-1596057176846-4dfa9a53c9ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80/200x150"

    document.write('<img src="' + emoji + '">');
}
