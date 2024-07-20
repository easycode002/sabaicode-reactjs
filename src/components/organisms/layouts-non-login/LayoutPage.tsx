import { Outlet } from "react-router-dom";
import React from "react";

const LayoutPage:React.FC = ()=>{
    return (
        <div>
            {/* header */}
            <div>
                <h1>hello from layout</h1>
            </div>
            
            {/* boody */}
            <div>
            <Outlet/>
            </div>

            {/* footer */}
            <div>

            </div>
            
        </div>
    );
}

export default LayoutPage;