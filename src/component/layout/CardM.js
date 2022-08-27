import React from "react";
import classnames from "classnames";
import { Card, CardActionArea } from "@material-ui/core/";


const CardM = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <Card className="card-face card-front-face">
        <CardActionArea className="sub-content" >
        </CardActionArea>
      </Card>
      <Card className="card-face card-back-face">
        <CardActionArea className="sub-content">
          <h1>{card}</h1>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardM
