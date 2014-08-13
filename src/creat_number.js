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
        console.log(check_if_one_number(random_number,one_number))
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
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
    for(var i = 0;i< 3;i ++){
        for(var j = i + 1;j <= 3;j++){
            if(random_number[i] == random_number[j] || random_number[0] == random_number[1] || random_number[2] == random_number[3] ||random_number[2] == random_number[4]
                || random_number[i] == random_number[j+1] || random_number[i] == random_number[j + 2] || random_number[i + 1] == random_number[j + 3]
               || random_number[i+1] == random_number[j + 2] ||random_number[i] == random_number[j + 3] || random_number[2] == random_number[3]){
                return "true"
            }
            return "false"
        }
    }
}
start = function(){
    creat_random_number()
    document.getElementById("number").value = ""
    document.getElementById("label").innerHTML = ""
    document.getElementById("confirm_button").disabled = false
    localStorage.number_of_time = "0"
    localStorage.setItem("number_of_A",JSON.stringify(0))
    localStorage.setItem("number_of_B",JSON.stringify(0))
//    localStorage.number_of_A = "0"
//    localStorage.number_of_B ="0"
}
//creat_one_digit_random_number=function() {
//    var one_digit_random = (Math.floor(Math.random() * 9 + 0)).toString();
//    return one_digit_random;
//}
//
//create_random_number=function() {
//    var random_number = "";
//    var i;
//    for (i = 0; i < 4; i++) {
//        var one_digit_random = creat_a_one_digit_random();
//        while (is_or_no_have_some_number(random_number, one_digit_random) == true) {
//            one_digit_random = creat_a_one_digit_random();
//        }
//        random_number = random_number + one_digit_random;
//    }
//    localStorage.setItem("random_number", random_number);
//    return random_number
//}
//
//check_if_one_number=function(random_number, one_digit_random) {
//    return _.some(random_number, function (list) {
//        return list == one_digit_random
//    })
//}
//
//
//number_is_not_repeat=function(random_number) {
//    var i, j;
//    for (i = 0; i < 3; i++) {
//        for (j = i + 1; j < 4; j++) {
//            if (random_number[i] == random_number[j]) {
//                return "true";
//            }
//        }
//    }
//    return "false";
//}

