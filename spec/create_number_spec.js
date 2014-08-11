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
        expect(isNaN(random_number)).toBe(true)
    })
    it("should second make a four digit number",function(){
        random_number = creat_random_number()
        expect(random_number.length).toBe(4)
    })
    it("should the number is not repeat",function(){
        var number_status = number_is_not_repeat()
        expect(status_number).toBe("false")
    })
    it("should be a random number",function(){
        random_number = realize_number_random()
        expect(random_status).toBe(true)
    })

})