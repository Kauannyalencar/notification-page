

// Quando clicar no botão, deve tirar a class unread, remover os estilos e zerar o número de notificações.

const readBotao = document.querySelector("#read");

readBotao.addEventListener("click", () => {
    const notiNumber = document.querySelector(".notificationsNumber");
    notiNumber.style.display = 'none'
    
    //Os elementos com class unread devem desaparecer da tela 
    const spanPop = document.querySelectorAll("span.unreadMessage")
    const unredNoti = document.querySelectorAll(".unread")
    unredNoti.forEach(noti =>{
        noti.classList.remove("unread")
    })

    spanPop.forEach(pop =>{
        pop.style.display = 'none'
    })
    
})

//Tirar" ativo e mudar a cor dos campos