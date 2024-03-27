// Filter packages based on category
document.querySelectorAll('.filter-option').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const packageCards = document.querySelectorAll('.package-card');
        packageCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        document.querySelector('.filter-option.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Pagination
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const packageCards = document.querySelectorAll('.package-card');
let currentPage = 0;

function showPage(page) {
    packageCards.forEach((card, index) => {
        if (index >= page * 8 && index < (page + 1) * 8) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

showPage(currentPage);

prevBtn.addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentPage < Math.ceil(packageCards.length / 8) - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const filterOptions = document.querySelectorAll(".filter-option-1");
    const packageCards = document.querySelectorAll(".package-card-1");

    filterOptions.forEach(option => {
        option.addEventListener("click", function() {
            const category = this.getAttribute("data-category");
            packageCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
            // Remove 'active' class from all filter options
            filterOptions.forEach(option => option.classList.remove("active"));
            // Add 'active' class to the clicked filter option
            this.classList.add("active");
        });
    });
});
