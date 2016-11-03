<!-- apollo banner -->
<section class="main-banner">
	<div class="container">
		<div class="main-banner-meta">
			<?php ufandshands_banner_logos(); ?>
			<?php ufandshands_content_title(); //page title ?>
		</div>
		<div class="main-banner-form">
			<div class="banner-form-div">

<h4>Let's Connect</h4>
<h6>Fill out this form to learn more about our program</h6>

<form id="contact_form1" class="banner_form" name="contact_form" action=<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> method="post">
        <ul> 
            <li style="position: absolute; left: -5000px; top: -5000px;"><input id="mname" class="input_name1" type="text" name="name" value="" placeholder="Fill this field out if you aren't interested in any of the programs."></li>
            <li><input id="fname" class="input_name1" type="text" name="first_name" value="First Name*"></li> 
            <li><input id="lname" class="input_name1" type="text" name="last_name" value="Last Name*"></li>
            <li><input id="email" class="input_name1" type="email" name="email" value="Email*"></li>
            <li><input id="phone" class="input_name1" type="text" name="phone" value="Phone"></li>
 
<li><div style="position:absolute; left:-9999px; top: -9999px;">
    <label for="pardot_extra_field">Comments</label>
    <input type="text" id="pardot_extra_field" name="pardot_extra_field"></div></li>

            <li> <select class="country1 half" id="interest"  class="select_type1 icon2" id="fselect1" name="program_type">
                             <option value="">Select a program*</option>
                            <option value="Master's Degree">Master's Degree</option>
                            <option value="Certificate">Certificate</option>
                            <option value="Non-Degree">Non-Degree</option> 
<option value="Unsure">I'm not sure</option> 
                        </select>
            </li>
            <li>
            <input type="submit" name="submit" value="Learn More" class="send_btn1 half" >
            </li>
        </ul> 
        <div class="clear"></div>
 
                 
    </form>
</div>
		</div>		
	</div>
</section>	
<!-- eof apollo banner -->
