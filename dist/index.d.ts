import React from 'react';
import './index.less';
export interface TypeProps {
    value: string;
    style?: React.CSSProperties;
    className?: string;
    placeholder?: string;
    showSearch?: boolean;
    allowClear?: boolean;
    disabled?: boolean;
    onChange: (value: string) => void;
}
export declare const SIconSelect: React.FC<TypeProps>;
export default SIconSelect;
