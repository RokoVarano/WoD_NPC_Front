import React, { Fragment } from 'react';
import { GetStaticProps } from 'next'
import LoginForm from '../components/login/LoginForm';

const login = () => {
  return (
    <Fragment>
        <h1>WOD_NPC_GENERATOR</h1>

        <LoginForm/>
    </Fragment>);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// export const getStaticProps: GetStaticProps = async (ctx) => {
//     const { data } = await  // your fetch function here 

//     return {
//         props: {
            
//         }
//     }
// }

export default login;
