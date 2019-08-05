class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    //private _negociacoes: Negociacoes[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}