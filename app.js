const container = document.getElementById("flash-card-container");
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) { 
        const flashCard = document.createElement("div");
        flashCard.classList.add("flash-card");
        const answer = i * j;
        flashCard.textContent = `${i} x ${j} = ${answer}`;
        container.appendChild(flashCard);
      }
    }