import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note ${i}`}));
    
    return (
        <div>
            <h1>Old notes index path</h1>
            <Link href='/notes_old/id' as={`/notes_old/1`}>
                First note
            </Link>
            {
                notes.map(note => (
                    <div>
                        <Link href='/notes_old/id' as={`/notes_old/${note.id}`} key={note.id}>
                            <a>
                                {note.title}
                            </a>
                        </Link>
                        <button onClick={e => router.push('/notes_old/id', `/notes_old/${note.id}`)}>
                            Visit
                        </button>
                    </div>
                ))
            }
        </div>
        
    )
}

export default Page;