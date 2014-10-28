$(function(){
	
	// Show Employee Input //

	$("#add-employee").click(function() {
		$( "#employeeInput" ).show();
		$( "#employee-list" ).sortable();
		$( "#task-column" ).droppable(); 
	});

	// Employee Input //
	$("#employeeInput").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem = ($this.val());
		if (newItem !== "") {
			$("ul#employee-list").append($("<li>").text(newItem).addClass("employee-box"));
			$this.val('');
			$("button#random").fadeIn(700);
		  }
		}

	});

	// Add new tasks //
	$("#taskInput").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem = ($this.val());
		if (newItem !== "") {
			$("div#task-list1").append($("<h2>").text(newItem).addClass("task-item"));
			$this.val('');
			$(".task-input").fadeOut(700);
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

