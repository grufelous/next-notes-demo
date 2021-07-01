import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../src/styles/styles.module.css';

const NotesID = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Note: { id }</h1>
            <Link href='/notes_old'>
                <a className={styles.custom}>
                    Back to notes
                </a>
            </Link>
        </div>
    )
};

export default NotesID;