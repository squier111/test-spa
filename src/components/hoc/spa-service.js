import React from 'react';
import {SpaServiceConsumer} from '../spa-context';

const WithSpaService = () => (Wrapped) => {

  return (props) => {
      return (
        <SpaServiceConsumer>
          {
            (WithSpaService) => {
              return (
                <Wrapped {...props} WithSpaService ={WithSpaService} />
              )
            }
          }
        </SpaServiceConsumer>
      );
  }
};
  
export default WithSpaService;