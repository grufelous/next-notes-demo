import React from "react";
import { useRouter } from "next/router";

const ParametricNotes = () => {
    const router = useRouter();
    const { params } = router.query;
    console.log(params);
    return (
        <h1>Parametric notes: { params }</h1>
    );
};

export default ParametricNotes;
