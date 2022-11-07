function createGames1(player1, hour1, player2, player3, hour2, player4, player5, hour3, player6, player7, hour4, player8){
return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="${player1}">
        <strong>${hour1}</strong>
        <img src="assets/icon-${player2}.svg" alt="${player2}">
    </li>

    <li>
        <img src="assets/icon-${player3}.svg" alt="${player3}">
        <strong>${hour2}</strong>
        <img src="assets/icon-${player4}.svg" alt="${player4}">
    </li>

    <li>
        <img src="assets/icon-${player5}.svg" alt="${player5}">
        <strong>${hour3}</strong>
        <img src="assets/icon-${player6}.svg" alt="${player6}">
    </li>

    <li>
        <img src="assets/icon-${player7}.svg" alt="${player7}">
        <strong>${hour4}</strong>
        <img src="assets/icon-${player8}.svg" alt="${player8}">
    </li>
`
}

function createGames2(player01, hour1, player02, player03, hour2, player04, player05, hour3, player06, player07, hour4, player08){
    return `
    <li>
        <img src="assets/icon-${player01}.svg" alt="${player01}">
        <strong>${hour1}</strong>
        <img src="assets/icon-${player02}.svg" alt="${player02}">
    </li>

    <li>
        <img src="assets/icon-${player03}.svg" alt="${player03}">
        <strong>${hour2}</strong>
        <img src="assets/icon-${player04}.svg" alt="${player04}">
    </li>

    <li>
        <img src="assets/icon-${player05}.svg" alt="${player05}">
        <strong>${hour3}</strong>
        <img src="assets/icon-${player06}.svg" alt="${player06}">
    </li>

    <li>
        <img src="assets/icon-${player07}.svg" alt="${player07}">
        <strong>${hour4}</strong>
        <img src="assets/icon-${player08}.svg" alt="${player08}">
    </li>
`
}

function createGames3(player001, hour1, player002, player003, hour2, player004, player005, hour3, player006, player007, hour4, player008){
    return `
    <li>
        <img src="assets/icon-${player001}.svg" alt="${player001}">
        <strong>${hour1}</strong>
        <img src="assets/icon-${player002}.svg" alt="${player002}">
    </li>

    <li>
        <img src="assets/icon-${player003}.svg" alt="${player003}">
        <strong>${hour2}</strong>
        <img src="assets/icon-${player004}.svg" alt="${player004}">
    </li>

    <li>
        <img src="assets/icon-${player005}.svg" alt="${player005}">
        <strong>${hour3}</strong>
        <img src="assets/icon-${player006}.svg" alt="${player006}">
    </li>

    <li>
        <img src="assets/icon-${player007}.svg" alt="${player007}">
        <strong>${hour4}</strong>
        <img src="assets/icon-${player008}.svg" alt="${player008}">
    </li>
`
}

let delay = -0.4
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2> ${date} <span> ${day} </span></h2>

        <ul>  
            ${games}
        </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta-feira", 
    createGames1("suiça", "07:00", "camarões", 
                 "uruguai", "10:00", "coreia_do_sul",
                 "portugal", "13:00", "gana",
                 "brazil", "16:00", "servia")
) +
    createCard("28/11", "segunda-feira", 
    createGames2("camarões", "07:00", "servia",
                 "coreia_do_sul", "10:00", "gana",
                 "brazil", "13:00", "suiça",
                 "portugal", "16:00", "uruguai")
) +
    createCard("02/12", "sexta-feira",
    createGames3("coreia_do_sul", "12:00", "portugal",
                 "gana", "12:00", "uruguai",
                 "servia", "16:00", "suiça",
                 "camarões", "16:00", "brazil")
)