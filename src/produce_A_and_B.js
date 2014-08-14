/**
 * Created by guorui on 14-8-14.
 */
function put_A_and_B_number(data){
    var number_of_A=data["number_A"];
    var number_of_B=data["number_B"];
    return number_of_A + "A" + number_of_B + "B"
}
function add_number_A_time(guess_number,random_number){
    var number_A=0;
    var number_B=0;
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