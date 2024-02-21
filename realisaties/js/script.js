function addProjects(e) {
    const projects = [
        {
            title: "Voorbeeld project",
            img: "/realisaties/img/temp.jpg",
            link: "/realisaties/project-1/",
        },
        {
            title: "Voorbeeld project",
            img: "/realisaties/img/temp.jpg",
            link: "/realisaties/project-1/",
        },
        {
            title: "Voorbeeld project",
            img: "/realisaties/img/temp.jpg",
            link: "/realisaties/project-1/",
        },
        {
            title: "Voorbeeld project",
            img: "/realisaties/img/temp.jpg",
            link: "/realisaties/project-1/",
        },
    ];

    const target = document.querySelector('#project-wrapper');

    if (!target) {
        return;
    }

    const cards = projects.map(item => {

        return `
            <a href="${item.link}" class="item-link">
                <div class="item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="content">
                        <h3>
                            ${item.title}
                        </h3>
                        <p class="read-more">
                            Lees meer
                        </p>
                    </div>
                    <div class="overlay"></div>
                </div>
            </a>
        `;
    }).join('');

    target.innerHTML = cards;
};

$(document).ready(addProjects);