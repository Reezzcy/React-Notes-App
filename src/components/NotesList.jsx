import React from 'react';
import NotesItem from './NotesItem';

function NotesList({notes, onDelete, onArchives}) {
    return (
        notes.length !== 0? (
            <div className='notes-list'>
                {   
                    notes.map((note) => (
                        <NotesItem 
                            key={note.id} 
                            id={note.id} 
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                            archived={note.archived}
                            onDelete={onDelete} 
                            onArchives={onArchives}
                        />       
                    ))
                }
            </div>
        ) : <div className='notes-list_empty-message'>Tidak Ada Catatan</div>
    );
}

export default NotesList;