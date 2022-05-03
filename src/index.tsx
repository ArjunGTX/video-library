import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import {
  AuthProvider,
  CategoryProvider,
  FilterProvider,
  HistoryProvider,
  LikesProvider,
  VideoProvider,
  WatchLaterProvider,
} from "./context";
import { makeServer } from "./server";
import "./styles/index.scss";

makeServer();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <VideoProvider>
            <FilterProvider>
              <HistoryProvider>
                <LikesProvider>
                  <WatchLaterProvider>
                    <App />
                  </WatchLaterProvider>
                </LikesProvider>
              </HistoryProvider>
            </FilterProvider>
          </VideoProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
