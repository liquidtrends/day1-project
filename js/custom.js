$(function(){
	
	$("input").on("keyup", function(e) {

		console.log(this);
		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem = ($this.val());
		if (newItem !== "") {
			$("ul").append($("<li>").text(newItem).addClass("resource-item"));
			$this.val('');
			$("button#random").fadeIn(700);
		  }
		}

	});

	$("button#random").on("click", function(){
		var itemList = $("li");
		var randomIndex = Math.floor(Math.random() * (itemList.length - 1));
		var randomItem = itemList[randomIndex];
		$("div#selected-random").text($(randomItem).text());
	});

});

