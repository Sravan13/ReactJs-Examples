import React from 'react';

const hocWrapComponent = (WrappedComponent,classname) => {

    return props => (
        <div className={classname}>
            <WrappedComponent {...props}/>
        </div>
    )

    
};

export default hocWrapComponent;