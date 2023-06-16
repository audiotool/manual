window.onload = () => {
    if ((new URL(window.location.href)).searchParams.get("hide-nav") === "true") {
        document.querySelector(".wy-nav-side").setAttribute("style", "display: none");
        document.querySelector(".wy-nav-content-wrap").setAttribute("style", "margin-left: 0px !important");
    }
}