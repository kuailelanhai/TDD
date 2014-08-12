/**
 * Created by guorui on 14-8-10.
 */
describe("Creat Compare Test",function(){
    beforeEach(function(){
        var random_number
    })
    afterEach(function(){
        localStorage.clear()
    })
    var random_number
    it("should put create and compare combine",function(){
        random_number = creat_random_number()
        var number_is_guess = random_number
        var result = realize_analysis(number_is_guess,random_number)
        expect(result).toBe("4A0B")
    })
    it("should be 2A0B",function(){
        random_number = creat_random_number();
        var compare_guess_random = creat_two_random_number(random_number)
        var result = realize_analysis(compare_guess_random,random_number)
        expect(result).toBe("2A1B")
    })
})