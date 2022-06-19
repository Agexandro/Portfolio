async function req() {
    const request = await fetch("https://raw.githubusercontent.com/Agexandro/portfolio-nextjs/main/public/projects.json");
    const data = await request.json();
    for (let i = 0; i < data.length; i++) {
        fillProjects(createCard(data[i]));
    }
};

function createCard(data) {
    const link = document.createElement("a");
    link.href = data.demo;
    link.target = "blank"

    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.src = data.image;

    link.appendChild(img);
    div.appendChild(link);

    return div;
}

async function fillProjects(card) {
    $(".projects").append(card);
}

req()