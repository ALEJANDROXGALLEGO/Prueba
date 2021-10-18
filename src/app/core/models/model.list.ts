export class MyList{
    public id: number;
    public text: string;
    constructor(text: string) {
        this.text = text;
        this.id   = new Date().getTime();
    }
}