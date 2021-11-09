import React from "react";
import { withRouter, Link } from "react-router-dom";

const CategoryBtn = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <Link
      to={{
        pathname: `/category/${rest.ctg}`,
        state: {
          name: rest.name,
        },
      }}
    >
      <img src={rest.img} alt="" height="70rem" {...rest} onClick={onClick} />
      <div className="nameoflist">
        <p>{rest.name}</p>
      </div>
    </Link>
  );
};
export default withRouter(CategoryBtn);
