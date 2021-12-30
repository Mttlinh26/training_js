$(document).ready(function(){
    //onclick start
    //Cach 5 jquery
    $("#click5").on('click', function(){
        alert('Hello5!');
    });
    //Cach 6
    $(".click6").click(function(){
        alert('hello6!');
    });
    //onclick end

    //onchange start
    //Cach 4 jquery 
    $("#select-4").on('change', function(){
        console.log(this.value);
    });
    $("#btn-check-4").on('click', function() {
        $("demo-change-4").change( function() {
            console.log(this.value);
        });
    });
    //Cách 5
    $("#select-5").change(function(){
        console.log(this.value);
    });
    $("#btn-check-4").click(function() {
        $("#demo-change-4").change();
    });
    //onchange end

    // keyup start
    //cach 4
    $("#test-key-4").on('keyup', function(){
        console.log(this.value);
    });
    //cach 5
    $("#test-key-5").keyup(function() {
        console.log(this.value);
    });
    //demo event.which xác định phím nào được nhấn
    $("#test-key-6").keyup(function(event){
        $(".event-key").html("Key is:" + event.which);
    });
    //keyup end

    //keydown start
    //cach 4
    $("#key-down-4").on('keydown', function() {
        console.log("demo4");
    });
    //Cách 5
    $("#key-down-5").keydown(function(){
        console.log("demo5");
    });
    //keydown end
});
