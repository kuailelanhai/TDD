/**
 * Created by guorui on 14-8-14.
 */
test_number_times = function(){
    var number = JSON.parse(localStorage.getItem("number_of_time"))
    if(number < 6){
        return true
    }
    return false
}