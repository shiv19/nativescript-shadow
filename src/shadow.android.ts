import { ShadowOptions } from "./index";

export class Shadow {
    public createBaseShadowOptions(): ShadowOptions {
        return {
            elevation: 10,
            backgroundColor: "#ffffff"
        };
    }

    public addShadow(nsView, shadowOptions: ShadowOptions): void {
        const localShadowOpts = shadowOptions.elevation
            ? shadowOptions
            : this.createBaseShadowOptions();

        const nativeView = nsView.android;
        var shape = new android.graphics.drawable.GradientDrawable();
        shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
        shape.setColor(
            android.graphics.Color.parseColor(localShadowOpts.backgroundColor)
        );
        nativeView.setBackgroundDrawable(shape);
        nativeView.setElevation(localShadowOpts.elevation);
    }
}
