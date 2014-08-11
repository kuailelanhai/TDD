/**
 * Created by guorui on 14-8-10.
 */
function guess_success(){
    document.getElementById("number").value = "1234"
    document.getElementById("confirm_button").click()
}
function guess_failed(number){
    for(var i = 0;i<number;i++)
    document.getElementById("number").value = "1230"
    document.getElementById("confirm_button").click()
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
function number_of_A(){
//    console.log('--------------------------------------')
//    console.log(JSON.parse(localStorage.getItem("number_of_A")))
//    return JSON.parse(localStorage.getItem("number_of_A"))
    return 1
}
function number_of_B(){
    return JSON.parse(localStorage.getItem("number_of_B"))
}
function save_number_of_A(number){
    localStorage.setItem("number_of_A",number)
}
function save_number_of_B(number){
    localStorage.setItem("number_of_B",number)
}
function put_A_and_B_number(data){
//    var number_of_A = number_of_A();
//    var number_of_B = number_of_B();
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
//    var number_A = number_of_A();
    var number_A=0;
    var number_B=0;
//    var guess_number = get_input()
//    var random_number = JSON.parse(localStorage.getItem("random_number")).toString()

    for(var i = 0;i <= 3; i ++){
        for(var j = 0;j <= 3; j ++){
            if(guess_number.toString()[i] == random_number.toString()[j] && i == j){
//                console.log(number_A)
                number_A = number_A + 1;
//                save_number_of_A(number_A)
            }
            if(guess_number.toString()[i] == random_number.toString()[j] && i != j){
                number_B = number_B +1
            }

        }
    }
    return {"number_A":number_A,"number_B":number_B}
//    return add_number_B_time(i,j,guess_number,random_number)
}
function add_number_B_time(i,j,guess_number,random_number){
    var number_B = number_of_B()
    if(guess_number[i] == random_number[j] && i != j){
        number_B = number_B + 1
        save_number_of_B(number_B)
    }
}
function compare_random_input(){
    var guess_number = get_input()
    var random_number = JSON.parse(localStorage.getItem("random_number"))
    for(var i = 0;i <= 3; i ++){
        for(var j = 0;j <= 3; j ++){
            add_number_A_time(i,j,guess_number,random_number)
        }
    }
}
function get_A_and_B_result_no_start(){
    var random_number = JSON.parse(localStorage.getItem("random_number"))
    if(random_number = ""){
        button_disabled(true)
        export_label("猜测游戏尚未开始！")
    }
    return get_A_and_B_result_wrong(random_number)
}
function get_A_and_B_result_wrong(random_number){
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
    var guess_number = get_input()
    if(random_number.length != 4 || number_is_not_repeat(guess_number)){
        button_disabled(true)
        export_label("输入猜测格式不正确！")
    }
    return get_A_and_B_result_success(random_number)
}
function get_A_and_B_result_success(random_number){
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
    var number_of_time = JSON.parse(localStorage.getItem("number_of_time"))
    var guess_number = get_input()
    if(random_number == guess_number && number_of_time <= 6){
        button_disabled(true)
        export_label("猜测数字正确!")
    }
    return get_A_and_B_failed(random_number,number_of_time,guess_number)
}
function get_A_and_B_failed(random_number,number_of_time,guess_number){
//    var random_number = JSON.parse(localStorage.getItem("random_number"))
//    var number_of_time = JSON.parse(localStorage.getItem("number_of_time"))
//    var guess_number = get_input()
    if(random_number != guess_number && number_of_time == 6){
        button_disabled(true)
        export_label("猜测数字失败!")
    }
    return continue_guess(random_number,guess_number,number_of_time)
}
function continue_guess(random_number,guess_number,number_of_time){
    if (random_number != guess_number && number_for_times <= 6) {
        export_label(realize_analysis(guess_number, random_number));
    }
}
function realize_analysis(number_is_guess, random_number) {
//    for(var i = 0;i <= 3; i ++){
//        for(var j = 0;j <= 3; j ++){
            var data=add_number_A_time(number_is_guess,random_number)
//            console.log(number_is_guess)
//        }
//    }
    console.log(document.getElementById("confirm_button"))
    add_number_of_time()
    return put_A_and_B_number(data)
}
