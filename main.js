const helloSpeaker = (function() {
    const speakWord = "Hello";
    return { speak: n => console.log(`${speakWord} ${n}`) };
})();

const byeSpeaker = (function() {
    const speakWord = "Goodbye";
    return { speak: n => console.log(`${speakWord} ${n}`) };
})();

(function() {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "Anna"];
    
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toLowerCase() === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
    
    console.log("\nАнотація підходу: відбір імен, сума ASCII-кодів літер яких більша за 400");
    for (let i = 0; i < names.length; i++) {
        let sum = 0;
        for (let j = 0; j < names[i].length; j++) {
            sum += names[i].charCodeAt(j);
        }
        if (sum > 400) {
            console.log(`${names[i]} (Сума ASCII: ${sum})`);
        }
    }
})();