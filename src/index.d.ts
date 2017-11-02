export enum ShadowTypes {
    OVAL = 1,
    RECTANGLE = 0,
    RING = 3,
    SWEEP_GRADIENT = 2
}

export interface ShadowOptions {
    elevation?: number; // for android
    backgroundColor?: string; // for android, pass the color of view's background, default: white
    backgroundAlpha?: number; // value between 0 and 255, 0 for transparent
    translateZ?: number; // for android
    shadowType?: ShadowTypes; // for android
    opacity?: number;
    radius?: number; // android and iOS
    size?: { width: number; height: number };
}

export interface TextShadowOptions {
    // Android only
    radius: number;
    xOffset: number;
    yOffset: number;
    color: string;
}

export declare class Shadow {
    createBaseShadowOptions(): ShadowOptions;
    addShadow(view: any, shadowOptions: ShadowOptions): void;
    addShadowToText(view: any, textShadowOptions: TextShadowOptions): void;
}
