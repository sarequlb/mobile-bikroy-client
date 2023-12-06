import React, { useEffect, useState } from 'react';

const useVerify = (email) => {
    const [isVerify, setIisVerify] = useState(false)
    const [isVerifyLoading, setIsVerifyLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/allUsers/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIisVerify(data.isVerify)
                    console.log(data.isVerify)
                    setIsVerifyLoading(false)
                })
        }
    }, [email])

    return [isVerify,isVerifyLoading]
};

export default useVerify;