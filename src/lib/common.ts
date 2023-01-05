export const updateActiveMenu = (href: string) => {

    // Check url and set link to active
    const links = document.querySelectorAll('.nav-li a')
    const url = href

    const linkCol = 'text-gray-800' 

    links.forEach((link) => {
        link.classList.remove(linkCol);
        if (link.getAttribute('href') === url) {
            link.classList.add(linkCol);
        }
    });

    
}

export const hideMobileMenu = () => {
    const navIcon = document.querySelector('#nav-icon');
    const menuList = document.querySelector('#mobile-menu-container');

    if (navIcon?.classList.contains('open')) {
        navIcon.classList.toggle('open');
        menuList?.classList.toggle('hidden');
    }
}


