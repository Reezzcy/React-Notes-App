import React from 'react';
import { showFormattedDate } from '../utils';

function NotesItem({id, title, body, createdAt, archived,onDelete, onArchives}){
    return(
        <div className='note-item'>
            <div className='note-item_content'>
                <h3 className='note-item_title'>{title}</h3>
                <p className='note-item_date'>{showFormattedDate(createdAt)}</p>
                <p className='note-item_body'>{body}</p>
            </div>
            <div className='note-item_action'>
                <button className='note-item_delete-button' onClick={() => onDelete(id)}>Hapus</button>
                <button className='note-item_archive-button' onClick={() => onArchives(id)}>
                    {archived === true? "Pindahkan" : "Arsipkan"}
                </button>
            </div>
        </div>
    );
}

export default NotesItem;