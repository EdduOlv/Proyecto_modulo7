import React, { useContext } from 'react'
import UserContext from '../../contexts/users/UserContext';

export const Profile = () => {
    const ctx = useContext(UserContext);


  const { user } = ctx;
  

  
  
    return (
        <>
            <main>

                <aside>
                    <div>
                        Aquí va tu perfil
                    </div>
                    <div>
                        <h1>
                
                        </h1>
                    </div>
                </aside>
            </main>
        </>
    )
}