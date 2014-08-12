/**
 * Created by guorui on 14-8-10.
 */
describe("Creat Number",function(){
    beforeEach(function(){
        var random_number
    })
    afterEach(function(){
        localStorage.clear()
    })
    var random_number
    it("should first be a number",function(){
        random_number = creat_random_number()
        expect(isNaN(random_number)).toBe(false)
    })
    it("should second make a four digit number",function(){
        random_number = creat_random_number()
        expect(random_number.length).toBe(4)
    })
    it("should the number is not repeat",function(){
        var status_number = number_is_not_repeat(random_number)
        expect(status_number).toBe("true")
    })


})