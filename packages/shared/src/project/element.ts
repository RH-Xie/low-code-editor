import {uuid} from "../utils";
export interface IElement {
    id: string;
    // 名称
    name: string;
    // 物料
    mId: number;
    // 物料版本
    mVersion: string;
    // 样式
    style: IElementStyle;
    // 属性
    props: Record<string, any>;
}

export interface IElementStyle {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    zIndex?: number;
}

export class PageElement implements IElement{
    public static create(e?: IElement) {
        const element = new PageElement();
        if(e) {
            element.name = e.name;
            element.id = e.id;
            element.mId = e.mId;
            element.mVersion = e.mVersion;
            element.style = e.style;
            element.props = e.props || {};
        }
        return element;
    }

    public id: string = uuid();
    public name: string = 'New Element';
    public mId: number;
    public mVersion: string ;
    public style: IElementStyle = {
    };
    public props: Record<string, any> = {};

    constructor() {

    }
    public getJson() :IElement {
        return {
            id: this.id,
            name: this.name,
            mId: this.mId,
            mVersion: this.mVersion,
            style: this.style,
            props: this.props,
        };
    }
}