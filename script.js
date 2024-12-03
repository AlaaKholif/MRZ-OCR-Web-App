const camera = document.getElementById('camera');
const captureButton = document.getElementById('capture');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: { ideal: "environment" } // Prefer the back camera
            }
        });
        camera.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
        alert('Could not access the camera. Please ensure you have allowed camera permissions.');
    }
}

captureButton.addEventListener('click', () => {
    // This is where the capture logic will be added later
    alert('Capture button clicked!');
});

// Start the camera when the page loads
window.onload = startCamera;
