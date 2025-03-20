import "./styles/index.scss";

interface FormInputData {
    name: string;
    contact: string;
    description: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const technologiesSection = document.querySelector('.about');
    const technologiesSectionHeader = technologiesSection?.querySelector("h2") as Element | null;
    const technologiesSectionCarousel = technologiesSection?.querySelector(".about-carousel") as Element | null;

    document.querySelectorAll('.about-item').forEach(item => {
        item.addEventListener('click', () => handleTechItemClick(item, technologiesSectionHeader, technologiesSectionCarousel));
    });

    const form = document.getElementById("contact-form") as HTMLFormElement;
    form.addEventListener("submit", handleFormSubmit);
});

function handleTechItemClick(item: Element, header: Element | null, carousel: Element | null) {
    const wasMaximized = item.classList.contains('maximized');

    if (!wasMaximized) {
        setTimeout(() => {
            maximizeItem(item);
        }, 2000);
    } 

    minimizeAllOtherItems(item);
    setTimeout(() => {
        adjustSectionLayout(header, carousel);
    }, 2000);
}

function handleFormSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData: FormInputData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        contact: (document.getElementById("contact") as HTMLInputElement).value,
        description: (document.getElementById("description") as HTMLTextAreaElement).value,
    };

    console.log("Formulário enviado:", formData);
    alert("Obrigado pelo contato! Retornarei em breve.");

    form.reset();
}

function minimizeItem(item: Element) {
    item.classList.add('minimized');
    item.classList.remove('maximized');
}

function maximizeItem(item: Element) {
    item.classList.add('maximized');
    item.classList.remove('minimized');
}

function minimizeAllOtherItems(item: Element) {
    document.querySelectorAll('.about-item').forEach((otherItem) => {
        if (!otherItem.classList.contains('minimized') && !otherItem.classList.contains('maximized')) {
            if(otherItem !== item){
                minimizeItem(otherItem);
            }
        }
    });
}

function adjustSectionLayout(header: Element | null, carousel: Element | null) {
    if (header instanceof HTMLElement) {
        header.style.top = "50px";
    }

    if (carousel instanceof HTMLElement) {
        carousel.style.top = "0px";
    }
}