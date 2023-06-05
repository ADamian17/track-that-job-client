import React, { useEffect, useState } from 'react';

import ChevronDown from '../../../svgIcons/ChevronDown';
import ChevronUp from '../../../svgIcons/ChevronUp';
import IconCheck from '../../../svgIcons/IconCheck';

type SelectProps = {
  currentCategory: string | undefined;
  dropOptions: string[];
  setDefaultOption: React.Dispatch<any>;
  [key: string]: any;
};

const Select: React.FC<SelectProps> = ({
  currentCategory,
  dropOptions,
  setDefaultOption,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [currentOption, setCurrentOption] = useState(currentCategory);

  const handleCloseDropdown = () => {
    if (show) {
      setShow(!show);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseDropdown);
    return () => {
      document.removeEventListener('click', handleCloseDropdown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, currentOption]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    setCurrentOption(e.target.dataset.value);
    setDefaultOption(e.target.dataset.value);
  };

  return (
    <div className="select">
      <div className="select__input" onClick={() => setShow(!show)}>
        <p>{currentCategory}</p>
        {show ? <ChevronUp /> : <ChevronDown />}
      </div>

      <div className={`options options${show ? '--show' : '--hidde'}`}>
        {dropOptions.map((option) => (
          <div
            key={option}
            data-value={option}
            onClick={handleClick}
            className={`categories__item ${
              option === currentOption ? 'categories__item--current' : ''
            }`}
          >
            <span>{option}</span>
            {option === currentOption ? <IconCheck /> : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
