import React from "react";

/**
 * ImagePlaceholder Component
 * Generates a small image placeholder with customizable dimensions, background color, and text
 */
const ImagePlaceholder = ({
    width = 300,
    height = 200,
    backgroundColor = "#f0f0f0",
    textColor = "#666",
    text = `${width}×${height}`,
    fontSize = 16,
    className = "",
    style = {},
    alt = "Image placeholder",
    ...props
}) => {
    // Create SVG data URL for the placeholder
    const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            fill="${textColor}" font-family="Arial, sans-serif" font-size="${fontSize}">
        ${text}
      </text>
    </svg>
  `;

    const dataUrl = `data:image/svg+xml;base64,${btoa(svgContent)}`;

    return React.createElement("img", {
        src: dataUrl,
        alt,
        width,
        height,
        className,
        style: {
            display: "block",
            ...style,
        },
        ...props,
    });
};

export default ImagePlaceholder;
export { ImagePlaceholder };
