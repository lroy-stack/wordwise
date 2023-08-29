document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate-button');
    const wordsInput = document.getElementById('words');
    const resultElement = document.getElementById('result');
  
    calculateButton.addEventListener('click', function() {
      const words = parseInt(wordsInput.value);
      const ratePerWord = 0.07; // Precio estimado por palabra
      const estimatedCost = words * ratePerWord;
  
      resultElement.textContent = `El costo estimado es: €${estimatedCost.toFixed(2)}`;
    });
  });
  