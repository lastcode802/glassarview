import React from 'react';
import './index.css';
interface Props {
    backgroundColor?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children?: React.ReactNode;
}

const ControlButton: React.FC<Props>  = (props) => {
    const { onClick, className, children, backgroundColor, color } = props;
  return (
    <button
        onClick={onClick}
        className={`JeelizVTOWidgetButton ${className}`}
        style={{
            backgroundColor,
            color
        }}
    >
        {children}
    </button>
  )
}

export default ControlButton;