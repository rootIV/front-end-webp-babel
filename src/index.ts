import "./styles/index.scss";

interface FormInputData {
    name: string;
    contact: string;
    description: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const techSection = document.querySelector('.technologies');
    const tecSectionH2 = techSection?.querySelector("h2");
    const tecSectionCarousel = techSection?.querySelector(".tech-carousel");

    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('click', function () {
            
            const wasMaximized = item.classList.contains('maximized');

            if (wasMaximized) {
                document.querySelectorAll('.tech-item').forEach(innerItem => {
                    innerItem.classList.add('minimized');
                    innerItem.classList.remove('maximized');
                });

                item.classList.add('minimized');
            } 
            else {
                item.classList.remove("minimized");
                item.classList.add("maximized");
                
                document.querySelectorAll('.tech-item').forEach(innerItem => {
                    if (innerItem !== item) {
                        innerItem.classList.remove('maximized');
                        innerItem.classList.add('minimized');
                    }
                });
            }

            if (tecSectionH2 instanceof HTMLElement) {
                tecSectionH2.style.top = "50px";
            }

            if (tecSectionCarousel instanceof HTMLElement) {
                tecSectionCarousel.style.top = "0px";
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
