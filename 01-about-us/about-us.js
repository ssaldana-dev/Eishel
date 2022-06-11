const VALUES_CONTAINER = document.getElementById('values-container');
const TEAMWORK_CONTAIENER = document.getElementById('value-teamwork');
const SERVICE_CONTAIENER = document.getElementById('value-service');
const EMPATHY_CONTAIENER = document.getElementById('value-empathy');
const ETHIC_CONTAIENER = document.getElementById('value-ethic');
const EFFICIENCY_CONTAIENER = document.getElementById('value-efficiency');

/*  Se declaran las variables que contienen los abjetos HTML y sus contenidos
    así como sus clases y rutas.     */
let teamwork = document.createElement('article');
teamwork.className = 'main-identity-values-value';
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

service.appendChild(imagen_service);
service.appendChild(titulo_service);
titulo_service.appendChild(texto_titulo_service);
service.appendChild(parrafo_service);
parrafo_service.appendChild(texto_parrafo_service);

let teamwork_counter = 0;
let service_counter = 0;
let empathy_counter = 0;
let ethic_counter = 0;
let efficiency_counter = 0;

function ShowValue () {
    TEAMWORK_CONTAIENER.appendChild(teamwork);
    SERVICE_CONTAIENER.appendChild(service);
}

