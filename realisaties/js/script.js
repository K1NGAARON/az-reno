function addProjects(e) {
    const projects = [
        {
            title: "Renovatie appartement",
            img: "/realisaties/img/appartement-zeebrugge.jpg",
        },
        {
            title: "Volledige make-over",
            img: "/realisaties/img/terras.jpg",
        },
        {
            title: "Renovatie appartement",
            img: "/realisaties/img/natienlaan.jpg",
        },
        {
            title: "Vernieuwen interieur",
            img: "/realisaties/img/astoria.jpg",
        },
        {
            title: "Totaal interieur inrichting",
            img: "/realisaties/img/bar-a-boire.jpg",
        },
        {
            title: "Totaalrenovatie",
            img: "/realisaties/img/dumortierlaan.jpg",
        },
        {
            title: "Renovatie & isolatie",
            img: "/realisaties/img/gevel.jpg",
        },
        {
            title: "Voor fijnproevers",
            img: "/realisaties/img/keuken-installatie.jpg",
        },
        {
            title: "Totaalrenovatie",
            img: "/realisaties/img/penthouse.jpg",
        },
    ];

    const target = document.querySelector('#project-wrapper');

    if (!target) {
        return;
    }

    const shuffledArray = projects.sort((a, b) => 0.5 - Math.random());
    const cards = shuffledArray.map(item => {

        return `
            <div class="item">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                </div>
                <div class="overlay"></div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
};

$(document).ready(addProjects);