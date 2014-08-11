/**
 * Created by guorui on 14-8-10.
 */
creat_one_digit_random_number = function(){
    var one_number = Math.floor(Math.random()*10)
    return one_number
}
creat_random_number = function(){
    var random_number = ""
    for(var i = 0;i <= 3;i ++){
        var one_number = creat_one_digit_random_number()
        if(check_if_one_number(random_number,one_number) == true){
            one_number = creat_one_digit_random_number()
        }
        random_number = random_number + one_number
    }
    localStorage.setItem("random_number",JSON.stringify(random_number))
    return random_number
}
check_if_one_number = function(random_number,one_number){
    _.some(random_number,function(num){return num == one_number})
}
number_is_not_repeat = function(random_number){
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
    var status_number
    for(var i = 0;i< 3;i ++){
        for(var j = i+1;j <= 3;j++){
            if(random_number[i] != random_number[j]){
                return "false"
            }
        }
    }
    return "true"
}
start = function(){
    creat_random_number()
    document.getElementById("number").value = ""
    document.getElementById("label").innerHTML = ""
    document.getElementById("confirm_button").disabled = "false"
    localStorage.number_of_time = "0"
    localStorage.number_of_A = "0"
    localStorage.number_of_B ="0"
}