export interface ShadowOptions {
    elevation?: number; // for android
    backgroundColor?: string; // for android, pass the color of view's background, default: white
    opacity?: number;
    radius?: number;
    size?: { width: number; height: number };
}

export declare class Shadow {
    createBaseShadowOptions(): ShadowOptions;
    addShadow(view: any, shadowOptions: ShadowOptions): void;
}
