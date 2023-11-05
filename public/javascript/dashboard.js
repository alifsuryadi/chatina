feather.replace();

function openChatInNewTab(url) {
    window.open(url, '_blank');
}

const profileMenuContainer = document.querySelector('.profile-menu-container');
const editMainProfile = document.querySelector('.edit-main-profil');
const editProfileContainer = document.querySelector('.edit-profile-container');
const cancelMainProfile = document.querySelector('#cancel-edit-profil');

// Menambahkan event listener untuk menampilkan dan menyembunyikan popup
profileMenuContainer.addEventListener('click', () => {
    editProfileContainer.style.display = "flex";
    editMainProfile.style.position = "fixed";
});

cancelMainProfile.addEventListener('click', () => {
    editProfileContainer.style.position = "none";
    editMainProfile.style.position = "none";
});



const openSettingsButton = document.querySelector('#setting-menu');
const closeSettingsButton = document.querySelector('#close-settings');
const settingPopup = document.querySelector('.setting-popup');

openSettingsButton.addEventListener('click', () => {
    settingPopup.style.display = 'flex';
    settingPopup.style.position = 'fixed';
});

closeSettingsButton.addEventListener('click', () => {
    settingPopup.style.display = 'none';
    settingPopup.style.position = 'none';
});


const logoutPopup = document.querySelector('.logout-popup');

const openLogout = document.querySelector('.logout-menu-container');
const buttonNo = document.querySelector('.button-no');

// Tampilkan popup logout saat tombol keluar di klik
openLogout.addEventListener('click', () => {
  logoutPopup.style.display = 'flex';
});

// Sembunyikan popup logout saat tombol batal di klik
buttonNo.addEventListener('click', () => {
  logoutPopup.style.display = 'none';
});



function openPopup() {
    const popup = document.getElementById('coming-popup');
    popup.style.display = "block";
  }
  
  // Fungsi untuk menutup pop-up
  function closePopup() {
    const popup = document.getElementById('coming-popup');
    popup.style.display = "none";
  }
  
  // Tangani klik pada tombol "Fitur Belum Tersedia"
  document.getElementById('add-forum-parent').addEventListener('click', function(e) {
    e.preventDefault();
    openPopup();
  });

  document.getElementById('close-popup').addEventListener('click', closePopup);