import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg';
import dividerMobile from '../../assets/images/pattern-divider-mobile.svg';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Card = () => {
  const [advice, setAdvice] = useState({});

  const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();
    setAdvice(slip);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };
  return (
    <div className="card">
      <div className="card-header">
        {advice && <h1>Advice #{advice.id}</h1>}
      </div>
      <div className="card-body">{advice && <h2>{advice.advice}</h2>}</div>
      <div className="card-divider">
        {isMobile ? (
          <img src={dividerMobile} alt="" />
        ) : (
          <img src={dividerDesktop} alt="" />
        )}
      </div>
      <div className="card-button">
        <PrimaryButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default Card;
