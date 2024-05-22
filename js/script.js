// Ini JS

document.addEventListener('DOMContentLoaded', function () {
    // Elements for Luas Segitiga
    const alasInput = document.getElementById('alas');
    const tinggiInput = document.getElementById('tinggi');
    const hitungLuasBtn = document.getElementById('hitung-segitiga');
    const resetLuasBtn = document.getElementById('reset-btn');
    const luasResult = document.getElementById('luas-result');

    // Elements for Keliling Segitiga
    const sisiAInput = document.getElementById('sisiA');
    const sisiBInput = document.getElementById('sisiB');
    const sisiCInput = document.getElementById('sisiC');
    const hitungKelilingBtn = document.getElementById('keliling-segitiga');
    const resetKelilingBtn = document.getElementById('reset-keliling');
    const kelilingResult = document.getElementById('keliling-result');

    // Elements for switching
    const switchKelilingBtn = document.getElementById('switch-keliling');
    const sectionLuas = document.getElementById('section-luas');
    const formContainerLuas = document.getElementById('form-container-luas');
    const sectionKeliling = document.getElementById('section-keliling');
    const formContainerKeliling = document.getElementById('form-container-keliling');

    // Initial state: show Luas Segitiga, hide Keliling Segitiga
    sectionKeliling.style.display = 'none';
    formContainerKeliling.style.display = 'none';

    // Calculate Luas Segitiga
    hitungLuasBtn.addEventListener('click', function () {
        const alas = parseFloat(alasInput.value);
        const tinggi = parseFloat(tinggiInput.value);

        if (isNaN(alas) || isNaN(tinggi)) {
            luasResult.textContent = 'Input tidak valid';
        } else {
            const luas = 0.5 * alas * tinggi;
            luasResult.textContent = `Luas Segitiga: ${luas}`;
        }
    });

    // Reset Luas Segitiga Form
    resetLuasBtn.addEventListener('click', function () {
        alasInput.value = '';
        tinggiInput.value = '';
        luasResult.textContent = '';
    });

    // Calculate Keliling Segitiga
    hitungKelilingBtn.addEventListener('click', function () {
        const sisiA = parseFloat(sisiAInput.value);
        const sisiB = parseFloat(sisiBInput.value);
        const sisiC = parseFloat(sisiCInput.value);

        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
            kelilingResult.textContent = 'Input tidak valid';
        } else {
            const keliling = sisiA + sisiB + sisiC;
            kelilingResult.textContent = `Keliling Segitiga: ${keliling}`;
        }
    });

    // Reset Keliling Segitiga Form
    resetKelilingBtn.addEventListener('click', function () {
        sisiAInput.value = '';
        sisiBInput.value = '';
        sisiCInput.value = '';
        kelilingResult.textContent = '';
    });

    // Switch between Luas and Keliling Segitiga forms
    switchKelilingBtn.addEventListener('click', function () {
        if (sectionLuas.style.display === 'none') {
            sectionLuas.style.display = 'block';
            formContainerLuas.style.display = 'block';
            sectionKeliling.style.display = 'none';
            formContainerKeliling.style.display = 'none';
            switchKelilingBtn.innerHTML = '<u>Switch ke Hitung Keliling Segitiga</u>';
        } else {
            sectionLuas.style.display = 'none';
            formContainerLuas.style.display = 'none';
            sectionKeliling.style.display = 'block';
            formContainerKeliling.style.display = 'block';
            switchKelilingBtn.innerHTML = '<u>Switch ke Hitung Luas Segitiga</u>';
        }
    });
});
