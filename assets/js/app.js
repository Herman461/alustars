// Функционал шапки
document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.querySelector(".icon-menu");
    const header = document.querySelector('.header');

    if (iconMenu) {
        const menuContent = document.querySelector(".menu");
        iconMenu.addEventListener('click', function () {
            document.body.classList.toggle("lock");
            header.classList.toggle('active');
            menuContent.classList.toggle("active");
            iconMenu.classList.toggle('active')
        })

    }
    //
    // window.addEventListener('scroll', function() {
    //     const header = document.querySelector('.header')
    //     if (document.documentElement.scrollTop > 10 && !header.classList.contains('scroll')) {
    //         header.classList.add('scroll')
    //         return
    //     }
    //
    //     if (document.documentElement.scrollTop <= 0 && header.classList.contains('scroll')) {
    //         header.classList.remove('scroll')
    //     }
    // })

});

// Модальные окна
document.addEventListener('DOMContentLoaded', function() {
    const modalLinks = document.querySelectorAll('[data-modal-link]')

    if (modalLinks.length > 0) {
        for (let index = 0; index < modalLinks.length; index++) {
            const link = modalLinks[index]
            link.addEventListener('click', function(e) {
                e.preventDefault()
                const scrollWidth = window.innerWidth - document.body.clientWidth

                const modalTitle = '#' + e.currentTarget.dataset.modalLink

                document.querySelector(modalTitle).classList.add('active')

                document.body.classList.add('lock')

                document.body.style.paddingRight = scrollWidth + 'px'
                document.querySelector('.header').style.paddingRight = scrollWidth + 'px'

            })
        }
    }

    const modalCloseButtons = document.querySelectorAll('[data-modal-close]')

    if (modalCloseButtons.length > 0) {
        for (let index = 0; index < modalCloseButtons.length; index++) {
            const closeButton = modalCloseButtons[index]
            closeButton.addEventListener('click', function(e) {
                closeModal(e)
            })
        }
    }

    window.addEventListener('click', function(e) {
        if (!e.target.closest('.modal__content') && e.target.closest('.modal.active')) {
            closeModal(e)
        }
    })

    function closeModal(e) {
        e.target.closest('.modal').classList.remove('active')

        setTimeout(() => {
            document.body.classList.remove('lock')
            document.body.style.paddingRight = 0
            document.querySelector('.header').style.paddingRight = 0
        }, timeout)
    }
})


// Табы
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll("[data-tab-title]");
    const tabContent = document.querySelectorAll("[data-tab-content]");


    if (tabContent.length > 0)  {
        tabLinks.forEach(function(el) {
            el.addEventListener("click", openTabs);
        });

    }

    function openTabs(el) {
        el.preventDefault()
        const btnTarget = el.currentTarget;
        const title = btnTarget.dataset.tabTitle;
        const category = btnTarget.dataset.tabCategory

        const tabContent = document.querySelectorAll(`[data-tab-content][data-tab-category="${category}"]`);
        const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        const activeContent = document.querySelectorAll(`[data-tab-content="${title}"][data-tab-category="${category}"]`)
        activeContent.forEach(function(el) {
            el.classList.add('active')
        })
        document.querySelector(`[data-tab-content="${title}"]`).classList.add("active");

        btnTarget.classList.add("active");

    }
})

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.request__files')) {
        document.querySelector('.request__files').addEventListener('click', function(e) {
            document.querySelector('.files-request__input').click()
        })
    }
})


