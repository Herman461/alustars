const moreButtons = document.querySelectorAll('.product-catalog__more')

if (moreButtons.length > 0) {
    for (let index = 0; index < moreButtons.length; index++) {
        const moreButton = moreButtons[index]

        moreButton.addEventListener('mouseenter', function(e) {
            const product = e.target.closest('.product-catalog')
            const image = product.querySelector('.product-catalog__image')

            if (!image.classList.contains('active')) {
                image.classList.add('active')
            }
        })

        moreButton.addEventListener('mouseleave', function(e) {
            const product = e.target.closest('.product-catalog')
            const image = product.querySelector('.product-catalog__image')

            if (image.classList.contains('active')) {
                image.classList.remove('active')
            }
        })
    }
}
