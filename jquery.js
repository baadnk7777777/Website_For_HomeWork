

$('#inputmaxbox').keyup(function(){
    var inmax = 0;
    var inmax = $('#inputmaxbox').val();
    alert(inmax);

    $('#message').keyup( function(){
        var max = inmax;
        
        $('#feedback').html(max + "Characters(s) Remaining");
    
        var text_length = $('#message').val().length;
    
        var remaining = max - text_length;
        if(remaining < 0 )
        {
            remaining =0;
        }
        
        if(this.value.length >= inmax){
            this.value  = this.value.substring(0, max);
            
        }
    
        $("#feedback").html(remaining + " Characters(s) Remaining");
        $("#Maximum").html("Maximum "+max +" characters");
    });


})

// $("#mytable").on('click','.del',function(){
//     alert("d")
//     $(this).closest('tr').remove();
// });

$("#addrow").on('click',function(){
    var addcontrols = "<tr>"
    addcontrols+="<td><input type='checkbox' name='chkbox' placeholder='Enter Name ..'></td>"
    addcontrols+="<td>"+$("#c1").val()
    addcontrols+="<td>"+$("#c2").val()
    addcontrols+="</tr>";
    $("#mytable").append(addcontrols);
    // $("#mytable").append("<tr><td>"+$("#ch").val("")+"</td>" +"<td>"+$("#c1").val() +"</td><td>"+$("#c2").val()+ "</tr>");
    
});

$("#Delrows").click(function(){
    $("#mytable").find('input[name="chkbox"]').each(function(){
        if($(this).is(":checked"))
        {
            $(this).parents("tr").remove();
        }
    })
    });

