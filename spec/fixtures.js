/**
 * Created by guorui on 14-8-9.
 */
function clear(){
    localStorage.random_number = ""
    document.getElementById("input").value = ""
    document.getElementById("label").innerHTML = ""
    document.getElementById("confirm_button").disabled = false
    localStorage.number_of_time = "0"
    localStorage.number_of_A = "0"
    localStorage.number_of_B ="0"
}
creat_a_different_digit_random_number = function(random_number){
    var one_number = Math.floor(Math.random()*10)
    while(check_if_want_number(random_number,one_number) == "true"){
        one_number = Math.floor(Math.random()*10)
    }
    return one_number
}
creat_two_random_number = function(random_number){
    var guess_number = "",i
    var one_number = creat_a_different_digit_random_number(random_number)
    for(var i = 0;i <= 1;i ++){
        guess_number = guess_number + random_number[i]
    }
    localStorage.setItem("random_number",JSON.stringify(random_number))
    return guess_number = guess_number + one_number
}
check_if_want_number = function(random_number,one_number){
    _.some(random_number,function(num){return num == one_number})
}