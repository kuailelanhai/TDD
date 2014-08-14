/**
 * Created by guorui on 14-8-10.
 */
//function guess_success(){
//    document.getElementById("number").value = "1234"
//    document.getElementById("confirm_button").click()
////    get_result_no_start()
//}
//function guess_failed(number){
//    var i
//    for(i = 0;i<= number;i++) {
//        document.getElementById("number").value = "1230"
//        document.getElementById("confirm_button").click()
//    }
//}
//function guess(){
//    document.getElementById("number").value = ""
//    document.getElementById("label").innerHTML = "请点击‘开始’按钮"
//    document.getElementById("confirm_button").disabled = true
//}
function export_label(message){
    document.getElementById("label").innerHTML = message
}
function button_disabled(compare){
    document.getElementById("confirm_button").disabled = compare
}
function get_input(){
    return document.getElementById("number").value
}
function put_A_and_B_number(data){
    var number_of_A=data["number_A"];
    var number_of_B=data["number_B"];
    return number_of_A + "A" + number_of_B + "B"
}
function add_number_of_time(){
    var number = JSON.parse(localStorage.getItem("number_of_time"))
    number = number + 1
    localStorage.setItem("number_of_time",number)
}
function add_number_A_time(guess_number,random_number){
    var number_A=0;
    var number_B=0;
    var random_number =random_number + ""
    var guess_number = guess_number + ""
    for(var i = 0;i <= 3; i ++){
        for(var j = 0;j <= 3; j ++){
            if(guess_number[i] == random_number[j] && i == j){
                number_A = number_A + 1;
            }
            if(guess_number[i] == random_number[j] && i != j){
                number_B = number_B + 1
            }
        }
    }
    return {"number_A":number_A,"number_B":number_B}
}
function get_A_and_B_result_no_start(){
    var random_number = JSON.parse(localStorage.getItem("random_number"))
    console.log(random_number)
    if(random_number = ""){
        button_disabled(true)
        export_label("猜测游戏尚未开始！")
    }
    return get_A_and_B_result_wrong(random_number)
}
function get_A_and_B_result_wrong(random_number){
    var random_number = JSON.parse(localStorage.getItem("random_number"))
    console.log(random_number.length)
    var guess_number = get_input()
    if(guess_number.length != 4 || number_is_not_repeat(guess_number) == "true"){
        export_label("输入猜测格式不正确！")
        return
    }
    else
        return get_A_and_B_result_success(random_number,guess_number)
}
function get_A_and_B_result_success(random_number,guess_number){
    var number_of_time = JSON.parse(localStorage.getItem("number_of_time"))
    console.log(number_of_time)
    if(random_number == guess_number && test_number_times){
        button_disabled(true)
        export_label("恭喜成功猜对数字!")
        return
    }
    return continue_guess(random_number,guess_number,number_of_time)
}
function get_A_and_B_failed(random_number,number_of_time,guess_number){
    if(random_number != guess_number && number_of_time == 6){
        button_disabled(true)
        export_label("对不起，您没有猜对数字，随机数字为:" + random_number)
    }
}
function continue_guess(random_number,guess_number,number_of_time){
    if (random_number != guess_number && number_of_time < 6) {
        export_label(realize_analysis(guess_number, random_number));
    }
    return get_A_and_B_failed(random_number,number_of_time,guess_number)
}
function realize_analysis(guess_number, random_number) {
    var data=add_number_A_time(guess_number,random_number)
    add_number_of_time()
    return put_A_and_B_number(data)
}


//
//function get_result_no_start(number,guess_number,random_number){
//    console.log('1')
//    console.log(guess_number)
//    console.log(random_number)
//    if(random_number == ""){
//       return "猜测游戏尚未开始！"
//    }
//    console.log(random_number)
//    return get_result_wrong(number,random_number,guess_number)
//}
//function get_result_wrong(number,random_number,guess_number){
//    console.log('2')
//    console.log(guess_number)
//    console.log(random_number)
//    if(guess_number.length != 4 || number_is_not_repeat(guess_number) == "true"){
//        return "输入猜测格式不正确！"
//    }
//    else
//        return get_result_success(number,random_number,guess_number)
//}
//function get_result_success(number,random_number,guess_number){
//    console.log('3')
//    console.log(guess_number)
//    console.log(random_number)
//    var number = number
//    console.log(number)
//    console.log(guess_number)
//    console.log(random_number)
//    if(random_number == guess_number && number+"" < 6){
//        console.log('1000')
//        return "恭喜成功猜对数字!"
//    }
//    return continue_guesses(number,random_number,guess_number)
//}
//function get_failed(number,random_number,guess_number){
//    console.log('5')
//    if(random_number != guess_number && number == 6){
//        return "对不起，您没有猜对数字，随机数字为:" + random_number
//    }
//}
//function continue_guesses(number,random_number,guess_number){
//    console.log('4')
//    if (random_number != guess_number && number < 6) {
//        return realize_analysis(guess_number, random_number)
//    }
//    return get_failed(number,random_number,guess_number)
//}



