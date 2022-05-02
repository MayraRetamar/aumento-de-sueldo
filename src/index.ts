let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese su salario actual: ";
btnEnviar.addEventListener("click", () => {
  let salario: number = Number(dato.value);
  let salarioaumento: number = 0;
  if (salario > 25000) {
    console.log("Su salario no percibe aumento");
  } else if (0 < salario && salario <= 15000) {
    salarioaumento = salario * 1.2;
    console.log(
      "El salario ingresado recibe el 20% de aumento, el total a cobrar es: " +
        salarioaumento +
        "$"
    );
  } else if (15001 < salario && salario <= 20000) {
    salarioaumento = salario * 1.1;
    console.log(
      "Su salario percibe el 10% de aumento, el total a cobrar es: " +
        salarioaumento +
        "$"
    );
  } else if (20001 < salario && salario <= 25000) {
    salarioaumento = salario * 1.05;
    console.log(
      "Su salario percibe el 5% de aumento, el total a cobrar es: " +
        salarioaumento +
        "$"
    );
  }
});
