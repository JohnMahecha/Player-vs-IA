const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

sectionSeleccionarAtaque.style.display = "none"

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let mascotas = []
let mokeponesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMascotas
let inputdante
let inputryu
let inputcortana
let inputlangostelvis
let inputtucapalma
let inputpydos
let mascotaJugador
let mascotaJugadorObjeto
let ataquesNarberalGama
let ataquesMokeponEnemigo
let botonTrueno
let botonFuego
let botonMagia
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./img/Mapafondo2.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 970
    if(anchoDelMapa > anchoMaximoDelMapa) {
        anchoDelMapa = anchoMaximoDelMapa - 20
    }

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class NarberalGama {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 125
        this.alto = 125
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMascota() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let dante = new NarberalGama("Dante", "./img/Dante.png", 5, "./img/Dante2.png")
let ryu = new NarberalGama("Ryu", "./img/Ryu.png", 5, "./img/Ryu2.png")
let cortana = new NarberalGama("Cortana", "./img/Cortana.png", 5, "./img/Cortana2.png")
let langostelvis = new NarberalGama("Langostelvis", "./img/pikachu.png", 5, "./img/pikachu2.png")
let tucapalma = new NarberalGama("Tucapalma", "./img/bulbasaur.png", 5, "./img/bulbasaur2.png")
let pydos = new NarberalGama("Pydos", "./img/Charizard.png", 5, "./img/Charizard2.png")

const dante_ataques = [
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
]

    dante.ataques.push(...dante_ataques)

const ryu_ataques = [
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "⛈️", id: "boton-trueno" },
]

    ryu.ataques.push(...ryu_ataques)

const cortana_ataques = [
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
]

    cortana.ataques.push(...cortana_ataques)

const langostelvis_ataques = [
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
]

    langostelvis.ataques.push(...langostelvis_ataques)

const tucapalma_ataques = [
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "⛈️", id: "boton-trueno" },
]

    tucapalma.ataques.push(...tucapalma_ataques)

const pydos_ataques = [
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "⛈️", id: "boton-trueno" },
    { nombre: "🧙‍♂️", id: "boton-magia" },
]

    pydos.ataques.push(...pydos_ataques)

mascotas.push(dante, ryu, cortana, langostelvis, tucapalma, pydos)

function iniciarElJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    mascotas.forEach((mascotas) => {opcionDeMascotas = `
        <input type="radio" name="mascota" id=${mascotas.nombre} />
        <label class="tarjeta-de-narberalgama" for=${mascotas.nombre}>
            <p>${mascotas.nombre}</p>
            <img src=${mascotas.foto} alt=${mascotas.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMascotas
        inputdante = document.getElementById("Dante")
        inputryu = document.getElementById("Ryu")
        inputcortana = document.getElementById("Cortana")
        inputlangostelvis = document.getElementById("Langostelvis")
        inputtucapalma = document.getElementById("Tucapalma")
        inputpydos = document.getElementById("Pydos")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
        alert("Que Inicie El Juego")
    botonReiniciar.addEventListener("click", reiniciarJuego)
    
    unirseAlJuego()
}

    function unirseAlJuego() {
        fetch(`http://192.168.0.7:8080/unirse`)
            .then(function (res) {
                if (res.ok) {
                    res.text()
                        .then(function (respuesta) {
                            console.log(respuesta)
                            jugadorId = respuesta
                        })
                }
            })
}

    function seleccionarMascotaJugador() {
    
    if(inputdante.checked) {
        spanMascotaJugador.innerHTML = inputdante.id
        mascotaJugador = inputdante.id
    }
        else if(inputryu.checked) {
            spanMascotaJugador.innerHTML = inputryu.id
            mascotaJugador = inputryu.id
    }
        else if(inputcortana.checked) {
            spanMascotaJugador.innerHTML = inputcortana.id
            mascotaJugador = inputcortana.id
    }
        else if(inputlangostelvis.checked) {
            spanMascotaJugador.innerHTML = inputlangostelvis.id
            mascotaJugador = inputlangostelvis.id
    }
        else if(inputtucapalma.checked) {
            spanMascotaJugador.innerHTML = inputtucapalma.id
            mascotaJugador = inputtucapalma.id
    }
        else if(inputpydos.checked) {
            spanMascotaJugador.innerHTML = inputpydos.id
            mascotaJugador = inputpydos.id
    }
        else {
            alert("Debes elegir una mascota")
            return
        }

        sectionSeleccionarMascota.style.display = "none"

        seleccionaMokepon(mascotaJugador)

        extraerAtaques(mascotaJugador)
        sectionVerMapa.style.display = "flex"
        iniciarMapa()
    }

    function seleccionaMokepon(mascotaJugador) {
        fetch(`http://192.168.0.7:8080/mokepon/${jugadorId}/`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
    }

    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mascotas.length; i++) {
            if (mascotaJugador === mascotas[i].nombre) {
                ataques = mascotas[i].ataques}
        }
        mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesNarberalGama = `
            <button id=${ataque.id} class="boton-de-ataque BAtaque"> ${ataque.nombre}
            </button>
            `
            contenedorAtaques.innerHTML += ataquesNarberalGama
        })
        botonTrueno = document.getElementById("boton-trueno")
        botonFuego = document.getElementById("boton-fuego")
        botonMagia = document.getElementById("boton-tagia")

        botones = document.querySelectorAll(".BAtaque")
    }

    function secuenciaAtaque() {
        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                if (e.target.textContent === "⛈️") {
                    ataqueJugador.push("TRUENO")
                    console.log(ataqueJugador)
                    boton.style.background = "#112f58"
                    boton.disabled = true
                }   else if (e.target.textContent === "🔥") {
                        ataqueJugador.push("FUEGO")
                        console.log(ataqueJugador)
                        boton.style.background = "#112f58"
                        boton.disabled = true
                }   else {
                        ataqueJugador.push("MAGIA")
                        console.log(ataqueJugador)
                        boton.style.background = "#112f58"
                        boton.disabled = true
                }
                if(ataqueJugador.length === 5) {
                    enviarAtaques()
                }
            })
        })
    }

    function enviarAtaques() {
        fetch(`http://192.168.0.7:8080/mokepon/${jugadorId}/ataques`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ataques: ataqueJugador
            })
        }) 
        
        intervalo = setInterval(obternerAtaques, 50)
    }

    function obternerAtaques() {
        fetch(`http://192.168.0.7:8080/mokepon/${enemigoId}/ataques`)
            .then(function (res) {
                if(res.ok) {
                    res.json()
                        .then(function ({ataques}) {
                            if(ataques.length === 5) {
                                ataqueEnemigo = ataques
                                combate()
                            }                        })
                }
            })
    }
    
    function seleccionarMascotaEnemigo(enemigo){
        spanMascotaEnemigo.innerHTML = enemigo.nombre
        ataquesMokeponEnemigo = enemigo.ataques
        secuenciaAtaque()
    }
    
    function ataqueAleatorioEnemigo() {
        let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

            if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
                ataqueEnemigo.push("TRUENO")
            }
            else if(ataqueAleatorio == 3 || ataqueAleatorio == 4) {
                ataqueEnemigo.push("FUEGO")
            }
            else
                {ataqueEnemigo.push("MAGIA")
            }
            console.log(ataqueEnemigo)
            iniciarPelea()
    }

    function iniciarPelea () {
        if (ataqueJugador.length === 5) {
            combate ()
        }
    }

    function indexAmbosOponentes(jugador, enemigo) {
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    }

    function combate () {
        clearInterval(intervalo)

        for (let index = 0; index < ataqueJugador.length; index++) {
            if(ataqueJugador[index] === ataqueEnemigo[index]) {
                indexAmbosOponentes(index, index)
                crearMensaje("EMPATE")
            }   else if (ataqueJugador[index] === "TRUENO" && ataqueEnemigo [index] === "MAGIA") {
                    indexAmbosOponentes(index, index)
                    crearMensaje ("GANASTE")
                    victoriasJugador++
                    spanVidasJugador.innerHTML = victoriasJugador
            }   else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo [index] === "TRUENO") {
                    indexAmbosOponentes(index, index)
                    crearMensaje ("GANASTE")
                    victoriasJugador++
                    spanVidasJugador.innerHTML = victoriasJugador
            }   else if (ataqueJugador[index] === "MAGIA" && ataqueEnemigo [index] === "FUEGO") {
                    indexAmbosOponentes(index, index)
                    crearMensaje ("GANASTE")
                    victoriasJugador++
                    spanVidasJugador.innerHTML = victoriasJugador
            }   else {
                    indexAmbosOponentes(index, index)
                    crearMensaje ("PERDISTE")
                    victoriasEnemigo++
                    spanVidasEnemigo.innerHTML = victoriasEnemigo
            }
        }
            revisarVidas()
    }
    function revisarVidas () {
            if (victoriasJugador === victoriasEnemigo) {
                crearMensajeFinal("ESTO FUE UN EMPATE PERRO!!!")
            } else if (victoriasJugador > victoriasEnemigo) {
                crearMensajeFinal("FELICITACIONES, ERES UN CRACK, GANASTE :)")
            } else {
                crearMensaje("PERDISTE, ERES MUY MALO PERRO")
            }
        }
            
    function crearMensaje(resultado) {
        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    }
    function crearMensajeFinal(resultadoFinal) {
        sectionMensajes.innerHTML = resultadoFinal
            sectionReiniciar.style.display = "block"
    }
    function reiniciarJuego() {
        location.reload()
    }
    function aleatorio(min, max) 
        {return Math.floor(Math.random() * (max - min + 1) + min)
    } 

    function pintarCanvas() {
        mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
        mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
        lienzo.clearRect(0, 0, mapa.width, mapa.height)
        lienzo.drawImage(
            mapaBackground,
            0,
            0,
            mapa.width,
            mapa.height
        )
        mascotaJugadorObjeto.pintarMascota()

        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

        mokeponesEnemigos.forEach(function (mokepon) {
            mokepon.pintarMascota()
            revisarColision(mokepon)
        })
    }

    function enviarPosicion(x, y) {
        fetch(`http://192.168.0.7:8080/mokepon/${jugadorId}/posicion`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                x,
                y
            })
        })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({enemigos}) {
                        mokeponesEnemigos = enemigos.map(function (enemigo) {
                            let mokeponEnemigo = null
                            const mokeponNombre = enemigo.mokepon.nombre || ""
                            if(mokeponNombre === "Dante") {
                                mokeponEnemigo = new NarberalGama("Dante", "./img/Dante.png", 5, "./img/Dante2.png", enemigo.id)
                            } else if(mokeponNombre === "Ryu") {
                                mokeponEnemigo = new NarberalGama("Ryu", "./img/Ryu.png", 5, "./img/Ryu2.png", enemigo.id)
                            } else if(mokeponNombre === "Cortana") {
                                mokeponEnemigo = new NarberalGama("Cortana", "./img/Cortana.png", 5, "./img/Cortana2.png", enemigo.id)
                            } else if(mokeponNombre === "Langostelvis") {
                                mokeponEnemigo = new NarberalGama("Langostelvis", "./img/pikachu.png", 5, "./img/pikachu2.png", enemigo.id)
                            } else if(mokeponNombre === "Tucapalma") {
                                mokeponEnemigo = new NarberalGama("Tucapalma", "./img/bulbasaur.png", 5, "./img/bulbasaur2.png", enemigo.id)
                            } else if(mokeponNombre === "Pydos") {
                                mokeponEnemigo = new NarberalGama("Pydos", "./img/Charizard.png", 5, "./img/Charizard2.png", enemigo.id)
                            }

                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y

                            return mokeponEnemigo
                        })
                    })
                }
            })
        }

    function moverDerecha () {
        mascotaJugadorObjeto.velocidadX = 5
    }

    function moverIzquierda () {
        mascotaJugadorObjeto.velocidadX = -5
    }

    function moverAbajo () {
        mascotaJugadorObjeto.velocidadY = 5
    }

    function moverArriba () {
        mascotaJugadorObjeto.velocidadY = -5
    }

    function detenerMovimiento() {
        mascotaJugadorObjeto.velocidadX = 0
        mascotaJugadorObjeto.velocidadY = 0
    }

    function sePresionoUnaTecla(event) {
        switch (event.key) {
            case "ArrowUp": 
                moverArriba()
                break
            case "ArrowDown":
                moverAbajo()
                break
            case "ArrowLeft":
                moverIzquierda()
                break
            case "ArrowRight":
                moverDerecha()
                break
            default:
                break
        }
    }

    function iniciarMapa() {
        mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
        intervalo = setInterval(pintarCanvas, 50)

        window.addEventListener("keydown", sePresionoUnaTecla)

        window.addEventListener("keyup", detenerMovimiento)
    }

    function obtenerObjetoMascota() {
        for (let i = 0; i < mascotas.length; i++) {
            if (mascotaJugador === mascotas[i].nombre) {
                return mascotas[i]}
        }
    }

    function revisarColision(enemigo) {
        const arribaEnemigo = enemigo.y
        const abajoEnemigo = enemigo.y + enemigo.alto
        const derechaEnemigo = enemigo.x + enemigo.ancho
        const izquierdaEnemigo = enemigo.x

        const arribaMascota = mascotaJugadorObjeto.y
        const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
        const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
        const izquierdaMascota = mascotaJugadorObjeto.x

        if(
            abajoMascota < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo  
        ) {
            return
        }

        detenerMovimiento()
        clearInterval(intervalo)
        console.log("se detecto una colision");

        enemigoId = enemigo.id
        sectionSeleccionarAtaque.style.display = "flex"
        sectionVerMapa.style.display = "none"
        seleccionarMascotaEnemigo(enemigo)
    }

window.addEventListener("load", iniciarElJuego)