const VALUES_CONTAINER = document.getElementById('values-container');
const TEAMWORK_CONTAIENER = document.getElementById('value-teamwork');
const SERVICE_CONTAIENER = document.getElementById('value-service');
const EMPATHY_CONTAIENER = document.getElementById('value-empathy');
const ETHIC_CONTAIENER = document.getElementById('value-ethic');
const EFFICIENCY_CONTAIENER = document.getElementById('value-efficiency');

const teamwork_button = document.getElementById('button-teamwork');
teamwork_button.addEventListener('click', ShowValueTeamwork);
const service_button = document.getElementById('button-service');
service_button.addEventListener('click', ShowValueService);
const empathy_button = document.getElementById('button-empathy');
empathy_button.addEventListener('click', ShowValueEmpathy);
const ethic_button = document.getElementById('button-ethic');
ethic_button.addEventListener('click', ShowValueEthic);
const efficiency_button = document.getElementById('button-efficiency');
efficiency_button.addEventListener('click', ShowValueEfficiency);
/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let teamwork = document.createElement('article');
teamwork.className = 'main-identity-values-value';
teamwork.id = 'value';
let imagen_teamwork = document.createElement('img');
imagen_teamwork.src = './assets/icons/teamwork-icon.svg'
imagen_teamwork.className = 'main-identity-values-value-img';
let titulo_teamwork = document.createElement('h3');
titulo_teamwork.className = 'main-identity-values-value-title';
let texto_titulo_teamwork = document.createTextNode('Trabajo en equipo');
let parrafo_teamwork = document.createElement('p');
parrafo_teamwork.className = 'main-identity-values-value-text';
let texto_parrafo_teamwork = document.createTextNode('Somos un conjunto de personas comprometidas con nuestro rol para lograr un objetivo en común. (Personas, organización y objetivo común).');  
/*  Se crea la estructura del artículo con appendChild  */
teamwork.appendChild(imagen_teamwork);
teamwork.appendChild(titulo_teamwork);
titulo_teamwork.appendChild(texto_titulo_teamwork);
teamwork.appendChild(parrafo_teamwork);
parrafo_teamwork.appendChild(texto_parrafo_teamwork);
/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let service = document.createElement('article');
service.className = 'main-identity-values-value';
let imagen_service = document.createElement('img');
imagen_service.src = './assets/icons/serviceAttitude-icon.svg'
imagen_service.className = 'main-identity-values-value-img';
let titulo_service = document.createElement('h3');
titulo_service.className = 'main-identity-values-value-title';
let texto_titulo_service = document.createTextNode('Actitud de servicio');
let parrafo_service = document.createElement('p');
parrafo_service.className = 'main-identity-values-value-text';
let texto_parrafo_service = document.createTextNode('Nos interesamos significativamente por los demás, donde todos salgan beneficiados.'); 
/*  Se crea la estructura del artículo con appendChild  */
service.appendChild(imagen_service);
service.appendChild(titulo_service);
titulo_service.appendChild(texto_titulo_service);
service.appendChild(parrafo_service);
parrafo_service.appendChild(texto_parrafo_service);
/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let empathy = document.createElement('article');
empathy.className = 'main-identity-values-value';
let imagen_empathy = document.createElement('img');
imagen_empathy.src = './assets/icons/empathy-icon.svg'
imagen_empathy.className = 'main-identity-values-value-img';
let titulo_empathy = document.createElement('h3');
titulo_empathy.className = 'main-identity-values-value-title';
let texto_titulo_empathy = document.createTextNode('Empatía');
let parrafo_empathy = document.createElement('p');
parrafo_empathy.className = 'main-identity-values-value-text';
let texto_parrafo_empathy = document.createTextNode('Comprendemos, escuchamos activamente, desarrollamos la capacidad de actuar de manera solidaria y responsable para mejorar la calidad de vida de los residentes y de nuestros compañeros.'); 
/*  Se crea la estructura del artículo con appendChild  */
empathy.appendChild(imagen_empathy);
empathy.appendChild(titulo_empathy);
titulo_empathy.appendChild(texto_titulo_empathy);
empathy.appendChild(parrafo_empathy);
parrafo_empathy.appendChild(texto_parrafo_empathy);
/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let ethic = document.createElement('article');
ethic.className = 'main-identity-values-value';
let imagen_ethic = document.createElement('img');
imagen_ethic.src = './assets/icons/ethic-icon.svg'
imagen_ethic.className = 'main-identity-values-value-img';
let titulo_ethic = document.createElement('h3');
titulo_ethic.className = 'main-identity-values-value-title';
let texto_titulo_ethic = document.createTextNode('Ética');
let parrafo_ethic = document.createElement('p');
parrafo_ethic.className = 'main-identity-values-value-text';
let texto_parrafo_ethic = document.createTextNode('Logramos diferenciar y destacar lo mejor de las personas, pues nos concentramos en los derechos y responsabilidades propios y de los demás, influyendo para solucionar conflictos con equidad.'); 
/*  Se crea la estructura del artículo con appendChild  */
ethic.appendChild(imagen_ethic);
ethic.appendChild(titulo_ethic);
titulo_ethic.appendChild(texto_titulo_ethic);
ethic.appendChild(parrafo_ethic);
parrafo_ethic.appendChild(texto_parrafo_ethic);
/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let efficiency = document.createElement('article');
efficiency.className = 'main-identity-values-value';
let imagen_efficiency = document.createElement('img');
imagen_efficiency.src = './assets/icons/efficiency-icon.svg'
imagen_efficiency.className = 'main-identity-values-value-img';
let titulo_efficiency = document.createElement('h3');
titulo_efficiency.className = 'main-identity-values-value-title';
let texto_titulo_efficiency = document.createTextNode('Eficiencia');
let parrafo_efficiency = document.createElement('p');
parrafo_efficiency.className = 'main-identity-values-value-text';
let texto_parrafo_efficiency = document.createTextNode('Logramos los objetivos con la menor cantidad de recursos.'); 
/*  Se crea la estructura del artículo con appendChild  */
efficiency.appendChild(imagen_efficiency);
efficiency.appendChild(titulo_efficiency);
titulo_efficiency.appendChild(texto_titulo_efficiency);
efficiency.appendChild(parrafo_efficiency);
parrafo_efficiency.appendChild(texto_parrafo_efficiency);

/*  Las siguientes funciones reemplazan el botón del valor que se selecciona por el valor desplegado 
    y reemplazan el primer hijo de todos los demás valores por el botón de su valor correspondiente.    */

/*  Hice todo lo siguiente, dado que había un error en el que al darle click al primer botón
    se quedaba atorado el elemento hasta que se le diera click a otro botón y de regreso. 
    No encontré como tal la raíz del error, pero repliqué la "solución" haciendo que la 
    primera vez que se le diera click a un botón, me cargara el elemento, luego otro y de nuevo 
    el primero, así logré que no se notara.                                                             */

//  Variable donde se guarda la primera vez que se da click a cualquier botón.
let first = 0;

function ShowValueTeamwork () {
//  Condicional que verifica si es la primera vez que se da el click
    if (first == 0) {
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);

        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service, service_button);

        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);
//  Cambia el valor de first, indicando que ya se dio el primer click
        first = 1;
    }
    else {
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);
    }

}
function ShowValueService () {
    if (first == 0) {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service, service_button);

        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);

        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service, service_button)

        first = 1;
    }
    else {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service, service_button);
    }
}
function ShowValueEmpathy () {
    if (first == 0) {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy, empathy_button);

        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);

        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy, empathy_button);

        first = 1;
    }
    else {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy, empathy_button);
    }
}
function ShowValueEthic () {
    if (first == 0) {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic, ethic_button);

        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);

        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic, ethic_button);

        first = 1;
    }
    else {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic, ethic_button);
    }
}
function ShowValueEfficiency () {
    if (first == 0) {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency, efficiency_button);

        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
        TEAMWORK_CONTAIENER.replaceChild(teamwork, teamwork_button);

        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency, efficiency_button);

        first = 1;
    }
    else {
        TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
        SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
        EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
        ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
        EFFICIENCY_CONTAIENER.replaceChild(efficiency, efficiency_button);
    }
}

function ReplaceButtons () {
    TEAMWORK_CONTAIENER.replaceChild(teamwork_button, TEAMWORK_CONTAIENER.firstChild);
    SERVICE_CONTAIENER.replaceChild(service_button, SERVICE_CONTAIENER.firstChild);
    EMPATHY_CONTAIENER.replaceChild(empathy_button, EMPATHY_CONTAIENER.firstChild);
    ETHIC_CONTAIENER.replaceChild(ethic_button, ETHIC_CONTAIENER.firstChild);
    EFFICIENCY_CONTAIENER.replaceChild(efficiency_button, EFFICIENCY_CONTAIENER.firstChild);
}