/**
 * Created by guorui on 14-8-10.
 */
creat_one_digit_random_number = function(){
    var one_number = Math.floor(Math.random()*10).toString()
    return one_number
}
creat_random_number = function(){
    var random_number = ""
    for(var i = 0;i <= 3;i ++){
        var one_number = creat_one_digit_random_number()
        while(check_if_one_number(random_number,one_number) == true){
            one_number = creat_one_digit_random_number()
        }
            random_number = random_number + one_number
    }
    localStorage.setItem("random_number",JSON.stringify(random_number))
    return random_number
}
check_if_one_number = function(random_number,one_number){
    return _.some(random_number,function(num){return num == one_number})
}
number_is_not_repeat = function(random_number){
    for(var i = 0;i< 3;i ++){
        for(var j = i + 1;j <= 3;j++){
            if(random_number[i] == random_number[j]){
//                || random_number[0] == random_number[1] || random_number[2] == random_number[3] ||random_number[2] == random_number[4]
//                || random_number[i] == random_number[j+1] || random_number[i] == random_number[j + 2] || random_number[i + 1] == random_number[j + 3]
//               || random_number[i+1] == random_number[j + 2] ||random_number[i] == random_number[j + 3] || random_number[2] == random_number[3]){
                return "true"
            }
            return "false"
        }
    }
}
start = function(){
    creat_random_number()
    document.getElementById("number").value = ""
    document.getElementById("label").innerHTML = "猜测游戏开始，在输入框中输入猜测数字！"
    document.getElementById("confirm_button").disabled = false
    localStorage.number_of_time = "0"
    localStorage.setItem("number_of_A",JSON.stringify(0))
    localStorage.setItem("number_of_B",JSON.stringify(0))
}

