$(document).ready(function(){

	//Log Cookies
	/*console.log(Cookies.get('app_submitted_ms'));
	console.log(Cookies.get('int_degree'));*/

	//Master's Degree
	//Shows International content for international students
	if(Cookies.get('app_submitted_ms') && Cookies.get('int_degree')=='yes'){
		/*$('#application_header_ms').text('Domestic and International Applicants');
		$('#application_header_trans_ms').text('Domestic and International Applicants Transcript Requirement');*/
		$('#domestic_transcript_ms').hide();
	 	$('#international_transcript_ms').show();
	 	$('#international_test_ms').show();	
	}

 	//Hides International content for domestic students
	if(Cookies.get('app_submitted_ms') && Cookies.get('int_degree')=='no'){
		$('#application_header_ms').text('Domestic Applicants');
		/*$('#application_header_trans_ms').text('Domestic Applicants Transcript Requirement');*/

	 	$('#international_transcript_ms').hide();
	 	$('#international_test_ms').hide();	
	}

	//Certificate
	//Shows International content for international students
	if(Cookies.get('app_submitted_cert') && Cookies.get('int_degree')=='yes'){
		/*$('#application_header_cert').text('Domestic and International Applicants Requesting Transcripts');*/
	 	/*$('#international_transcript_cert').show();*/
	 	$('#domestic_transcript_cert').hide();
	 	$('#international_test_cert').show();	
	}
 
 	//Hides International content for domestic students
	if(Cookies.get('app_submitted_cert') && Cookies.get('int_degree')=='no'){
		/*$('#application_header_cert').text('Domestic Applicants Requesting Transcripts');*/
	 	/*$('#international_transcript_cert').hide();*/
	 	$('.page-id-1861 #menu-custom-content-menu li:last-child a').text('Step Three: Official Transcripts');  
	 	$('#international_test_cert').hide();	
	}

	//Non-Degree
	//Shows International content for international students
	if(Cookies.get('app_submitted_nd') && Cookies.get('int_degree')=='yes'){
		/*$('#application_header_nd').text('Domestic and International Applicants');*/
	 	$('#international_transcript_nd').show();
	 	$('#international_test_nd').show();	
	}
 
 	//Hides International content for domestic students
	if(Cookies.get('app_submitted_nd') && Cookies.get('int_degree')=='no'){
		/*$('#application_header_nd').text('Domestic Applicants');*/
	 	$('#international_transcript_nd').hide();
	 	$('#international_test_nd').hide();	
	}
  

 

});