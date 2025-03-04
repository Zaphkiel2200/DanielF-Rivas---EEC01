class Componente extends HTMLElement {
    constructor() {
        super();
        console.log('Elemento creado');
        this.attachShadow({mode: 'open'});
        this.shadowRooot.innerHTML = `
        style>
            p {
                color: red;
            }
        </style>
        <p>Hola mundo</p>
        `;
    }
}


export default Componente;