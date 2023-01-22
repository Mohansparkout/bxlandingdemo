<!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
   <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://crm.zoho.in/crm/WebToLeadForm' name=WebToLeads70667000000113001 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory70667000000113001()' accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='820c769d87caec57c1bd22cf2f8d0aa2ca46c31ec11bd65b70a88234bf923b7e'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> 
 <input type='text' style='display:none;' name='xmIwtLD' value='6f4ac5f9acbac8b147bedfeab4007c1e0ce065ed4b076c895db9f590e7f24169'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.blockchainx.tech&#x2f;thankyou' > </input>
	 <!-- Do not remove this code. -->
	 <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
	 <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
	 <!-- Do not remove this code. -->
<style>
html,body{
	margin: 0px;
}

</style>

<div class="contactForm">
	<div class="row">
	<div class="col-lg-6 name-field">
<div class='zcwf_row'><div class='zcwf_col_lab '><label for='Last_Name'>What’s your name<span style='color:#d9d9d9;'>*</span></label></div><div class='zcwf_col_fld form-field '><input type='text'  name='Last Name'  ></input><div class='zcwf_col_help'></div></div></div>
</div>
<div class="col-lg-6 email-field ">
<div class='zcwf_row'><div class='zcwf_col_lab' ><label for='Email'>Your Email<span style='color:#d9d9d9;'>*</span></label></div><div class='zcwf_col_fld form-field'><input type='text' ftype='email'  name='Email' ></input><div class='zcwf_col_help'></div></div></div></div></div>
<div class="col-lg-12 contact-des">
<div class='zcwf_row'><div class='zcwf_col_lab'><label for='Description'>Tell us about your project</label></div><div class='zcwf_col_fld form-field'><textarea  name='description'  ></textarea><div class='zcwf_col_help'></div></div></div></div>
<div class='c-submit zcwf_row'>
	<!-- <div class='zcwf_col_lab'></div> -->
	<div class="col-lg-6">
	<div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'></div></div>
	<div class="col-lg-6" id="feature-link">
	<div class="content-link" id="f-submit">
                    <a href="contact">
                      <span>Contact Us</span>
                      <img src="assets-new/images/right-arrow.png" alt="link-arrow" width="50" height="15"> 
                    </a>
                    <hr />
                  </div>
	</div>
</div>
</div>
</div>  
<!-- <div class="main-contact-form contactForm ">
<div class="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
<div class="col-lg-6">
                  <div class="form-floating mb-4">
					<div class='zcwf_row'>
						<div class='zcwf_col_fld'>
							<input type="text" class="form-control" placeholder="What’s your name" id="name" name="Last_Name"></input>
							<label for="Last_Name">What’s your name</label>
							<div class='zcwf_col_help'></div>
						</div>
					</div>
				  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input type="text" class="form-control" placeholder="Your Email" id="email"></input><div class='zcwf_col_help'></div>
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <textarea class="form-control" placeholder="Tell us about your project" id="message"></textarea><div class='zcwf_col_help'></div>
                    <label for="message">Tell us about your project</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 cont-submit">
                  <div class="contact_submit">
                    <div><input type='submit' id='formsubmit' class='form_submit formsubmit zcwf_button' value='Submit' title='Submit'></div>                    
                    <div class="content-link" id="feature-link">
                      <a href="contact" data-aos="fade-up" data-aos-delay="150" class="aos-init aos-animate">
                        <span>Contact Us</span>
                        <img src="assets-new/images/right-arrow.png"> 
                      </a>
                      <hr>
                    </div>
                  </div>
                </div>
              </div>
</div> -->
	<script>
	function validateEmail70667000000113001()
	{
		var form = document.forms['WebToLeads70667000000113001'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

 	  function checkMandatory70667000000113001() {
		var mndFileds = new Array('Last Name','Email','Phone');
		var fldLangVal = new Array('Name','Email','Phone');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads70667000000113001'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		trackVisitor70667000000113001();
		if(!validateEmail70667000000113001()){return false;}
		document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

function tooltipShow70667000000113001(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
</script>
<script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'b332a80cee2616dbd8dec1fa1e51e6606349f075db8e81e30bd7776cb5b18379308391f65d6cc4abb3d821f3d3820190', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor70667000000113001(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads70667000000113001']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads70667000000113001']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads70667000000113001']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
	<!-- Do not remove this --- Analytics Tracking code starts -->
    <script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=6f4ac5f9acbac8b147bedfeab4007c1e0ce065ed4b076c895db9f590e7f24169gid820c769d87caec57c1bd22cf2f8d0aa2ca46c31ec11bd65b70a88234bf923b7egid534cb20477b1d28b5f45f7cc241888c5gid4ee3a7e9ace6ab1be7c541b329164307&tw=096a715cbfc30dc79d6dc215bf71c5b4284d938378e51186a6daa9337f7519a8'></script><!-- Do not remove this --- Analytics Tracking code ends. -->
</form>
</div>