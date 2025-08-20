import React from 'react';
import ImagePlaceholder from '@fp/react';

// Example 1: Basic usage
export const BasicExample = () => {
  return <ImagePlaceholder />;
};

// Example 2: Custom dimensions and styling
export const CustomExample = () => {
  return (
    <ImagePlaceholder 
      width={400} 
      height={300}
      backgroundColor="#e8f5e8"
      textColor="#2e7d32"
      text="Loading Image..."
      fontSize={18}
    />
  );
};

// Example 3: Profile picture placeholder
export const ProfileExample = () => {
  return (
    <ImagePlaceholder 
      width={80} 
      height={80}
      backgroundColor="#f5f5f5"
      textColor="#9e9e9e"
      text="👤"
      fontSize={30}
      style={{ 
        borderRadius: '50%',
        border: '2px solid #e0e0e0'
      }}
      alt="Profile picture placeholder"
    />
  );
};

// Example 4: Card image placeholder
export const CardExample = () => {
  return (
    <div style={{ 
      width: '300px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <ImagePlaceholder 
        width={300} 
        height={200}
        backgroundColor="#f8f9fa"
        textColor="#6c757d"
        text="No Image Available"
        style={{ width: '100%' }}
      />
      <div style={{ padding: '16px' }}>
        <h3>Card Title</h3>
        <p>This is an example card with an image placeholder.</p>
      </div>
    </div>
  );
};

// Example 5: Gallery placeholder
export const GalleryExample = () => {
  const placeholders = [
    { width: 250, height: 200, text: "Photo 1" },
    { width: 250, height: 200, text: "Photo 2" },
    { width: 250, height: 200, text: "Photo 3" },
    { width: 250, height: 200, text: "Photo 4" }
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      padding: '16px'
    }}>
      {placeholders.map((props, index) => (
        <ImagePlaceholder 
          key={index}
          {...props}
          backgroundColor="#e3f2fd"
          textColor="#1976d2"
          style={{ borderRadius: '4px' }}
        />
      ))}
    </div>
  );
};