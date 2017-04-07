// zadanie 10.5

$(document).ready(function() {

function Button(text) {
	this.text = text || 'Hello';
};

Button.prototype.create = function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
			console.log(self.text);
			//$('body').append(self.$element.clone()); // klonuje button ale nie daje mu funkcjonalnosci tworzenia kolejnego
			//debugger
			$('body').on('click',this.$element,function(){
					btn1.create(); // tworzy ale za kazdym razem o jedna instancje wiecej 1,2,3...
					//this.$element.create() //nie dziala
						});
			//debugger
		});
		$('body').append(this.$element);
	};

var btn1 = new Button('Jestem!');
//debugger
btn1.create();
//debugger

});




