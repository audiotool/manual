// hide nav if ?hide-nav=true
window.onload = () => {
    if ((new URL(window.location.href)).searchParams.get("hide-nav") === "true") {
        document.querySelector(".wy-nav-side").setAttribute("style", "display: none");
        document.querySelector(".wy-nav-content-wrap").setAttribute("style", "margin-left: 0px !important");
    }
}



let initYoutube = () => {

    var accessToken = undefined;
    // starts youtube auth flow if not logged in, then likes video, otherwise just likes video
    let likeVideo = (videoId, buttonElement) => {
        // function actually liking the video & changing button
        let likeVideo = () => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://www.googleapis.com/youtube/v3/videos/rate", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
            xhr.send(JSON.stringify({
                id: videoId,
                rating: 'like'
            }));
            document.querySelector(`[youtube-video-id="${videoId}"]`).classList.add("liked");
            console.log("liked video with id:", videoId);
            console.log("Modified button element:", buttonElement);
        }

        // sign in before liking if we don't have token
        if (!accessToken) {
            youtubeClient.callback = (resp) => {
                accessToken = resp.access_token;
                likeVideo();
            }
            youtubeClient.requestAccessToken();
            // if we do, just like
        } else {
            likeVideo();
        }
    }

    // fetch youtube script
    let s = document.createElement('script');
    s.src = "https://accounts.google.com/gsi/client"
    s.onload = () => {
        // create youtubeClient to log user in using oauth2
        window.youtubeClient = google.accounts.oauth2.initTokenClient({
            client_id: '88635938370-duehgo5jq59nmojnugtd5atmrafku9id.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/youtube',
            callback: (response) => {
                console.log(response);
            },
        });

        // attach likeVideo callbacks to all youtube like buttons once done
        for (el of document.querySelectorAll(".youtube-like")) {

            let videoId = el.getAttribute('youtube-video-id');
            if (videoId) {
                el.onclick = () => likeVideo(videoId, el);
            }
        }
    }
    document.head.appendChild(s);
}

