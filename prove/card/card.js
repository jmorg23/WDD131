console.log("1");

const card = {
  

    sections: [
        { 
            class: "Swamp Beast Guy", 
            level: 1, 
            health: 100
        },


    ],
    attacked: function () {

        this.sections[0].health -= 20;

        if (this.sections[0].health <= 0) {
            this.sections[0].health = 0;
            alert("he is dead");
        }
  
        renderSections(this.sections);
    },

    levelup: function () {
        this.sections[0].level += 1;
        renderSections(this.sections);
    }
};

function sectionTemplate(section) {
    return `
        <p><strong>Class:</strong> ${section.class}</p>
        <p><strong>Level:</strong> ${section.level}</p>
        <p><strong>Health:</strong> ${section.health}</p>
    `;
}
function renderSections(sections) {

    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(card.sections);


document.querySelector("#attacked").addEventListener("click", function () {
    card.attacked();
});
document.querySelector("#level").addEventListener("click", function () {
    card.levelup();
});