class NegociacoesView {

    private _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    update(model: Negociacoes): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(negociacoes =>
            `
                <tr>
                <td>${negociacoes.data.getDate() + '/' + negociacoes.data.getMonth() + 1 + '/' + negociacoes.data.getFullYear()}</td>
                <td>${negociacoes.quantidade}</td>
                <td>${negociacoes.valor}</td>
                <td>${negociacoes.volume}</td>
</tr>
                `
        ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>    
        `;
    }
}