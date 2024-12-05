document.addEventListener("DOMContentLoaded", () => {
    const snowflakeContainer = document.getElementById("snowflakes-container");

    // Impostazioni generali per i fiocchi
    const settings = {
        snowflakeCount: 50,  // Numero di fiocchi
        fallSpeed: 15,       // Velocità di caduta (in secondi)
        swaySpeed: 3,        // Velocità di oscillazione
    };

    for (let i = 0; i < settings.snowflakeCount; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Imposta dimensioni casuali per i fiocchi
        const size = Math.random() * 15 + 10; // Dimensioni tra 10px e 25px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Imposta la posizione orizzontale casuale
        const startPosition = Math.random() * 100; // Percentuale della larghezza dello schermo
        snowflake.style.left = `${startPosition}%`;

        // Imposta la velocità di caduta (in base alla dimensione del fiocco)
        const fallDuration = Math.random() * 5 + settings.fallSpeed; // Durata variabile per la caduta
        const swayDuration = fallDuration / settings.swaySpeed; // Oscillazione a metà della velocità di caduta
        const rotateDuration = Math.random() * 5 + 5; // Durata variabile per la rotazione

        // Imposta un vettore di rotazione casuale (x, y, z)
        const rotateX = Math.random();  // Valore casuale per l'asse X
        const rotateY = Math.random();  // Valore casuale per l'asse Y
        const rotateZ = Math.random();  // Valore casuale per l'asse Z
        const initialRotation = Math.random() * 360;  // Angolo di rotazione iniziale

        // Imposta la rotazione casuale iniziale per ogni fiocco
        snowflake.style.transform = `rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${initialRotation}deg)`; // Ruota il fiocco casualmente

        // Applica le durate per le animazioni
        snowflake.style.animationDuration = `${fallDuration}s, ${swayDuration}s, ${rotateDuration}s`;

        // Aggiungi un piccolo ritardo per evitare il blocco iniziale
        const delay = Math.random() * 15; // Ritardo casuale tra 0 e 2 secondi
        snowflake.style.animationDelay = `${delay}s`;

        // Assicurati che il fiocco parta da sopra lo schermo (top negativo)
        snowflake.style.top = `-10%`; // Posizione iniziale sopra il bordo superiore

        // Aggiungi il fiocco al contenitore
        snowflakeContainer.appendChild(snowflake);

        // Rimuovi il fiocco dopo la fine dell'animazione
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }
});
