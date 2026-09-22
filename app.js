let faqItems = document.querySelectorAll('li')

faqItems.forEach((faqItem) => {
    const question = faqItem.querySelector ('.main-div')
    const answer = faqItem.querySelector('li p')
    const image = faqItem.querySelector ('.indicator-icon img')

    question.addEventListener('click', () => {
        faqItems.forEach((faq) => {
            faq.querySelector('li p').style.display = 'none';
            faq.querySelector('.indicator-icon img').src = "./assets/images/icon-plus.svg"
        })

        answer.style.display = 'block';
        image.src = './assets/images/icon-minus.svg'
    })
    
})