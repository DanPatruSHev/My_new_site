document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.animate');

    items.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 200 + index * 200);
    });
    const links = document.querySelectorAll('a');

    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('visible');
        }, 150 * index);
    });
});