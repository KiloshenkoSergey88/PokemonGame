var shouldContinue = true;
var interval = 0;

function toStop() {
    if (interval == 0) {
        interval = setInterval(function () {
            if (shouldContinue) {

            }
            else {
                clearInterval(interval);
                interval = 0;
            }
        }, 200); // Or whatever interval makes sense
    }
}

toStop();

// ...

shouldContinue = false;