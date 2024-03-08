
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar');

    btnMenu.addEventListener('click', function() {
        menuMobile.style.display = 'block';
        overlayMenu.style.display = 'block';
    });

    overlayMenu.addEventListener('click', function() {
        menuMobile.style.display = 'none';
        overlayMenu.style.display = 'none';
    });

    btnFechar.addEventListener('click', function() {
        menuMobile.style.display = 'none';
        overlayMenu.style.display = 'none';
    });

    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('nav a');

    // Adiciona um evento de clique a cada link do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (navegação para outra página)
            event.preventDefault();

            // Obtém o ID da seção para onde queremos rolar (atributo href do link)
            const targetId = this.getAttribute('href');

            // Seleciona o elemento alvo usando o ID
            const targetElement = document.querySelector(targetId);

            // Calcula a posição do elemento alvo em relação ao topo da página
            const targetOffset = targetElement.offsetTop;

            // Realiza a rolagem suave até o elemento alvo
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });

            // Fecha o menu mobile, se estiver aberto
            menuMobile.style.display = 'none';
            overlayMenu.style.display = 'none';
        });
    });
});

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Obtém os dados do formulário
    const formData = new FormData(this);

    // Envia os dados para o arquivo PHP de processamento via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "processar_formulario.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseText); // Exibe a mensagem de sucesso
            window.scrollTo(0, 0); // Leva o usuário para o topo do site
        }
    };
    xhr.send(new URLSearchParams(formData));
});