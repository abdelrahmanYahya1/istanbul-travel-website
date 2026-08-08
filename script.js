const tours = [
    {
        title: "Historical Tour",
        image: "images/Topkapi.jpg",
        desc1: "A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace.",
        desc2: "You can also explore Istanbul's diverse neighborhoods, each with its own character and charm.",
        details: "The Historical Tour is one of the best experiences in Istanbul. It includes the Blue Mosque, Hagia Sophia, Topkapi Palace, Basilica Cistern, and the Grand Bazaar. During this tour visitors discover more than 1500 years of history."
    },

    {
        title: "Blue Mosque",
        image: "images/caption.jpg",
        desc1: "The Blue Mosque is one of the most famous mosques in Turkey.",
        desc2: "It is known for its six minarets and beautiful blue interior tiles.",
        details: "The Blue Mosque, also known as Sultan Ahmed Mosque, was built between 1609 and 1616. It is famous for its six minarets and over twenty thousand handmade blue Iznik tiles decorating the interior."
    },

    {
        title: "Galata Tower",
        image: "images/galata.jpg",
        desc1: "Galata Tower offers one of the best panoramic views of Istanbul.",
        desc2: "Visitors can enjoy restaurants and an observation deck.",
        details: "Galata Tower is a medieval stone tower built in 1348. It stands about 67 meters tall and offers one of the best panoramic views of Istanbul from its observation deck."
    },
    {
        title: "Fatih Mosque",
        image: "images/fatih.jpg",
        desc1: "Fatih Mosque is one of the largest and most historic mosques in Istanbul.",
        desc2: "It was built after the Ottoman conquest and is a symbol of Sultan Mehmed II's legacy.",
        details: "The Fatih Mosque was commissioned by Sultan Mehmed II, also known as Mehmed the Conqueror, between 1463 and 1470. It was built on the site of the former Church of the Holy Apostles. The mosque is one of the most important landmarks in Istanbul and is surrounded by a large religious complex that includes schools, libraries, a hospital, and a public kitchen. It remains an important place of worship and a popular destination for visitors interested in Ottoman history."
    }
];

const modal = document.getElementById("tourModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const readBtn = document.querySelector(".read-btn");

const title = document.getElementById("tourTitle");
const desc1 = document.getElementById("tourDesc1");
const desc2 = document.getElementById("tourDesc2");
const image = document.getElementById("tourImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const header = document.querySelector(".header");

let current = 0;
function showTour() {
    title.textContent = tours[current].title;
    desc1.textContent = tours[current].desc1;
    desc2.textContent = tours[current].desc2;
    image.src = tours[current].image;
}
showTour();

nextBtn.addEventListener("click", function () {
    current++;
    if (current >= tours.length) {
        current = 0;
    }
    showTour();
});

prevBtn.addEventListener("click", function () {
    current--;
    if (current < 0) {
        current = tours.length - 1;
    }
    showTour();
});

readBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
    modalTitle.textContent = tours[current].title;
    modalImage.src = tours[current].image;
    modalText.textContent = tours[current].details;
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});