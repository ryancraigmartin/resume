import 'focus-visible'

document.documentElement.classList.remove('no-js')

// Scroll State
const onScroll = () => {
    const scrollThreshold = 150
    const scrollClassName = 'js-scrolled'
    const isOverThreshold = window.scrollY > scrollThreshold
    isOverThreshold
        ? document.documentElement.classList.add(scrollClassName)
        : document.documentElement.classList.remove(scrollClassName)
}

window.addEventListener('scroll', onScroll, { passive: true })

// Print Button
const printButton = document.querySelector('.js-print')

printButton.addEventListener('click', () => {
    window.print()
})
