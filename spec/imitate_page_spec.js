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
    it("should be false when export numbers greater than six times",function(){
        var number = JSON.parse(localStorage.getItem("number_of_time"))
        number = "5"
        localStorage.setItem("number_of_time",JSON.stringify(number))
        expect(test_number_times()).toBe(true)
    })
})