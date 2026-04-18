let scrollSection = document.querySelector('.scroll-section');
setTimeout(() => scrollSection.style.display = 'block', 5400);

/* body background */
let body = document.querySelector('body');
setTimeout(() => body.style.backgroundImage = '../images/yellowLines.jpg', 5400);

/* header vars */
let mainHeader = document.querySelector('.main-header');
let mainHeaderContact = document.querySelector('.main-header__contact');

let mainHeaderContactHeight = window.getComputedStyle(mainHeaderContact).height;
mainHeaderContactHeight = Number(mainHeaderContactHeight.substr(0, mainHeaderContactHeight.length - 2));

/* header menu vars */
let menuOpen = false;

let mainHeaderHeight = window.getComputedStyle(mainHeader).height;
mainHeaderHeight = Number(mainHeaderHeight.substr(0, mainHeaderHeight.length - 2));

let headerShowDivs = document.querySelectorAll('.header-show-div');
headerShowDivs.forEach(headerShowDiv =>
{
    headerShowDiv.style.top = mainHeaderHeight + 'px';
    headerShowDiv.style.height = window.innerHeight - mainHeaderHeight + 'px';
});

let headerBtns = document.querySelectorAll('.header-btn');

/* header sub menus vars */
let headerSubMenuLinks = document.querySelectorAll('.has-sub-menu');
let headerSubMenus = document.querySelectorAll('.header-menu__sub');
let headerSubMenusBackBtns = document.querySelectorAll('.header-menu__sub__back');

/* header */
document.addEventListener('scroll', () =>
{
    let scrollY = window.scrollY;

    if (scrollY > mainHeaderContactHeight)
    {
        mainHeader.style.position = 'fixed';
        mainHeader.style.marginTop = '-' + mainHeaderContactHeight + 'px';
    }
    else
    {
        mainHeader.style.position = 'absolute';
        mainHeader.style.marginTop = '0';
    }
});

/* header menu */
headerBtns.forEach((headerBtn, key) =>
{
    headerBtn.addEventListener('click', () =>
    {
        headerShowDivs[key].style.animation = 'growFadeIn 0.2s ease-in-out forwards';

        headerSubMenus.forEach(subMenu =>
        {
            subMenu.style.display = 'none';
        });

        if (!menuOpen)
        {
            menuOpen = true;
            headerBtn.innerHTML = '<i class="fas fa-times"></i>';
            headerShowDivs[key].style.display = 'flex';
        }
        else
        {
            menuOpen = false;

            switch (key)
            {
                case 0:
                    headerBtns[key].innerHTML = '<i class="fas fa-bars"></i>';
                    break;
                case 1:
                    headerBtns[key].innerHTML = '<i class="fas fa-user"></i>';
                    break;
                case 2:
                    headerBtns[key].innerHTML = '<i class="fas fa-shopping-cart"></i>';
                    break;
            }

            headerShowDivs[key].style.animation = 'shrinkFadeOut 0.2s ease-in-out forwards';
            setTimeout(() => headerShowDivs[key].style.display = 'none', 200);
        }
    });

});

/* header sub menus */
headerSubMenus.forEach((subMenu, key) =>
{
    subMenu.style.height = window.innerHeight - mainHeaderHeight + 'px';
});

headerSubMenuLinks.forEach((link, key) =>
{
    link.addEventListener('click', () =>
    {
        headerSubMenus[key].style.animation = 'slideLeft 0.2s ease-out forwards;';
        headerSubMenus[key].style.display = 'flex';
    });
});

headerSubMenusBackBtns.forEach((link, key) =>
{
    link.addEventListener('click', () =>
    {
        headerSubMenus[key].style.animation = 'slideRight 0.2s ease-out forwards';
        setTimeout(() =>
        {
            headerSubMenus[key].style.display = 'none';
            headerSubMenus[key].style.animation = '';
        }, 200);
    });
});

/* animated inputs */
let animatedInputsDivs = document.querySelectorAll('.animated-input');
let animatedInputsLabels = document.querySelectorAll('.animated-input label');
let animatedInputsWhiteCovers = document.querySelectorAll('.animated-input .white-cover');
let animatedInputs = document.querySelectorAll('.animated-input input');

animatedInputs.forEach((animatedInput, key) =>
{
    animatedInput.addEventListener('focus', () =>
    {
        animatedInputsDivs[key].classList.add('focused');
        animatedInputsWhiteCovers[key].style.width = window.getComputedStyle(animatedInputsLabels[key]).width;
    });

    animatedInput.addEventListener('blur', () =>
    {
        if(animatedInput.value === '')
        {
            animatedInputsDivs[key].classList.remove('focused');
            animatedInputsWhiteCovers[key].style.width = '0';
        }
    });
});

/* slideshow */
