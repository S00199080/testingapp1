import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('it should include the name in the message', () => {
        expect (getCurrencies()).toContain('USD');  
    })

    it('it should include the name in the message', () => {
        expect (getCurrencies()).toContain('EUR');  
    })

    it('it should include the name in the message', () => {
        expect (getCurrencies()).toContain('GBP');  
    })

    it('it should include the name in the message', () => {
        expect (getCurrencies()).toContain('CAD');  
    })
});