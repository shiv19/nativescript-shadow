export class Shadow {
    addShadow(nsView, elevation: number) {
        const nativeView = nsView.android;
        const parent = nsView.parent.android;
        console.log("came here");
        // nativeView.setClipToOutline(false);

        // parent.setClipToOutline(false);
        // nativeView.setElevation(10.0);

        var shape = new android.graphics.drawable.GradientDrawable();
        shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
        shape.setColor(android.graphics.Color.parseColor("#ffffff"));
        nativeView.setBackgroundDrawable(shape);
        nativeView.setElevation(elevation);
    }
}
