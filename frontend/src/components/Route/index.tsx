import React from 'react';
import { useAuth } from "../../hooks/Auth";
import { RouteProps, Route, Redirect } from 'react-router-dom';

interface IRouteProps extends RouteProps {
  privateRoute?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<IRouteProps> = ({ privateRoute = false, component: Component,...rest }) => {
  const { ong } = useAuth();
  return (
    <Route 
      {...rest} 
      render={() => {
        return privateRoute === !!ong ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: privateRoute ? '/' : '/profile'}}/>
        )
      }}
    />
  );
};

export { CustomRoute }