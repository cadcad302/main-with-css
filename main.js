window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = '';

    // Prompt the user
    var confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});