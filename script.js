// 1. Find all vibe buttons and all photo cards on our page
const buttons = document.querySelectorAll('.vibe-btn');
const cards = document.querySelectorAll('.photo-card');

// 2. Start listening to clicks on each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    // Get the clean text of the button
    const chosenVibe = button.textContent.trim().toLowerCase();
    
    // 3. Loop through all the photos
    cards.forEach(card => {
      const rawVibe = card.getAttribute('data-vibe');
      const cardVibe = rawVibe ? rawVibe.trim().toLowerCase() : '';
      
      // Check if this card is one of the main 3 photos
      const isMainCard = card.getAttribute('data-main') === 'true';
      
      // If "Show All" is clicked — we show ONLY the 3 main photos
      if (chosenVibe === 'show all') {
        if (isMainCard) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none'; // Completely removes hidden cards from layout calculation
        }
      } 
      // If a category button is clicked — show all photos for that category
      else if (cardVibe && (chosenVibe.includes(cardVibe) || cardVibe.includes(chosenVibe))) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none'; // Completely removes hidden cards from layout calculation
      }
    });
    
  });
});
