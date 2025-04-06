
window.onload = function excusaRandom() {
  //write your code here

  let excuseElement = document.querySelector('#excuse'); 

  let who = ['Un gnome', 'Un chupacabras', 'El bigfoot', 'El monstruo del lago Ness', 'Un unicornio'];  
  let action = ['me robó', 'arrasó', 'volatirizó', 'se comió', 'quemó', 'asaltó'];  
  let what = ['mi despertador', 'mi coche', 'el autobús', 'el metro entero', 'la ciudad'];  
  let when = ['a lo largo de la mañana', 'en un abrir y cerrar de ojos', 'anoche mientras dormía', 'mientras desayunaba', 'justo cuando iba a salir'];  
  
  let whoIndex = Math.floor(Math.random() * who.length);  
  let actionIndex = Math.floor(Math.random() * action.length);  
  let whatIndex = Math.floor(Math.random() * what.length);  
  let whenIndex = Math.floor(Math.random() * when.length);  
  
  let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;  
  excuseElement.textContent = excuse;
};

  
  
