import dice from '../../assets/images/icon-dice.svg';

const PrimaryButton = ({ onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      <img src={dice} alt="" />
    </button>
  );
};

export default PrimaryButton;
