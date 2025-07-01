function addProjects(e) {
    const projects = [
        {
            title: "Renovatie appartement",
            img: "/home/img/interior/Renovatie binnen 3.jpg",
        },
        {
            title: "Volledige make-over",
            img: "/home/img/interior/Renovatie binnen 5.jpg",
        },
        {
            title: "Renovatie appartement",
            img: "/realisaties/img/natienlaan.jpg",
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