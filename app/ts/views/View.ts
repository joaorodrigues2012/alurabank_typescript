export abstract class View<T> {

    protected _element: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar: boolean = true, opcional?:boolean) {
        //this._element = document.querySelector(selector);
        this._element = $(selector);
        this._escapar = escapar;
    }
 
    update(model: T) {

        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        //this._element.html(this.template(model));
        this._element.html(template);
    }

    abstract template(model: T): string;

}
