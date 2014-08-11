/**
 * Created by guorui on 14-8-10.
 */
describe("Compare Number",function(){
    beforeEach(function(){
        var random_number = "1234"
    })
    afterEach(function(){

    })
    it("should be realize compare number",function(){
        var number_is_guess = "1234"
        var compare_guess_random = realize_analysis(number_is_guess,random_number)
        expect(compare_guess_random).toBe("4A0B")
    })
    it("should be 3A0B when number_is_guess is 1230",function() {
        var number_is_guess = "1230"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("3A0B")
    })
    it("should be 2A0B when number_is_guess is 1256",function() {
        var number_is_guess = "1256"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("2A0B")
    })
    it("should be 1A0B when number_is_guess is 1567",function() {
        var number_is_guess = "1567"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("2A0B")
    })
    it("should be 0A4B when number_is_guess is 4321",function() {
        var number_is_guess = "4321"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("0A4B")
    })
    it("should be 0A3B when number_is_guess is 4320",function() {
        var number_is_guess = "4320"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("0A3B")
    })
    it("should be 0A2B when number_is_guess is 4389",function() {
        var number_is_guess = "4389"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("0A2B")
    })
    it("should be 0A1B when number_is_guess is 4567",function() {
        var number_is_guess = "4567"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("0A1B")
    })
    it("should be 1A3B when number_is_guess is 1423",function() {
        var number_is_guess = "1423"
        var compare_guess_random = realize_analysis(number_is_guess, random_number)
        expect(compare_guess_random).toBe("1A3B")
    })
})