# Quick Start Guide for @fp/react

## Installation

```bash
npm install @fp/react
```

## Basic Usage

```jsx
import React from 'react';
import ImagePlaceholder from '@fp/react';

function MyComponent() {
  return (
    <div>
      {/* Simple placeholder */}
      <ImagePlaceholder />
      
      {/* Custom placeholder */}
      <ImagePlaceholder 
        width={400} 
        height={300}
        text="Loading..."
        backgroundColor="#f0f8ff"
        textColor="#4682b4"
      />
    </div>
  );
}
```

## Publishing

To publish this package to npm:

```bash
# Login to npm (first time only)
npm login

# Publish the package
npm publish --access public
```

## Development

```bash
# Test the package
npm test

# View what will be packaged
npm pack --dry-run

# Run demo (open test.html in browser)
npm run demo
```