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
//    var random_number
    it("should put create and compare combine",function(){
        var random_number = creat_random_number()
        var guess_number = random_number
        var result = realize_analysis(guess_number,random_number)
        expect(result).toBe("4A0B")
    })
    it("should be 3A0B",function(){
        var random_number = creat_random_number();
        var guess_number = creat_two_random_number(random_number)
        var result = realize_analysis(guess_number,random_number)
        expect(result).toBe("3A0B")
    })
})