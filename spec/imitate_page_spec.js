/**
 * Created by guorui on 14-8-10.
 */
describe("Creat Number",function() {
    beforeEach(function () {
        localStorage.random_number = "1234"
        localStorage.is_how_many_times = "0"
        document.getElementById("confirm_button").disabled = false
    })
    afterEach(function () {
        localStorage.clear()
    })
    it("should be show success when first export 1234",function(){
        guess_success()
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对数字")
    })
    it("should be show success when third export 1234",function(){
        guess_failed(2)
        guess_success()
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对数字")
    })
    it("should be show success when last export 1234",function(){
        guess_fail(5)
        guess_success()
        expect(document.getElementById("label").innerHTML).toBe("恭喜成功猜对数字")
    })
    it("should be show fail when no export 1234",function(){
        guess_failse(6)
        expect(document.getElementById("label").innerHTML).toBe(("对不起，您没有猜对数字，随机数字为：random_number"))
    })
})