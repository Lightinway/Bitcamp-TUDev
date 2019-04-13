$( document ).ready(function() {
    $.ajax({
        url: 'http://api.reimaginebanking.com/customers?key=14e76db44c0d76ef32abacebb8f5c903',
        success: function(results){
            alert("work");
            console.log(results);
        }
    });
});