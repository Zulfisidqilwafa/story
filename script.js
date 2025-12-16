// ===============================
// AMBIL ELEMEN
// ===============================
const startButton = document.getElementById('startButton');
const finishButton = document.getElementById('finishButton');
const music = document.getElementById('backgroundMusic');
const sections = document.querySelectorAll('.story-section');
const infoForm = document.getElementById('infoForm');

// ===============================
// KONFIGURASI
// ===============================
let currentSectionIndex = 0;
const scrollSpeed = 20000; // durasi tampil per section (ms)
music.volume = 0.3;       // volume musik (0.0 - 1.0)

// ===============================
// LOOP MUSIK
// ===============================
music.addEventListener('ended', () => {
    music.currentTime = 0;
    music.play();
});

// ===============================
// EVENT: MULAI MEMBACA
// ===============================
startButton.addEventListener('click', () => {
    music.play().catch(() => {
        // mencegah error di beberapa browser mobile
    });

    startButton.style.display = 'none';
    autoScrollStory();
});

// ===============================
// AUTO SCROLL CERITA
// ===============================
function autoScrollStory() {
    if (currentSectionIndex < sections.length) {

        const section = sections[currentSectionIndex];

        section.style.display = 'block';
        section.classList.add('fade-in');

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        currentSectionIndex++;
        setTimeout(autoScrollStory, scrollSpeed);

    } else {
        if (finishButton) {
            finishButton.style.display = 'block';
        }
    }
}

// ===============================
// EVENT: TENTANG PENULIS
// ===============================
if (finishButton) {
    finishButton.addEventListener('click', () => {
        infoForm.classList.remove('hidden');

        infoForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
