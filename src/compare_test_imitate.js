/**
 * Created by guorui on 14-8-10.
 */
function guess_success(){
    document.getElementById("number").value = "1234"
    document.getElementById("confirm_button").click()
//    get_result_no_start()
}
function guess_failed(number){
    var i
    for(i = 0;i<= number;i++) {
        document.getElementById("number").value = "1230"
        document.getElementById("confirm_button").click()
    }
}
function guess(){
    document.getElementById("number").value = ""
    document.getElementById("label").innerHTML = "请点击‘开始’按钮"
    document.getElementById("confirm_button").disabled = true
}
function export_label(message){
    document.getElementById("label").innerHTML = message
}
function button_disabled(compare){
    document.getElementById("confirm_button").disabled = compare
}
function get_input(){
    return document.getElementById("number").value
}
//function number_of_A(){
//    return JSON.parse(localStorage.getItem("number_of_A"))
//}
//function number_of_B(){
//    return JSON.parse(localStorage.getItem("number_of_B"))
//}
//function save_number_of_A(number){
//    localStorage.setItem("number_of_A",number)
//}
//function save_number_of_B(number){
//    localStorage.setItem("number_of_B",number)
//}
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
//function compare_random_input(){
//    var guess_number = get_input()
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
//    for(var i = 0;i <= 3; i ++){
//        for(var j = 0;j <= 3; j ++){
//            add_number_A_time(i,j,guess_number,random_number)
//        }
//    }
//}
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
        console.log('++++')
//        button_disabled(true)
        export_label("输入猜测格式不正确！")
        return
    }
    else
        return get_A_and_B_result_success(random_number,guess_number)
}
function get_A_and_B_result_success(random_number,guess_number){
    var number_of_time = JSON.parse(localStorage.getItem("number_of_time"))
    console.log(number_of_time)
    if(random_number == guess_number && number_of_time < 6){
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




