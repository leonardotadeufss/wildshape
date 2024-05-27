'use client'
export default function ScrollToTop() {
    function scrollTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button id="scrollToTop" type="button" onClick={scrollTop} >^</button>
    )
};

