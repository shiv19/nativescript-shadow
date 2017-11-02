export interface ShadowOptions {
    elevation?: number;
    opacity?: number;
    radius?: number;
    size?: { width: number, height: number }
}

export declare class Shadow {
    createBaseShadowOptions(): ShadowOptions;
    addShadow(view: any, shadowOptions: ShadowOptions): void;
}
