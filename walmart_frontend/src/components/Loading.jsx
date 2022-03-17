import React from 'react';

const Loading = (props) => {
    let loading = props.loading;
    //Add or remove class depends of the prop in Loading component
    if(loading){
        document.body.classList.add('loading-body');
    }else{
        document.body.classList.remove('loading-body');

    }
    return ( 
        <div>
        {
            loading ? <div className='loader'>
            <div className='lds-ring'>
                <div></div>
            </div>
            </div> : null
        }
        </div>
    );
}
 
export default Loading;