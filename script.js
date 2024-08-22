const text = "Um espaço na web destinado ao meu Portfólio.";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 70); // Aumente ou diminua o valor para ajustar a velocidade de digitação
    }
}

window.onload = type;
