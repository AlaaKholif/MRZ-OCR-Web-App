const camera = document.getElementById('camera');
const captureButton = document.getElementById('capture');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        camera.srcObject = stream;
    } catch (error) {
        console.error('Camera access denied:', error);
        alert('Please allow camera access.');
    }
}

captureButton.addEventListener('click', () => {
    // Capture logic will be implemented here.
    alert('Capture button clicked!');
});

// Start the camera when the page loads
window.onload = startCamera;
