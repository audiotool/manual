// hide nav if ?hide-nav=true
window.onload = () => {
    if ((new URL(window.location.href)).searchParams.get("hide-nav") === "true") {
        document.querySelector(".wy-nav-side").setAttribute("style", "display: none");
        document.querySelector(".wy-nav-content-wrap").setAttribute("style", "margin-left: 0px !important");
    }
};

// enable plausible
{
    const scriptElement = new DOMParser()
        .parseFromString(
            '<script defer data-domain="manual.audiotool.com" src="https://www.audiotool.com/js/script.js"></script>',
            'text/html'
        ).querySelector("script");
    document.querySelector("head").append(scriptElement);
}