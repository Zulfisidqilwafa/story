const startButton = document.getElementById('startButton');
const music = document.getElementById('backgroundMusic');
const sections = document.querySelectorAll('.story-section');
let currentSectionIndex = 0;
const scrollSpeed = 10000; // 10 seconds for each section

startButton.addEventListener('click', () => {
    music.play();  // Memainkan musik
    startButton.style.display = 'none';  // Menyembunyikan tombol mulai
    autoScrollStory();  // Memulai auto-scroll cerita
});

function autoScrollStory() {
    if (currentSectionIndex < sections.length) {
        const section = sections[currentSectionIndex];
        section.style.display = 'block';  // Tampilkan section saat ini
        section.classList.add('fade-in');  // Tambahkan efek fade-in
        scrollToSection(section.id);  // Scroll ke section saat ini

        currentSectionIndex++;  // Pindah ke section berikutnya
        setTimeout(autoScrollStory, scrollSpeed);  // Pindah ke section berikutnya setelah 5 detik
    } else {
        document.getElementById('finishButton').style.display = 'block';  // Tampilkan tombol selesai setelah cerita selesai
    }
}

// Fungsi untuk smooth scroll ke section tertentu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Menangani tombol selesai
document.getElementById('finishButton').addEventListener('click', () => {
    document.getElementById('infoForm').classList.remove('hidden');  // Menampilkan form setelah tombol selesai ditekan
});