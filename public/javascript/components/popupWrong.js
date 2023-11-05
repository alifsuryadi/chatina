// if(wrong){
//     function showPopup() {
//         const popupWrong = document.getElementById('popup-wrong');
//         popupWrong.classList.add('show');
      
//         // Hide the popupWrong after 3 seconds
//         setTimeout(() => {
//           popupWrong.classList.remove('show');
//         }, 1000);
//       }
      
//     //   document.querySelector('form').addEventListener('submit', function(e) {
//     //     const email = document.getElementById('email').value;
//     //     const password = document.getElementById('password-field').value;
      
//         // Check if email and password are correct
//         // This is just a placeholder. Replace it with your actual validation logic.
//         // if (email === 'alif@gmail.com' || password === 'alif') {
//         //   e.preventDefault();
//           showPopup();
//         // }
//     //   });
//       wrong = false;
// }

// Dapatkan elemen popup-wrong
const popupWrong = document.getElementById('popup-wrong');

// Cek jika popupWrong ada
if (popupWrong) {
  // Tampilkan popupWrong
  popupWrong.style.display = 'block';

  // Atur timer untuk menghilangkan popupWrong setelah 3 detik
  setTimeout(() => {
    popupWrong.style.display = 'none';
  }, 2000);
}



  