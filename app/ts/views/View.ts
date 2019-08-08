import {LogarTempoDeExecucao} from "../helpers/decorators/index";

export abstract class View<T> {

    protected _element: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar: boolean = true, opcional?:boolean) {
        //this._element = document.querySelector(selector);
        this._element = $(selector);
        this._escapar = escapar;
    }

    @LogarTempoDeExecucao(true)
    update(model: T) {

        //const t1 = performance.now();

        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        //this._element.html(this.template(model));
        this._element.html(template);

        //const t2 = performance.now();
        //console.log(`o tempo de execução de update é de ${t2 - t1} ms`);

    }

    abstract template(model: T): string;

}
