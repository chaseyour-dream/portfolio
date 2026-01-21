// Responsive utility functions

// Debounce function for resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Get current breakpoint
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width < 360) return 'xs';
  if (width < 576) return 'sm';
  if (width < 768) return 'md';
  if (width < 992) return 'lg';
  if (width < 1200) return 'xl';
  return 'xxl';
};

// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Check if device is tablet
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

// Check if device is desktop
export const isDesktop = () => {
  return window.innerWidth > 1024;
};

// Check if device supports touch
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Get safe area insets for devices with notches
export const getSafeAreaInsets = () => {
  const style = getComputedStyle(document.documentElement);
  return {
    top: style.getPropertyValue('--sat') || style.getPropertyValue('env(safe-area-inset-top)') || '0px',
    right: style.getPropertyValue('--sar') || style.getPropertyValue('env(safe-area-inset-right)') || '0px',
    bottom: style.getPropertyValue('--sab') || style.getPropertyValue('env(safe-area-inset-bottom)') || '0px',
    left: style.getPropertyValue('--sal') || style.getPropertyValue('env(safe-area-inset-left)') || '0px'
  };
};

// Responsive image loading
export const getResponsiveImageSrc = (baseSrc, breakpoint) => {
  const breakpointSizes = {
    xs: '320w',
    sm: '480w',
    md: '768w',
    lg: '1024w',
    xl: '1200w',
    xxl: '1920w'
  };
  
  const size = breakpointSizes[breakpoint] || '1200w';
  return `${baseSrc}?w=${size}&q=80&f=webp`;
};

// Smooth scroll to element with offset for fixed navbar
export const smoothScrollTo = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Viewport height fix for mobile browsers
export const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initialize viewport height and update on resize
export const initResponsiveUtils = () => {
  setViewportHeight();
  
  const debouncedResize = debounce(() => {
    setViewportHeight();
  }, 100);
  
  window.addEventListener('resize', debouncedResize);
  window.addEventListener('orientationchange', debouncedResize);
  
  return () => {
    window.removeEventListener('resize', debouncedResize);
    window.removeEventListener('orientationchange', debouncedResize);
  };
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Performance optimization for animations on mobile
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimal animation duration based on device performance
export const getAnimationDuration = (baseDuration = 0.3) => {
  if (shouldReduceMotion()) return 0.01;
  if (isMobile()) return baseDuration * 0.8; // Slightly faster on mobile
  return baseDuration;
};

// Responsive grid calculations
export const calculateGridColumns = (containerWidth, minItemWidth = 300, gap = 20) => {
  const availableWidth = containerWidth - gap;
  const columns = Math.floor(availableWidth / (minItemWidth + gap));
  return Math.max(1, columns);
};

// Handle focus management for accessibility
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('closeFocus'));
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Responsive font size calculation
export const getResponsiveFontSize = (baseSize, scaleFactor = 0.8) => {
  const breakpoint = getCurrentBreakpoint();
  const scaleMap = {
    xs: scaleFactor * 0.7,
    sm: scaleFactor * 0.8,
    md: scaleFactor * 0.9,
    lg: scaleFactor,
    xl: scaleFactor * 1.1,
    xxl: scaleFactor * 1.2
  };
  
  return baseSize * (scaleMap[breakpoint] || 1);
};

// Check if element is in viewport
export const isInViewport = (element, threshold = 0) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  );
};

// Responsive spacing calculator
export const getResponsiveSpacing = (baseSpacing) => {
  const breakpoint = getCurrentBreakpoint();
  const spacingMap = {
    xs: baseSpacing * 0.5,
    sm: baseSpacing * 0.6,
    md: baseSpacing * 0.8,
    lg: baseSpacing,
    xl: baseSpacing * 1.2,
    xxl: baseSpacing * 1.4
  };
  
  return spacingMap[breakpoint] || baseSpacing;
};