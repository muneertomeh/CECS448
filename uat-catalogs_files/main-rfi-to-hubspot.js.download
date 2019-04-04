function phone_formatting(ele,restore) {
  var new_number,
      selection_start = ele.selectionStart,
      selection_end = ele.selectionEnd,
      number = ele.value.replace(/\D/g,'');
  
  if (number.length > 2) {
    new_number = number.substring(0,3) + '-';
    if (number.length === 4 || number.length === 5) {
      new_number += number.substr(3);
    }
    else if (number.length > 5) {
      new_number += number.substring(3,6) + '-';
    }
    if (number.length > 6) {
      new_number += number.substring(6);
    }
  }
  else {
    new_number = number;
  }
  
  ele.value =  (new_number.length > 12) ? new_number.substring(0,12) : new_number;
  
  if (new_number.slice(-1) === '-' && restore === false
      && (new_number.length === 8 && selection_end === 7)
          || (new_number.length === 4 && selection_end === 3)) {
      selection_start = new_number.length;
      selection_end = new_number.length;
  }
  else if (restore === 'revert') {
    selection_start--;
    selection_end--;
  }
  ele.setSelectionRange(selection_start, selection_end);

}
  
function phone_number_check(field,e) {
  var key_code = e.keyCode,
      key_string = String.fromCharCode(key_code),
      press_delete = false,
      dash_key = 189,
      delete_key = [8,46],
      direction_key = [33,34,35,36,37,38,39,40],
      selection_end = field.selectionEnd;
  
  if (delete_key.indexOf(key_code) > -1) {
    press_delete = true;
  }
  
  if (key_string.match(/^\d+$/) || press_delete) {
    phone_formatting(field,press_delete);
  }
  else if(direction_key.indexOf(key_code) > -1) {
  }
  else if(dash_key === key_code) {
    if (selection_end === field.value.length) {
      field.value = field.value.slice(0,-1)
    }
    else {
      field.value = field.value.substring(0,(selection_end - 1)) + field.value.substr(selection_end)
      field.selectionEnd = selection_end - 1;
    }
  }
  else {
    e.preventDefault();
    phone_formatting(field,'revert');
  }

}

function validateForm(whatForm, whatPanel){
	
	var validateOK = true;
	var checkWhat = whatForm;
	if ( whatPanel ){
		checkWhat = whatPanel;
	}
	
	$(checkWhat + ' * ').filter(':input').each(function( index, el ){
		var characterReg = "";
		var thisType;
		var thisValue;
		var thisID;
			
		thisType 	= el.type;
		thisValue 	= el.value;
		
		thisID 		= el.id;
		thisReq		= $('#' + thisID).data('req');
		
		if ( thisReq == 1 || thisValue != '' ) {
		
			switch ( thisType ){
				case 'text':
					
					if ( $(el).data('match') !== undefined ){
						characterReg = new RegExp($(el).data('match'));
					} else {
						characterReg = /^\s*[a-zA-Z0-9-.,'\s]+\s*$/;
					}
					
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'password':
	
					characterReg = /^\s*[a-zA-Z0-9-.,#!^*@()~'\s]+\s*$/;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'email':
	
					characterReg = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'tel':
	
					characterReg = /^\(?([2-9]\d{2})\)?[-.●]?([2-9]\d{2})[-.●]?([0-9]{4})$/;
					if(!characterReg.test(thisValue)) {
						validateOK = false;
						$('#' + thisID).addClass('fielderror');
					} else {
						$('#' + thisID).removeClass('fielderror');
					}
					
					break;
					
				case 'select-one':
		
					if (thisValue == ""){
						validateOK = false;
						$('#' + thisID + '_box').addClass('fielderror');
					} else {
						$('#' + thisID + '_box').removeClass('fielderror');
					}
					
					break;
			}
		}
	});
	
	return validateOK;
}


$( document ).ready(function() {
	
	document.getElementById('mobilephone').onkeyup = function(e) {
		phone_number_check(this,e);
	}
	
	$('#country').on('change', function(){
		if ( $(this).val() == 'United States' ) {
			$('#state').data('req',1);
			$('#zip').data('req',1);
			
			$('#state').val('');
		} else {
			$('#state').data('req',0);
			$('#zip').data('req',0);
			
			$('#state').val('Outside the US');
		}
	});
	
	
	$('#state').on('change', function(){
		if ( $(this).val() != 'Outside the US' ) {
			$('#state').data('req',1);
			$('#zip').data('req',1);
			
			$('#country').val('United States');
		} else {
			$('#state').data('req',0);
			$('#zip').data('req',0);
		}
	});
	
	
	$('.form_navigate').click(function() {
		var navto 	= $(this).data('navto');
		var navfrom = $(this).data('navfrom');
		
		var whatForm 	= '#' + $(this).parents('form:first').attr('id');
		var validateOK 	= validateForm( whatForm, '#' + navfrom );
		
		if(validateOK === true) {
			$('#' + navfrom).fadeOut(300, function(){
				$('#' + navfrom + '_img').addClass('makegray');
				$('#' + navto + '_img').removeClass('makegray');
				$('#' + navto).fadeIn(300);
			});
		}
	});
	
	
	$('.form_submit').click(function() {
		
		var whatForm 	= '#' + $(this).parents('form:first').attr('id');
		var whatMsg 	= $(this).closest('form').find('.form_msg');
		
		$(whatMsg).slideUp();
		$(whatMsg).removeClass('makered');
		$(whatMsg).removeClass('makegreen');
		
		var validateOK = validateForm( whatForm );
	    
		if(validateOK === true) {
			
			$.ajax({
				cache: false,
			    type : "POST",
		        url: "/themes/uat/includes/AJAX-MAIN-RFI-to-HS.php",
		        data: $(whatForm).serialize(),
		        beforeSend: function(){ $('.form_submit').html('Processing...'); },
		        success: function(result){
		        	if( result.match('SUCCESS') ){
			        	
			        	$(whatForm)[0].reset();
		        		$('.form_submit').html('Thank you!');
		        		$('.form_submit').css('background-color','#ddffdd');
		        		window.location.href = "https://www.uat.edu/request-info-thank-you";
		        		
		        	} else {
			        	
						$(whatMsg).html('Your request could not be completed (E01)');
						$(whatMsg).addClass('makered');
						$(whatMsg).slideDown();
		        		$('.form_submit').html('Oops!');
		        		$('.form_submit').css('background-color','#ffdddd');
		        	}
		        },
                error: function(textStatus, errorThrown) {
	                
					$(whatMsg).html('Your request could not be completed (E02)');
					$(whatMsg).addClass('makered');
					$(whatMsg).slideDown();
		        	$('.form_submit').html('Oops!');
		        		$('.form_submit').css('background-color','#ffdddd');
                }
	        });
	        
		} else {
			
			$(whatMsg).html('Please check the highlighted fields!');
			$(whatMsg).slideDown();
			$(whatMsg).addClass('makered');
		    $('.form_submit').html('Oops!');
		    $('.form_submit').css('background-color','#ffdddd');
		}
		
		return false;
	});
	
});