import { SnackBarProvider, theme } from "@kushki/connect-ui";
import React from "react";

import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import MainContainer from "./containers/MainContainer/MainContainer";
import { Routes } from "./shared/constants/routes";

import { store } from "./store/store";
import { JwtComponent } from "./shared/useJWTUtils";
import { ModuleSecurityWrapper } from "@kushki/security-wrapper";
import { environment } from "./environments/environment";
import { M_CLIENTS } from "./shared/constants/labels/main_containter_labels";

const Root = () => {
  return (
    <React.StrictMode>
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap');"
        }
      </style>
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');"
        }
      </style>
      <Provider store={store}>
        <JwtComponent />
        <ThemeProvider theme={theme}>
          <SnackBarProvider>
            <BrowserRouter basename={"/billing"}>
              <ModuleSecurityWrapper
                basePath={environment.kushkiUrl}
                componentId={M_CLIENTS}
              >
                <RoutesDom>
                  <Route path={Routes.INDEX} element={<MainContainer />} />
                  <Route path={"*"} element={<MainContainer />} />
                </RoutesDom>
              </ModuleSecurityWrapper>
            </BrowserRouter>
          </SnackBarProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default Root;
