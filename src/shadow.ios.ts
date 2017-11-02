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

export class Shadow {
    public createBaseShadowOptions(): ShadowOptions {
        return {
            size: { height: 5, width: 5 },
            opacity: 1.0,
            radius: 2.0
        };
    }

    public addShadow(nsView, shadowOptions: ShadowOptions) {
        const localShadowOpts = shadowOptions.elevation
            ? shadowOptions
            : this.createBaseShadowOptions();

        const nativeView = nsView.ios;

        nativeView.layer.shadowColor = UIColor.blackColor.CGColor;
        nativeView.layer.shadowOffset = CGSizeMake(
            localShadowOpts.size.width,
            localShadowOpts.size.height
        );
        nativeView.layer.shadowOpacity = localShadowOpts.opacity;
        nativeView.layer.shadowRadius = localShadowOpts.radius;
    }

    public addShadowToText(nsView, textShadowOptions: TextShadowOptions) {}
}
