/* eslint-disable */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
 

const withAuth = (Component:any) => {
  // const [ usersData, setUsersData]= useState<any>(null)
  const Auth = (props: { [x: string]: any; children: any; }):any => {
    const router = useRouter();

    useEffect(() => {
        const userData = window.localStorage.getItem('userData');  
        // setUsersData(userData) 
        if (!userData) {
          router.push('/');  
      }
      
    }, []);
    // if (typeof window !== 'undefined') {
        const { children, ...rest } = props;
        return (<Component {...rest} />) 
      
    // }

    

    return null;
  };

  return Auth;
};

export default withAuth;
