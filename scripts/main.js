function openCvReady() {
    cv["onRuntimeInitialized"]=() => {

        console.log('INFO :: OpenCV Loaded');

        // get image from camera
        var sourceImageUrl = 'http://' + ipCamera.ipAddress + ipCamera.snapUrl + '&user=' + ipCamera.user + '&pwd=' + ipCamera.password;
        document.getElementById('video-canvas-image').src= sourceImageUrl;


        document.getElementById("button-source").onclick = function() {
            let imgMain = cv.imread('video-canvas-image');
            console.log('INFO :: Source Image Loaded');
            cv.imshow('video-canvas', imgMain);
            imgMain.delete();
        };

        document.getElementById('button-monochrome').onclick = function() {
            // read image from source dir and apply opencv mat format
            let imgMain = cv.imread('video-canvas-image');
            // convert to grayscale
            cv.cvtColor(imgMain, imgMain, cv.COLOR_RGBA2GRAY,0);
            console.log('INFO :: Monochrome Image Loaded');
            // display grayscale image
            cv.imshow('video-canvas', imgMain);
            imgMain.delete();
        };

        document.getElementById('button-blur').onclick = function() {
            // read image from source dir and apply opencv mat format
            let imgMain = cv.imread('video-canvas-image');
            // blur image
            let ksize = new cv.Size(7,7);
            cv.GaussianBlur(imgMain, imgMain, ksize, 0);
            console.log('INFO :: Blurred Image Loaded');
            // display blurred image
            cv.imshow('video-canvas', imgMain);
            imgMain.delete();
        };

        document.getElementById('button-edge').onclick = function() {
            // read image from source dir and apply opencv mat format
            let imgMain = cv.imread('video-canvas-image');
            // canny image
            let imgCanny = imgMain.clone();
            cv.Canny(imgMain, imgCanny, 50, 100)
            console.log('INFO :: Canny Image Loaded');
            // display blurred image
            cv.imshow('video-canvas', imgCanny);
            imgMain.delete();
            imgCanny.delete();
        };

        document.getElementById('button-video').onclick = function() {
            console.log('INFO :: Video Loaded');
        };
    };
}