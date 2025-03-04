
//voice-mail 

document.addEventListener("DOMContentLoaded", () => {
    const optionCards = document.querySelectorAll(".option-card");
    const inputField = document.querySelector("footer input");
    
    optionCards.forEach(card => {
        card.addEventListener("click", () => {
            inputField.value = card.textContent;
        });
    });

    const voiceBtn = document.querySelector(".voice-btn");
    voiceBtn.addEventListener("click", () => {
        alert("Voice input feature coming soon!");
    });
});



//fileinput

document.getElementsByClassName("sidebar-icon")[0].addEventListener("click", function() {
    document.getElementsByClassName("main-sidebar")[0].classList.add("active");
    // document.getElementsByClassName("sidebar-icon")[0].classList.toggle("active");
});

document.querySelector('.sidebar-icon-close').addEventListener('click',()=>{
    document.getElementsByClassName("main-sidebar")[0].classList.remove("active");
})

document.getElementById('fileBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click(); // Trigger file selection
});

document.getElementById('fileInput').addEventListener('change', (event) => {
    const fileName = event.target.files[0] ? event.target.files[0].name : "No file selected";
    alert("Selected File: " + fileName); // You can replace this with UI update logic
});



//notification

document.getElementById("notificationBtn").addEventListener("click", function(event) {
    const dropdown = document.getElementById("notificationDropdown");
    
    // Toggle visibility
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

    // Prevent closing when clicking inside the dropdown
    event.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("notificationDropdown");
    const button = document.getElementById("notificationBtn");

    if (!dropdown.contains(event.target) && event.target !== button) {
        dropdown.style.display = "none";
    }
});


// threedotproject

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".three-dot").forEach(dot => {
//         dot.addEventListener("mouseenter", function () {
//             let dropdown = this.nextElementSibling;
//             dropdown.style.display = "block";
//         });
//         dot.addEventListener("mouseleave", function () {
//             let dropdown = this.nextElementSibling;
//             setTimeout(() => {
//                 dropdown.style.display = "none";
//             }, 300);
//         });
//         dot.nextElementSibling.addEventListener("mouseenter", function () {
//             this.style.display = "block";
//         });
//         dot.nextElementSibling.addEventListener("mouseleave", function () {
//             this.style.display = "none";
//         });
//     });
// });
