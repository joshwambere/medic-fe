import React, { Fragment } from "react";
import Menus from "../../menus";
import { changeRoute } from "@/shared/utils/helpers/routesHandler";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar_menus">
        <Menus changeRoute={changeRoute} />
      </div>
    </Fragment>
  );
};

export default Sidebar;