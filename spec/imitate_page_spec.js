/**
 * Created by guorui on 14-8-10.
 */
describe("Creat Number",function() {
    beforeEach(function () {
        localStorage.random_number = "1234"
        localStorage.number_of_time = "0"
        document.getElementById("confirm_button").disabled = false
    })
    afterEach(function () {
        localStorage.clear()
    })
//    var random_number = "1234"
//    it("should be show success when first export 1234",function(){
//        var guess_number = "1234"
//        var number = localStorage.number_of_time + ""
//        expect(get_result_no_start(number,random_number,guess_number)).toBe("恭喜成功猜对数字!")
//    })
//    it("should be show success when third export 1234",function(){
//        var guess_number = "1230"
//        var number = "2"
//
//        expect(get_result_no_start(number,guess_number,random_number)).toBe("3A0B")
//    })
//    it("should be show success when last export 1234",function(){
//        var guess_number = "1240"
//        var number = "5"
//        expect(get_result_no_start(number,guess_number,random_number)).toBe("2A1B")
//    })
//    it("should be show fail when no export 1234",function(){
//        var guess_number = "1240"
//        var number = "6"
//        console.log(get_result_no_start(number,guess_number,random_number))
//        expect(get_result_no_start(number,guess_number,random_number)).toBe("对不起，您没有猜对数字，随机数字为:" + random_number)
//    })
    it("should be true when export numbers less than six times",function(){
        var number = JSON.parse(localStorage.getItem("number_of_time"))
        number = "2"
        localStorage.setItem("number_of_time",JSON.stringify(number))
        expect(test_number_times()).toBe(true)
    })
    it("should be false when export numbers greater than six times",function(){
        var number = JSON.parse(localStorage.getItem("number_of_time"))
        number = "6"
        localStorage.setItem("number_of_time",JSON.stringify(number))
        expect(test_number_times()).toBe(false)
    })
})