// zadanie 10.5

$(document).ready(function() {

function Button(text) {
	this.text = text || 'Hello';
};

Button.prototype.create = function() {
		var self = this;
		this.$element = $('<button>'); // dlaczego $.element a nie sam element, dziala tak czy siak
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
			console.log(self.text); // dziala,pokazuje za kazdym kliknieciem alertz tekstem z buttona
			$('body').append(this.$element); //dlaczego nie tworzy kolejnego button na stronie po kliknieciu??? stracil kontekst? jak zrobic by sie zreplikowal?
		});
		$('body').append(this.$element); //dodaje pierwszy button do DOM
	};

var btn1 = new Button('Jestem!');

btn1.create();

});




