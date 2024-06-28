const numThreads = 10;
const threadElements = [];

for (let i = 0; i < numThreads; i++) {
    threadElements.push(document.getElementById(`thread-${i}`));
}

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Update positions for each thread segment
    threadElements.forEach((thread, index) => {
        setTimeout(() => {
            thread.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }, index * 20); // Delay each segment for trailing effect
    });
});
