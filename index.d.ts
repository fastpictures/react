import React from "react";

interface ImagePlaceholderProps {
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
    text?: string;
    fontSize?: number;
    className?: string;
    style?: React.CSSProperties;
    alt?: string;
    [key: string]: any;
}

declare const ImagePlaceholder: React.FC<ImagePlaceholderProps>;

export default ImagePlaceholder;
export { ImagePlaceholder, ImagePlaceholderProps };
