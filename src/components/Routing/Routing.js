import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { PATH_NAME } from "../../constants/pathNames";
import {
  Page1,
  Page2,
  Page3,
  Page5,
  FormRegistrashion,
  FormRegistrPersonal,
  FormOwnData,
  FormCreditCard,
  FormResults,
} from "../../pages";

const PrivateRoute = ({ isAvailablePage, children, navigateTo }) => {
  return isAvailablePage ? children : <Navigate to={navigateTo} />;
};

const Routing = () => {
  const isAvailablePages = useSelector(
    (store) => store.isAvailablePages
  );

  return (
    <Routes>
      <Route path={PATH_NAME.point1} element={<Page1 />} />
      <Route path={PATH_NAME.point2} element={<Page2 />} />
      <Route path={PATH_NAME.point3} element={<Page3 />} />
      <Route path={PATH_NAME.registration} element={<FormRegistrashion />} />
      <Route
        path={PATH_NAME.registration_personal}
        element={
          <PrivateRoute
            isAvailablePage={isAvailablePages.personalPage}
            navigateTo={PATH_NAME.registration}>
            <FormRegistrPersonal />
          </PrivateRoute>
        }>
        <Route index element={<FormOwnData />} />

        <Route
          path={PATH_NAME.registration_personal_card}
          element={
            <PrivateRoute
              isAvailablePage={isAvailablePages.creditCardDataPage}
              navigateTo={PATH_NAME.registration_personal}>
              <FormCreditCard />
            </PrivateRoute>
          }
        />
        <Route
          path={PATH_NAME.registration_personal_result}
          element={<FormResults />}
        />
      </Route>
      <Route path={PATH_NAME.point5} element={<Page5 />} />
      <Route path="*" element={<Navigate to={PATH_NAME.point1} />} />
    </Routes>
  );
};

export default Routing;
