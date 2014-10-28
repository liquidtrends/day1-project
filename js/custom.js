$(document).ready(function(){
    $('.hints').slideDown(1000);
});

$(function(){
	
	// Show Employee Input //

	$("#add-employee").click(function() {
		$( "#employeeInput" ).show();
		$( "#add-employee" ).hide();
	});

	// Employee Input //
	$("#employeeInput").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem = ($this.val());
		if (newItem !== "") {
			$("ul#employee-list").append($("<li>").text(newItem).addClass("employee-box"));
			$this.val('');
			
			// Draggable Employee Box //
			$( "#employee-list" ).children().draggable();
			$( "#droppable" ).droppable(); 
		  }
		}

	});

	// Add new tasks 1 //
	$("#taskInput1").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem1 = ($this.val());
		if (newItem1 !== "") {
			$("div#task-list1").append($("<h3>").text(newItem1).addClass("task-item"));
			$this.val('');
			// Fade out input box after click //
			$(".task-input1").fadeOut(700);
			$(".step1").fadeOut(600);
			$(".step2").fadeIn(600);
		  }
		}
	});

	// Add new tasks 2 //
	$("#taskInput2").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem1 = ($this.val());
		if (newItem1 !== "") {
			$("div#task-list2").append($("<h3>").text(newItem1).addClass("task-item"));
			$this.val('');
			// Fade out input box after click //
			$(".task-input2").fadeOut(700);
		  }
		}
	});

	// Add new tasks 3 //
	$("#taskInput3").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem1 = ($this.val());
		if (newItem1 !== "") {
			$("div#task-list3").append($("<h3>").text(newItem1).addClass("task-item"));
			$this.val('');
			// Fade out input box after click //
			$(".task-input3").fadeOut(700);
		  }
		}
	});

	

});

