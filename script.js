let clickCount = 0;

const btn = document.querySelector("#myDIV button");
const height = document.documentElement.clientHeight * 0.9;
const width = document.documentElement.clientWidth * 0.9;
const box = document.getElementById("myDIV");

btn.addEventListener("click", () => {
  clickCount++;
  if (clickCount >= 5) {
    btn.classList.add("hidden");
    setTimeout(() => {
      btn.style.display = "none";
    }, 1000); // Match the transition duration
  } else {
    let randY = Math.floor(Math.random() * (height - box.offsetHeight));
    let randX = Math.floor(Math.random() * (width - box.offsetWidth));
    box.style.transform = `translate(${randX}px, ${randY}px)`;
  }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('yesContent').style.display = 'block';

    // Show the temporary image after 10 seconds
    setTimeout(() => {
        const tempImage = document.getElementById('temporaryImage');
        tempImage.style.display = 'block';
        // Hide the image after 0.5 seconds
        setTimeout(() => {
            tempImage.style.display = 'none';
        }, 500);
    }, 10000);

    // Show the senddudes div after 20 seconds
    setTimeout(() => {
        const sendDudesDiv = document.getElementById('senddudes');
        sendDudesDiv.style.display = 'block';
        // Hide the senddudes div after 2 seconds
        setTimeout(() => {
            sendDudesDiv.style.display = 'none';
        }, 800);
    }, 20000);
});