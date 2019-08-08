import {NegociacoesView, MensagemView} from "../views/index";
import {Negociacao, Negociacoes} from "../models/index";
import {domInject} from "../helpers/decorators/index";

export class NegociacaoController {

    @domInject('#data')
    private _inputdata: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        //this._inputdata = <HTMLInputElement>document.querySelector("#data");
        //this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        //this._inputValor = <HTMLInputElement>document.querySelector("#valor");

        // this._inputdata = $("#data");
        // this._inputQuantidade = $("#quantidade");
        // this._inputValor = $("#valor");


        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        //alert("Minha logica aqui");
        //const t1 = performance.now();
        event.preventDefault();

        let data = new Date(this._inputdata.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias uteis.');
            return
        }

        const negociacao = new Negociacao(
            // new Date(this._inputdata.value.replace(/-/g, ',')),
            // parseInt(this._inputQuantidade.value),
            // parseFloat(this._inputValor.value)

            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

        // const t2 = performance.now();
        // console.log(`o tempo de execução de adiciona é de ${t2 - t1} ms`);

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        });
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}