import { InfoIcon, XCircleIcon } from "../../assets/svg/icons";

import "./ErrorMessage.css";

type ErrorMessageType = {
  pressClose?: React.MouseEventHandler<SVGSVGElement>;
  title: String;
  description?: String;
};

const ErrorMessage = ({ pressClose, title, description }: ErrorMessageType) => {
  return (
    <div className="localFadeIn message-container">
      <div className="message-icon">
        <InfoIcon className="icon" width={32} height={32} color="white" />
      </div>
      <div className="message">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="close-container">
        <XCircleIcon
          className="cursor-pointer"
          width={24}
          height={24}
          onClick={pressClose}
        />
      </div>
    </div>
  );
};

export default ErrorMessage;
