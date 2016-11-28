$(document).ready(function(){



       $.validator.addMethod("fname", function(value, element) {
        if (element.value == "First Name*" || element.value == "Please enter your first name."){return false;}else{return true;}},
        "Please enter your first name."
        );

        $.validator.addMethod("lname", function(value, element) {
        if (element.value == "Last Name*" || element.value == "Please enter your last name."){return false;}else{return true;}},
        "Please enter your last name."
        );

        $.validator.addMethod("phone", function(value, element) {
        if (element.value == "Phone Number" || element.value == "Please enter a valid phone number."){return false;}else{return true;}},
        "Please enter a valid phone number."
        );


        $(".main-banner .banner_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
                email: true
                },
            program_type:{
                required: true
            }
        },
            messages: {
                first_name: "Please enter your first name.",
                last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

        $(".modal_form .banner_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
                email: true
                },
            program_type:{
                required: true
            }
        },
            messages: {
                first_name: "Please enter your first name.",
                last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

    	    $(".contact_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
                required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
                email: true
                },
            message: {
                required: true,
                minlength: 20
             }
        },
            messages: {
                first_name: "Please enter your first name.",
                email: "Please enter a valid email address.",
                message: "Please enter your message."
             }
        });

        $(".content_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
				email: true
				},
            program_name: {
                required: true
            },
            expected_graduation_semester: {
                required: true
            },
             concurrent_program_name: {
                required: true
            },
            semester: {
                required: true
            }
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            }
        });

        $("#mandatory_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: true,
				email: true
				},
            phone: {
                required: true,
                phone: true,
                minlength: 10
            },
            Semester_Term__c: {
				required: true
				},
			Program_Type__c: {
				required: true
				},
            Degree_from_Non_US_Institution__c: {
                required: true
                }


        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
                phone: "Please enter a valid phone number."
            },
            submitHandler: function(mandatory_form){
                        console.log(ga);

                        if($('#mandatory_form').hasClass('cert')){
                            //Tracking
                            //ga('send', 'event', 'MDAP', 'Submit', 'Cert');
                            Cookies.set('app_submitted_cert', 'true', { expires: 60 });
                            console.log('APP Submitted Cert:');
                            console.log(Cookies.get('app_submitted_cert'));

                        }else if($('#mandatory_form').hasClass('nd')){
                            //Tracking
                            //ga('send', 'event', 'MDAP', 'Submit', 'ND');
                            Cookies.set('app_submitted_nd', 'true', { expires: 60 });
                            console.log('APP Submitted Non-Degree:');
                            console.log(Cookies.get('app_submitted_nd'));
                        }

                        if($('select[name=Degree_from_Non_US_Institution__c]').val()=='Yes'){
                             Cookies.set('int_degree', 'yes', { expires: 60 });
                             console.log('INT Degree is set to Yes:');
                             console.log(Cookies.get('int_degree'));

                             }else{
                              Cookies.set('int_degree', 'no', { expires: 60 });
                              console.log('INT Degree is set to NO:');
                              console.log(Cookies.get('int_degree'));
                             }
                        form.submit();
                    }
        });

    $("#completion_form").validate({
            onkeyup: false,
            onclick: false,
            onfocusout: false,
            errorPlacement: function (error, element) {
              if(element.hasClass('error') == true){
                $(element).val(error.text());
              }
},
        rules:{
            first_name: {
                required: true,
                fname: true,
                minlength: 2
             },
            last_name: {
                required: true,
                lname: true,
                minlength: 2
             },
            email: {
				required: {
                  depends:function(){
                    $(this).val($.trim($(this).val()));
                    return true;
                }
                },
				email: true
				}
        },
            messages: {
				first_name: "Please enter your first name.",
				last_name: "Please enter your last name.",
                email: "Please enter a valid email address.",
            }
        });

});
