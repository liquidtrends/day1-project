$(document).ready(function(){
    $('.hints').slideDown(1000);
});

$(function(){
	
	// Employee Counter //
	var employeeCount = 0;

	// Show Employee Input //
	$("#add-employee").click(function() {
		$( "#employeeInput" ).show();
		$( "#add-employee" ).hide();
		$( ".hints" ).slideUp(400);
	});

	// Employee Input //
	$("#employeeInput").on("keyup", function(e) {

		if (e.keyCode == 13) {
		var $this = $(this);

		var newItem = ($this.val());
		if (newItem !== "") {
			$("ul#employee-list").append($("<li>").text(newItem).addClass("employee-box"));
			$this.val('');

	// Count how many employees are added //	
			if (newItem !== "") {
				$('#displayCount').html(++employeeCount);
				//alert (++employeeCount);
			};		
		
	// Draggable Employee Box //
			$( "#employee-list" ).children().draggable({
				snap: '#droppable',
				snapMode: 'top',
				grid: [ 20, 20 ],
			});
			$( "#droppable" ).droppable({
        		accept: '#employee-list', 
        		drop: function(event, ui) 
        	{
            	$(this).find("#employee-list").html();
        	}
			}); 
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

	// Reset All //
	$("reset").click(function() {
    $("#employee-list").css({
        'left': $("#employee-list:nth-child").data('originalLeft'),
        'top': $("#employee-list:nth-child").data('origionalTop')
    });
});	

});

