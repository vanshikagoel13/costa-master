import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import '../styles/TextBox.css';

const TextBox = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`text-box ${expanded ? 'expanded' : ''}`}>
      <div className="text-content">
        <p className="question PoppReg">{question}</p>
        <button className="expand-button PoppReg" onClick={toggleExpansion}>
          <BiChevronDown className="arrow-down" />
        </button>
      </div>
      {expanded && <div className="additional-content PoppReg">{answer}</div>}
    </div>
  );
};

export default TextBox;
