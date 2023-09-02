/* eslint-disable @typescript-eslint/no-explicit-any */
import * as components from '@ant-design/icons'
import React, { useMemo } from 'react'
import ASelect from 'antd/es/select'
import icons from '@/icons'
import './index.less'

export interface TypeProps {
  value: string;
  style?: React.CSSProperties,
  className?: string;
  placeholder?: string;
  showSearch?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const SIconSelect: React.FC<TypeProps> = props => {
  const value = props.value
  const style = props.style
  const onChange = props.onChange
  const className = props.className
  const placeholder = props.placeholder || ''
  const showSearch = props.showSearch !== false
  const allowClear = props.allowClear !== false
  const disabled = props.disabled === true

  const groups = useMemo(() => icons.map(group => {
    return {
      key: group.key,
      title: group.title,
      children: group.icons.map(icon => ({
        key: icon,
        label: icon,
        value: icon
      }))
    }
  }), [])

  return (
    <>
      <ASelect
        value={value}
        style={{ width: '100%', ...style }}
        virtual={false}
        className={className}
        placeholder={placeholder}
        showSearch={showSearch}
        allowClear={allowClear}
        disabled={disabled}
        onChange={onChange}
        optionFilterProp='label'
        popupClassName='s-icon-dropdown-wrapper'
      >
        {
          groups.map(group => {
            return (
              <ASelect.OptGroup
                key={group.key}
                label={<span style={{ fontSize: '14px' }}>{ group.title }</span>}
              >
                {
                  group.children.map(opt => {
                    const type = opt.value.replace(/(^|-)(\w)/g, (t1, t2, t3) => t3 && t3.toUpperCase())
                    const AIcon = (components as any)[`${type}Outlined`]

                    return (
                      <ASelect.Option
                        key={opt.key}
                        value={opt.value}
                        title={opt.label}
                        label={opt.label}
                      >
                        <AIcon style={{ fontSize: '18px', verticalAlign: 'middle' }}/>
                        <span className='s-icon-dropdown-hidden'>{ opt.label }</span>
                      </ASelect.Option>
                    )
                  })
                }
              </ASelect.OptGroup>
            )
          })
        }
      </ASelect>
    </>
  )
}

export default SIconSelect
