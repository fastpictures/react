# @fp/react

A lightweight React component for generating image placeholders from fast.pictures.

## Installation

```bash
npm install @fp/react
```

## Usage

```jsx
import React from "react";
import ImagePlaceholder from "@fp/react";

function App() {
    return (
        <div>
            {/* Basic usage */}
            <ImagePlaceholder />

            {/* Custom dimensions */}
            <ImagePlaceholder width={400} height={300} />

            {/* Custom styling */}
            <ImagePlaceholder width={200} height={150} backgroundColor="#e0e0e0" textColor="#333" text="Custom Text" fontSize={18} />

            {/* With custom CSS class */}
            <ImagePlaceholder width={300} height={200} className="my-placeholder" style={{ border: "2px solid #ccc" }} />
        </div>
    );
}

export default App;
```

## Props

| Prop              | Type   | Default             | Description                         |
| ----------------- | ------ | ------------------- | ----------------------------------- |
| `width`           | number | 300                 | Width of the placeholder in pixels  |
| `height`          | number | 200                 | Height of the placeholder in pixels |
| `backgroundColor` | string | '#f0f0f0'           | Background color of the placeholder |
| `textColor`       | string | '#666'              | Color of the text                   |
| `text`            | string | '{width}×{height}'  | Text to display on the placeholder  |
| `fontSize`        | number | 16                  | Font size of the text               |
| `className`       | string | ''                  | CSS class name                      |
| `style`           | object | {}                  | Inline styles                       |
| `alt`             | string | 'Image placeholder' | Alt text for accessibility          |

## Features

-   🎨 Customizable dimensions, colors, and text
-   📦 Zero dependencies (except React peer dependency)
-   🏃‍♂️ Lightweight and fast
-   ♿ Accessible with proper alt text
-   📱 Responsive design ready
-   🎯 TypeScript support (types included)

## Examples

### Loading State Placeholder

```jsx
<ImagePlaceholder width={300} height={200} text="Loading..." backgroundColor="#f8f8f8" textColor="#999" />
```

### Profile Picture Placeholder

```jsx
<ImagePlaceholder width={100} height={100} text="👤" fontSize={40} style={{ borderRadius: "50%" }} />
```

### Card Image Placeholder

```jsx
<ImagePlaceholder width={350} height={200} text="No Image" backgroundColor="#e9ecef" textColor="#6c757d" className="card-img-top" />
```

## License

LGPL-3.0-or-later

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
