$(document).ready(function(){
    //onclick start
    //Cach 4 jquery
    // $("#click1").on('click', function(){
    //     alert('Hello4!');
    // });
    //Cach 5
    // $("button").click(function(){
    //     alert('hello5!');
    // });
    //onclick end
    //onchange start
    //Cach 4 jquery 
    // $("#select2").on('change', function(){
    //     console.log(this.value);
    // })
   
    // $("#btnCheck").on('click', function() {
    //     $("#demoChange1").change( function() {
    //         console.log(this.value);
    //     });
    // });
    //Cách 5
    // $("#select2").change(function(){
    //     alert(this.value);
    // })
    $("#btnCheck").click(function() {
        $("demoChange1").change();
    })
    //onchange end
});