/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note ${i}`}));
    
    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>My Notes</h1>
            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                { notes.map(note => (
                    <div sx={{ width: '33%', p: 2 }}>
                        <Link key={note.id} href='/notes/id' as={`/notes/${note.id}`}>
                            <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                                <div sx={{variant: 'containers.card',}}>
                                    <strong>{note.title}</strong>
                                </div>
                            </a>
                        </Link>
                    </div>
                )) }
            </div>


            {/* <Link href='/notes/id' as={`/notes/1`}>
                First note
            </Link>
            {
                notes.map(note => (
                    <div>
                        <Link href='/notes/id' as={`/notes/${note.id}`} key={note.id}>
                            <a>
                                {note.title}
                            </a>
                        </Link>
                        <button onClick={e => router.push('/notes/id', `/notes/${note.id}`)}>
                            Visit
                        </button>
                    </div>
                ))
            } */}
        </div>
        
    )
}

export default Page;