import React, { useState, useEffect } from 'react';
import { getCurrentBreakpoint, isMobile, isTablet, isDesktop, isTouchDevice } from '../utils/responsive';

const ResponsiveTest = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    breakpoint: '',
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    orientation: ''
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo({
        breakpoint: getCurrentBreakpoint(),
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
        isTouchDevice: isTouchDevice(),
        orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  const testStyles = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontFamily: 'monospace',
    zIndex: 9999,
    minWidth: '200px'
  };

  return (
    <div style={testStyles}>
      <h4 style={{ marginBottom: '8px', color: '#c41e3a' }}>Responsive Debug</h4>
      <div>Breakpoint: <strong>{deviceInfo.breakpoint}</strong></div>
      <div>Size: <strong>{deviceInfo.width} × {deviceInfo.height}</strong></div>
      <div>Device: <strong>
        {deviceInfo.isMobile && 'Mobile'}
        {deviceInfo.isTablet && 'Tablet'}
        {deviceInfo.isDesktop && 'Desktop'}
      </strong></div>
      <div>Touch: <strong>{deviceInfo.isTouchDevice ? 'Yes' : 'No'}</strong></div>
      <div>Orientation: <strong>{deviceInfo.orientation}</strong></div>
      
      <div style={{ marginTop: '8px', fontSize: '10px', opacity: 0.7 }}>
        <div>xs: &lt;360px</div>
        <div>sm: 360-575px</div>
        <div>md: 576-767px</div>
        <div>lg: 768-991px</div>
        <div>xl: 992-1199px</div>
        <div>xxl: ≥1200px</div>
      </div>
    </div>
  );
};

export default ResponsiveTest;