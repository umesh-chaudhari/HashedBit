function displayRandomNumber() {
    const btn = document.getElementById('btn')
    const numParagraph = document.getElementById('num')
    const responseDiv = document.getElementById('response')

    function generateRandomNumber() {
        return Math.floor(Math.random() * 41) - 20 
    }

    function determineHotOrCold(number) {
        if (number < 0) {
            return 'Cold'
        } else {
            return 'Hot'
        }
    }

    btn.addEventListener('click', () => {
        const randomNumber = generateRandomNumber()
        numParagraph.textContent = randomNumber
        const response = determineHotOrCold(randomNumber)
        responseDiv.textContent = response
    })

}