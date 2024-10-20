// Önceki sonuçları yerel depolamadan al
let previousResults = JSON.parse(localStorage.getItem('surveyResults')) || [];

// Form gönderildiğinde
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Seçilen değerleri al
    const education = document.querySelector('input[name="education"]:checked').value;
    const age = document.querySelector('input[name="age"]:checked').value;
    const reading = document.querySelector('input[name="reading"]:checked').value;
    const genre = document.querySelector('input[name="genre"]:checked').value;

    // Yeni sonuçları diziye ekle
    const newResult = { education, age, reading, genre };
    previousResults.push(newResult);
    
    // Sonuçları yerel depolamaya kaydet
    localStorage.setItem('surveyResults', JSON.stringify(previousResults));

    // Sonuçları göster
    displayResults();
});

// Sonuçları ekranda göster
function displayResults() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>Teşekkürler!</h2><h3>Sonuçlar:</h3>';
    
    previousResults.forEach((result, index) => {
        resultContainer.innerHTML += `
            <p><strong>Kullanıcı ${index + 1}:</strong></p>
            <p>Eğitim Düzeyiniz: ${result.education}</p>
            <p>Yaş Aralığınız: ${result.age}</p>
            <p>Okuma Sıklığınız: ${result.reading}</p>
            <p>Sevdiğiniz Film Türü: ${result.genre}</p>
            <hr>
        `;
    });

    document.getElementById('survey').style.display = 'none';
    resultContainer.style.display = 'block';
}

// Sayfa yüklendiğinde sonuçları göster
window.onload = displayResults;


