
function submitToApi(e) {
    if (!e) e = window.event;
    e.preventDefault();

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#message-input").val();
    var radio = $('input[name=inlineRadioOptions]:checked', '#contact_form').val();

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert ("Name can not less than 2 char");
        return;
    }
    var mobilere = /[0-9]{10}/;
    if (!mobilere.test($("#phone-input").val())) {
        alert ("Please enter valid mobile number");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if ($("#email-input").val()=="") {
        email = '';
    } else {
      if (!reeamil.test($("#email-input").val())) {
        alert ("Please enter valid email address");
        return;
    }
    }


    var dataToSend = {
       name : name,
       phone : phone,
       email : email,
       desc : desc, 
       radio: radio
     };
    $('.alert').css('display', 'block');
    $('.alert').css('visibility', 'visible');

    $.ajax({
      url: "https://to1aurlp44.execute-api.ap-south-1.amazonaws.com/v1/sendEmail",
      method: "POST",
      crossDomain: true,
      contentType: 'application/json',
      timeout: 0,
      dataType: "json",
      data: JSON.stringify(dataToSend),
    }).done(function (response) {
      console.log(response);
      return;
    }).fail(function(response) {
      console.log(response);
      return;
    });


  };
