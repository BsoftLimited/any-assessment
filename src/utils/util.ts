export class Character{
    static isAlphbetic(char: number | string): boolean{
        if(typeof char === 'number'){
            let value = (char as number);
            return (value >= 65 && value <= 90) || (value >= 97 && value <= 122);
        }else if (typeof char === 'string' && char.length == 1){
            let value = char.charCodeAt(0);
            return (value >= 65 && value <= 90) || (value >= 97 && value <= 122);
        }
        return false;
    }

    static isNumeric(char: number | string): boolean{
        if(typeof char === 'number'){
            return char >= 48 && char <= 57;
        }else if (typeof char === 'string' && (char as string).length == 1){
            let value = char.charCodeAt(0);
            return value >= 48 && value <= 57;
        }
        return false;
    }

    static isAlphaNumeric(char: number | string): boolean{
        return this.isAlphbetic(char) || this.isNumeric(char);
    }

    static is_whitespace(char: string): boolean{
        return [' ', '\n', '\t'].includes(char);
    }
}

export class Option<T>{
    private value: T | undefined;

    public constructor(value?: T){
        this.value = value;
    }

    public is_some(): boolean{ return this.value != undefined }
    public is_none(): boolean{ return this.value == undefined }

    public none(){ this.value = undefined; }
    public set(value: T){ this.value = value; }
    public unwrap(): T{ return this.value as T; }
}