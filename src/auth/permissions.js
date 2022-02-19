import React, { createContext, useContext, useState } from 'react';

// Fallback
import Fallback from '../routes/fallback-routes/Restricted'

// Default behaviour for the Permission Provider Context
// i.e. if for whatever reason the consumer is used outside of a provider
// The permission will not be granted if no provider says otherwise
const defaultBehaviour = {
    isAllowedTo: () => Promise.resolve(false)
}

// Create the context
const PermissionContext = createContext(defaultBehaviour);

// This provider is intended to be surrounding the whole application.
// It should receive the users permissions as parameter
const PermissionProvider = ({fetchPermission, children}) => {

    const cache = {};

    // Creates a method that returns whether the requested permission is available in the list of permissions
    // passed as parameter
    const isAllowedTo = async (permission) => {
        if(Object.keys(cache).includes(permission)){
            return cache[permission];
        }
        const isAllowed = await fetchPermission(permission);
        cache[permission] = isAllowed;
        return isAllowed;
    };

    // This component will render its children wrapped around a PermissionContext's provider whose
    // value is set to the method defined above
    return (
        <PermissionContext.Provider value={{isAllowedTo}}>
            {children}
        </PermissionContext.Provider>
    );
};


// This component is meant to be used everywhere a restriction based on user permission is needed
const Restricted = ({to, fallback, loadingComponent, children}) => {

    // We "connect" to the provider thanks to the PermissionContext
    const [loading, allowed] = usePermission(to);

    if(loading){
        return <>{loadingComponent}</>;
    }

    // If the user has that permission, render the children
    if(allowed){
        return <>{children}</>;
    }

    // Otherwise, render the fallback
    return <>{ fallback || <Fallback /> }</>;
};

const usePermission = (permission) => {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState();

    const {isAllowedTo} = useContext(PermissionContext);

    isAllowedTo(permission).then((allowed) => {
        setLoading(false);
        setAllowed(allowed);
    })
    return [loading, allowed]
}

export { PermissionContext, PermissionProvider, Restricted, usePermission }