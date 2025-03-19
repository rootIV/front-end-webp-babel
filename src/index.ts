import "./styles/index.scss";

interface FormInputData {
    name: string;
    contact: string;
    description: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const techSection = document.querySelector(".technologies");
    const techCarousel = document.querySelector(".tech-carousel");
    const minimizedContainer = document.createElement("div");
    minimizedContainer.classList.add("minimized-items-container");

    techSection?.appendChild(minimizedContainer);

    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('click', function () {
            const wasMaximized = item.classList.contains('maximized');

            document.querySelectorAll('.tech-item').forEach(innerItem => {
                innerItem.classList.remove('maximized');
                innerItem.classList.add('minimized');
                minimizedContainer.appendChild(innerItem);
            });

            if (wasMaximized) {
                techSection?.classList.remove("maximized");
                techCarousel?.append(...Array.from(document.querySelectorAll(".tech-item")));
            } 
            else {
                techSection?.classList.add("maximized");
                item.classList.add("maximized");
                item.classList.remove("minimized");
            }

            item.classList.remove('minimized');
            item.classList.add('maximized');
        });
    });

    const form = document.getElementById("contact-form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData: FormInputData = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            contact: (document.getElementById("contact") as HTMLInputElement).value,
            description: (document.getElementById("description") as HTMLTextAreaElement).value,
        };

        console.log("Formulário enviado:", formData);
        alert("Obrigado pelo contato! Retornarei em breve.");

        form.reset();
    });
});
