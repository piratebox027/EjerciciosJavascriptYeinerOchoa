document.getElementById('calculateBtn').addEventListener('click', function() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a metros
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi').value = bmi;
});

//2
const exchangeRate = 3976.50; // Ejemplo de tasa de cambio

document.getElementById('usd').addEventListener('input', function() {
    let usd = parseFloat(this.value);
    document.getElementById('ars').value = (usd * exchangeRate).toFixed(2);
});

document.getElementById('ars').addEventListener('input', function() {
    let ars = parseFloat(this.value);
    document.getElementById('usd').value = (ars / exchangeRate).toFixed(2);
});
