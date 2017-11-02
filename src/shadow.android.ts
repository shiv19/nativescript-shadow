import { ShadowOptions, TextShadowOptions, ShadowType } from "./index";


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
            : ShadowType.RECTANGLE;

        if (localShadowOpts.shadowType === ShadowType.OVAL) {
            shapeType = android.graphics.drawable.GradientDrawable.OVAL;
        } else if (localShadowOpts.shadowType === ShadowType.RECTANGLE) {
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
