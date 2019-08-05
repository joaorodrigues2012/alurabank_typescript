class NegociacaoController {

    private _inputdata: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        //this._inputdata = <HTMLInputElement>document.querySelector("#data");
        //this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        //this._inputValor = <HTMLInputElement>document.querySelector("#valor");
        this._inputdata = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        //alert("Minha logica aqui");
        event.preventDefault();

        const negociacao = new Negociacao(
            // new Date(this._inputdata.value.replace(/-/g, ',')),
            // parseInt(this._inputQuantidade.value),
            // parseFloat(this._inputValor.value)

            new Date(this._inputdata.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())

        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        });
    }
}