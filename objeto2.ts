const objeto1 = {
  usuario: "Alex",
  nacionalidad: "Nigeria",
  profesion: "Ingeniero de Software",
  miBiografia() {
    console.log(
      `Mi nombre es ${this.usuario}. Soy un ${this.profesion} de ${this.nacionalidad}`
    );
  },
};
console.log(objeto1.usuario); // Alex
console.log(objeto1.nacionalidad); // Nigeria
console.log(objeto1.profesion); // Ingeniero de Software
console.log(objeto1.miBiografia()); // Mi nombre es Alex. Soy un Ingeniero de Software de Nigeria