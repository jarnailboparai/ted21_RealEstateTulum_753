$().ready(function() {
	
	$("#module-form-aweber").validate({
		rules: {
			"name": {
				required: true,
			},
				"email": {
					required: true,
					email:true,
				},	
		
		},
		messages: {
			"name": {
				required: "<div class='alert alert-danger'>Please enter name</div>",
				},
			"email": {
				required: "<div class='alert alert-danger'>Please enter Email</div>",
				email: "<div class='alert alert-danger'>Please enter valid email</div>"
			},
			
			
		}
	});

});

