import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "@/store";
import Router from "@/pages";

const container = document.getElementById("root")!;
const root = createRoot(container);
const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)