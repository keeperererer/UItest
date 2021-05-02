import { append, filter, indexOf, map, remove } from 'ramda'
import React, { useRef, useState, SelectHTMLAttributes, FC } from 'react'
import { Icon } from '../Icon/icon'
import { Input, InputProps } from '../Input/input'
import classNames from 'classnames'
import useClickOutside from '../../hooks/useClickOutSide'

export interface BaseSelectProps {
  /**
   * 选项
   */
  options: string[]
  /**
   * 默认选中的选项
   */
  defaultSelectedOptions?: string[]
  /**
   * the value was changed
   */
  onChange: (opts: string[]) => void
}

export const Select: FC<BaseSelectProps> = (props) => {
  const { options, defaultSelectedOptions, onChange } = props
  const [showList, setShowList] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[] | undefined>(
    defaultSelectedOptions
  )
  const selectOptionList = map((opt: string) => {
    if (selectedOptions && selectedOptions.includes(opt)) {
      return {
        name: opt,
        selected: true,
      }
    } else {
      return {
        name: opt,
        selected: false,
      }
    }
  })(options)
  const handleItemClick = (option: { name: any; selected?: boolean }) => {
    console.log(option)
    setSelectedOptions((preSelectedOptions) => {
      if (!preSelectedOptions?.includes(option.name)) {
        if (preSelectedOptions) {
          const values = append(option.name)(preSelectedOptions)
          onChange(values)
          return values
        } else {
          let values = [option.name]
          return values
        }
      } else {
        const index = indexOf(option.name)(preSelectedOptions)
        const values = remove(index, 1)(preSelectedOptions) as string[]
        onChange(values)
        return values
      }
    })
  }
  const componentRef = useRef(null)
  useClickOutside(componentRef, () => {
    setShowList(false)
  })
  const handleOptionClick = (optionName: string) => {
    setSelectedOptions((preSelectedOptions) => {
      if (preSelectedOptions && preSelectedOptions.includes(optionName)) {
        const index = indexOf(optionName)(preSelectedOptions)
        const values = remove(index, 1)(preSelectedOptions) as string[]
        onChange(values)
        return values
      } else {
        return preSelectedOptions
      }
    })
  }
  return (
    <div className="viking-select-wrapper" ref={componentRef}>
      <Input
        icon={showList ? 'angle-up' : 'angle-down'}
        onFocus={() => setShowList(true)}
      >
        <div className="input-selected-options">
          {selectedOptions &&
            selectedOptions.map((option, index) => {
              return (
                <span
                  className="input-selected-option"
                  key={index}
                  onClick={() => handleOptionClick && handleOptionClick(option)}
                >
                  {option}
                  <Icon icon="times" />
                </span>
              )
            })}
        </div>
      </Input>
      {showList && (
        <ul className="select-options">
          {selectOptionList.map((option, index) => {
            const classes = classNames('select-option-item', {
              selected: option.selected,
            })
            return (
              <li
                key={index}
                className={classes}
                onClick={() => handleItemClick(option)}
              >
                {option.name}
                {option.selected && <Icon icon="check" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
export default Select
