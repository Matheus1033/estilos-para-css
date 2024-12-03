let lang = document.querySelector(".langs"),
link = document.querySelectorAll("a"),
title = document.querySelector(".title"),
description = document.querySelector(".description");

link.forEach(el =>{
    el.addEventListener("click", () => {
        lang.querySelector(".active").classList.remove("active")
        el.classList.add("active")

        let attr = el.getAttribute("language")

        title.textContent = data[attr].title
        description.textContent = data[attr].description
    })
})

let data = {
    portuguese: {
        title: "Olá Mundo",
        description: "A empresa em si é uma empresa de muito sucesso. Uma pessoa sábia repreenderá algo por motivo de aborrecimento, mas pela bajulação ele será obrigado, e da mesma maneira a. Em momentos como este, somos os menos dignos de sofrimento. Olá, é muito difícil se livrar da gordura. Acima de tudo, nascidos, muito presentes, são problemas para alguns, eles não sabem como obter nenhum prazer, seja ele sábio ou doloroso para a alma, e não nossos deveres porque como. A empresa em si é uma empresa de muito sucesso. Prazer para alguns, a livre distinção do desejo laborioso de assumir as dores como dores. Algo a procurar, a menos que você veja a realidade da vida, é um erro! Quem, por assim dizer, com o trabalho do presente. A empresa em si é uma empresa de muito sucesso. Por favor! Eles são impedidos pelos acusadores, nascidos e afligidos por isso. E porque ele está em busca de prazer! A menos que eles forneçam, explicarei a verdade em outros momentos."
    },
    english: {
        title: "Hello World",
        description: "The company itself is a very successful company. A wise person will rebuke a thing by right of annoyance, but by flattery he is bound, and in the like manner a. At times like this, we are the least worthy of suffering. Hello, it's very difficult to get rid of the fat. Most of all, born, the very present, trouble to some, they do not know how to obtain any pleasure, whether it is wise or pain of the soul, not our duties because how. The company itself is a very successful company. Pleasure to some, the free distinction of the laborious desire to assume pains as pains. Something to look for unless you see the reality of life is a mistake! Who, as it were, with the labor of the present. The company itself is a very successful company. Just please! They are hindered by the accusers, born and afflicted by it. And because he is looking for pleasure! Unless they provide, I will explain the truth at other times."
    },
    spanish: {
        title: "Hola mundo",
        description: "La empresa en sí es una empresa muy exitosa. El sabio reprende una cosa por derecho de molestia, pero por adulación está obligado, y de la misma manera a. En momentos como este, somos los menos dignos de sufrir. Hola, es muy difícil deshacerse de la grasa. Sobre todo, las molestias nacidas, muy presentes, para algunos, no saben cómo obtener ningún placer, ya sea sabio o dolor del alma, no nuestros deberes porque cómo. La empresa en sí es una empresa muy exitosa. Placer para algunos, la libre distinción del deseo laborioso de asumir los dolores como dolores. ¡Algo que buscar a menos que veas la realidad de la vida es un error! Quien, por así decirlo, con el trabajo del presente. La empresa en sí es una empresa muy exitosa. ¡Solo porfavor! Son obstaculizados por los acusadores, nacidos y afligidos por ello. ¡Y porque busca placer! A menos que lo proporcionen, explicaré la verdad en otros momentos."
    }
}