class Validator {
  constructor() {
    this /*referencia ojeto*/.validations = ["data-min-lenght",];
  }
  //iniciar validação
  validate(form) {
    //pegar os inputs
    let inputs = form.getElementsByTagName("input");
    //loop / transformar uma HTMLCollection -> array
    let inputsArray = [...inputs];
    //loop nos inputs e validação
    inputsArray.forEach(function (input) {
      //loop com todas as validações existentes
      for (let i = 0; this.validations.length > i; i++) {
     //verifica se a validação atual existe no input
        if (input.getAttribute(this.validations[i]) != null) {

            //limpando a string para virar um métofo / data-min-length -> minlenght  
            let method = this.validations[i].replace('data-', '').replace('-','');

            //valor do input
            let value = input.getAttribute(this.validations[i]);

            //invocar método
            this[method](input, value);

        }
      }
    },this /*bind no objeto*/);
  }
  //verifica se um input tem o número mínimo de caracteres
  minlength(input, minValue) {

    let inputLenght = input.value.length;
    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

    if(inputLenght < minValue){
        this.printMessage(input, errorMessage0);
    }
  }
  //método para imprimir menssagem de erro na tela
  printMessage(input, msg){
      let template = document.querySelector('.error-validation').cloneNode(true);

      template.textContent = msg;

      inputParent = input.ParentNode;

      template.classList.remove('template');

      inputParent.appendChild(template);


  }
}

let form = document.getElementById("login-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

/*envento*/

submit.addEventListener("click", (e) => {
  /*arrow function*/
  e.preventDefault(); /*o formulário não funcionará ao enviar para o servidor*/
  //console.log('entrou'); /*saber se o click deu certo*/

  validator.validate(form); /*mandou o formulário para o validate validar */
});
