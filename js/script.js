

window.addEventListener('load', () => {
    Swal.fire({
        icon: "info", 
        html: `use your index number as your admin ID <br/><strong>Note</strong> Only group members can login`,
    })
})


document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let adminID = document.getElementById("adminID").value;

    let correctAdminID = [
        "UEB3211522", "UEB3211422", "UEB3210622", "UEB3210722","UEB3210822",
        "UEB3210922", "UEB3211022", "UEB3211122", "UEB3211322","UEB321622",
            ]

    if (correctAdminID.includes(adminID)) {
        window.location.href = "admin.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Your Head Like Motor way", 
            text: document.getElementById("errorMessage").innerText = "Invalid Admin ID!",
            footer: "I think you are using your sporty password for here bro 😜"
        });
    }
});



