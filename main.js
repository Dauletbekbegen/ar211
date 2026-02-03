document.addEventListener("DOMContentLoaded", () => {
    // 3D объектілерді айнымалыға аламыз
    const saukele = document.querySelector("#saukele-entity");
    const syrgaLeft = document.querySelector("#syrga-left-entity");
    const syrgaRight = document.querySelector("#syrga-right-entity");

    // Түймелерді табамыз
    const btnSaukele = document.querySelector("#btn-saukele");
    const btnSyrga = document.querySelector("#btn-syrga");
    const btnClear = document.querySelector("#btn-clear");

    // Сәукелені қосу/өшіру
    btnSaukele.addEventListener("click", () => {
        const isVisible = saukele.getAttribute("visible");
        saukele.setAttribute("visible", !isVisible); // Бар болса өшіреді, жоқ болса қосады
    });

    // Сырғаны қосу/өшіру
    btnSyrga.addEventListener("click", () => {
        const isVisible = syrgaLeft.getAttribute("visible");
        // Екі құлаққа да әсер етеді
        syrgaLeft.setAttribute("visible", !isVisible);
        syrgaRight.setAttribute("visible", !isVisible);
    });

    // Бәрін тазалау
    btnClear.addEventListener("click", () => {
        saukele.setAttribute("visible", false);
        syrgaLeft.setAttribute("visible", false);
        syrgaRight.setAttribute("visible", false);
    });
});