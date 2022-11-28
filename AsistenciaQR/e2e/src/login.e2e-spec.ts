import { browser, element, by } from "protractor";

describe("mi prueba",()=>{
    beforeEach(() => {
        browser.get("/");
    });

    //prueba 1
    it("En la pestaña login, se muestra correctamente el texto de recuperar contraseña",()=>{
        expect(element(by.css(".recuperar-contra-text")).getText()).toContain("¿Olvidaste");
    });

    //prueba 2
    it("Se redirige como usuario admin a la pagina principal correctamente",()=>{
        let el = element(by.css('input[type="text"]'));
        browser.sleep(500);
        el.sendKeys('admin');
        let el2 = element(by.css('input[type="password"]'));
        browser.sleep(500);
        el2.sendKeys('admin');
        element(by.css(".btn-iniciar-sesion")).click();
        browser.driver.sleep(500);
        expect(element(by.css("#texto-escanear-QR")).getText()).toContain("Escanear QR");
    });


});