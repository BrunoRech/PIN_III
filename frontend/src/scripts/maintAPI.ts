import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageManutAPI: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Manutenção de API\'s', '');
        var oUrl = Funct.createInput('base', 'URL');
        var oParametro = Funct.createInput('base', 'Parâmetros');
        var oAtualizar = Funct.createInput('base', 'Atualizar em');
        var oIntervalo = Funct.createInput('base', 'Intervalo');
        Funct.createButton('base', 'Enviar', () => { 
        });
    }
}