//Q.2
function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';

    } else {
        paragraph.style.display = 'none';
    }
}

//Q.1 
function swapTheme() {
    //write your code
    console.log("function Called");
    const element = document.getElementsByClassName("day");
    const button = document.getElementsByClassName("button_day");

    console.log(element[0].classList.toggle("night"))
    button[0].classList.toggle("button_night");
}

//Q.3
function createDiv(width, height, text) {
    const div = document.createElement("div")
    console.log(typeof (String(width) + "px"))
    div.style.width = String(width) + "px"
    div.style.height = String(height) + "px"
    const textNode = document.createTextNode(text)
    div.appendChild(textNode)
    document.body.appendChild(div)
}

//Q.4
const textContainer = document.getElementById('text-container');
const colorBox = document.getElementById('colorbox');
const colorChangeButton = document.getElementById('colorchange');
const fontSizeRange = document.getElementById('fontsize');
const underlineButton = document.getElementById('underline');
const italicButton = document.getElementById('italic');
const boldButton = document.getElementById('bold');
const fontFamilyDropdown = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssPropsParagraph = document.getElementById('css-props');

colorChangeButton.addEventListener('click', () => {
    textContainer.style.color = colorBox.value;
});

fontSizeRange.addEventListener('input', () => {
    textContainer.style.fontSize = fontSizeRange.value + 'px';
});

underlineButton.addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

italicButton.addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

boldButton.addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

fontFamilyDropdown.addEventListener('change', () => {
    textContainer.style.fontFamily = fontFamilyDropdown.value;
});

getStyleButton.addEventListener('click', () => {
    const cssProperties = getComputedStyle(textContainer);
    let cssText = '';
    for (let prop of cssProperties) {
        cssText += `${prop}: ${cssProperties.getPropertyValue(prop)}; `;
    }
    cssPropsParagraph.textContent = cssText;
});