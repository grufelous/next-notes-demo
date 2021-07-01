/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../src/styles/styles.module.css';

const NotesID = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>Note: {id}</h1>
        </div>
    )
};

export default NotesID;