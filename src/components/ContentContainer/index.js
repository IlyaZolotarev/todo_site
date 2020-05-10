import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentContainer = ({ minHeight, maxWidth, children, display, justifyContent, alignItems, padding }) => {
  // Render

  const styles={
    minHeight: minHeight,
    maxWidth: (!maxWidth ? '2000px' : maxWidth),
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    padding: padding,
  }

  return (
    <div className="content-container">
      <div
        className="content-container__inner-wrapper"
        style={styles} 
      >
        {children}
      </div>
    </div>
  );
};

// ----------------

// Type of props

ContentContainer.propTypes = {
  children: types.node.isRequired,
  maxWidth: types.string,
};

// Default value for props
