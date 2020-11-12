import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Home } from "react-feather";

const Crumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/app/").filter((x) => x);
  return (
    <div>
      <section id="breadcrumb-rounded">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb rounded-pill breadcrumb-divider">
                {pathnames.length > 0 ? (
                  <li
                    className="breadcrumb-item"
                    onClick={() => history.push("/app/home")}
                  >
                    <Home size={20} />
                  </li>
                ) : (
                  <li className="breadcrumb-item">Home</li>
                )}

                {pathnames.map((name, index) => {
                  const routeTo = `${pathnames.slice(0, index + 1).join("/app/")}`;
                  const isLast = index === pathnames.length - 1;
                  return isLast ? (
                  <li className="breadcrumb-item" key={name}>{name}</li>
                  ): (
                  <li
                    className="breadcrumb-item"
                    key={name}
                    onClick={() => history.push(routeTo)}
                  >
                    {name}
                  </li>
                  )
                })}
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Crumbs);
