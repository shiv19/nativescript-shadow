export enum ShadowTypes {
    OVAL = 1,
    RECTANGLE = 0
}

export interface ShadowOptions {
    elevation?: number; // android and iOS
    backgroundColor?: string; // for android, pass the color of view's background, default: white
    backgroundAlpha?: number; // for android, value between 0 and 255, 0 for transparent
    translateZ?: number; // for android
    shadowType?: ShadowTypes; // for android
    opacity?: number; // for iOS
    radius?: number; // android and iOS
    size?: { width: number; height: number }; // for iOS
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
            elevation: 10,
            backgroundColor: "#ffffff"
        };
    }

    public addShadow(nsView, shadowOptions: ShadowOptions): void {
        const localShadowOpts =
            shadowOptions.elevation && shadowOptions.backgroundColor
                ? shadowOptions
                : this.createBaseShadowOptions();

        const nativeView = nsView.android;
        const shape = new android.graphics.drawable.GradientDrawable();
        let shapeType;

        localShadowOpts.shadowType = localShadowOpts.shadowType
            ? localShadowOpts.shadowType
            : ShadowTypes.RECTANGLE;

        if (localShadowOpts.shadowType === ShadowTypes.OVAL) {
            shapeType = android.graphics.drawable.GradientDrawable.OVAL;
        } else if (localShadowOpts.shadowType === ShadowTypes.RECTANGLE) {
            shapeType = android.graphics.drawable.GradientDrawable.RECTANGLE;
        }

        shape.setShape(shapeType);
        shape.setColor(
            android.graphics.Color.parseColor(localShadowOpts.backgroundColor)
        );

        if (localShadowOpts.radius) {
            shape.setCornerRadius(localShadowOpts.radius);
        }

        if (localShadowOpts.backgroundAlpha) {
            shape.setAlpha(localShadowOpts.backgroundAlpha);
        }

        nativeView.setBackgroundDrawable(shape);
        nativeView.setElevation(localShadowOpts.elevation);

        if (localShadowOpts.translateZ) {
            nativeView.setTranslationZ(localShadowOpts.translateZ);
        }
    }

    public addShadowToText(nsView, textShadowOptions: TextShadowOptions) {
        const nativeView = nsView.android;
        nativeView.setShadowLayer(
            textShadowOptions.radius, // radius
            textShadowOptions.xOffset, // dx
            textShadowOptions.yOffset, // dy
            android.graphics.Color.parseColor(textShadowOptions.color)
        );
    }
}
