(function () {
    const header = document.getElementById("header_id");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active");
        } else {
            header.classList.remove("header_active");
        }
    };
})();