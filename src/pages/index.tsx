import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "@/pages/main";
import Error from "@/pages/error";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" replace/>}/>
        </Routes>
    );
};

export default Router;