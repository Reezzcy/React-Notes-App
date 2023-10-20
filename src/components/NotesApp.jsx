import React from 'react';
import { getInitialData } from '../utils/index';
import NavBar from './NavBar';
import NotesAdd from './NotesAdd';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            search: "",
        };

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchivesEventHandler = this.onArchivesEventHandler.bind(this);
    }

    onSearchEventHandler(input){
        this.setState(() => {
            return {
                search: input.target.value
            }
        });
    }

    onAddNotesEventHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date(),
                    }
                ]
            }
        });
    }

    onDeleteEventHandler(id){
        const notes = this.state.notes.filter((note) => note.id != id);
        this.setState({notes});
    }

    onArchivesEventHandler(id){
        const notes = this.state.notes.map((note) => {
            return note.id === id ? {...note, archived: !note.archived} : note
        });
        this.setState({notes});
    }

    render(){
        return(
            <div className='notes-app'>
                <NavBar search={this.state.search} onSearch={this.onSearchEventHandler} />
                <NotesAdd  addNotes={this.onAddNotesEventHandler} />
                <div className='note-app_body'>
                    <h2>Catatan Aktif</h2>
                    <NotesList 
                        notes={this.state.notes.filter((note) =>
                            note.title.toLowerCase().includes(this.state.search.toLowerCase()) && note.archived === false
                            )} 
                        onDelete={this.onDeleteEventHandler} 
                        onArchives={this.onArchivesEventHandler} />
                    <h2>Catatan Diarsipkan</h2>
                    <NotesList
                        notes={this.state.notes.filter((note) =>
                            note.title.toLowerCase().includes(this.state.search.toLowerCase()) && note.archived === true
                            )} 
                        onDelete={this.onDeleteEventHandler} 
                        onArchives={this.onArchivesEventHandler} />
                </div>
            </div>
        );
    }
}

export default NotesApp;