import React from 'react';

class NotesAdd extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
            length: 0,
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
                length: event.target.value.length,
            }
        });

        if (this.state.length >= 50){
            alert("Jumlah Judul Maksimal 50")
            this.setState(() => {
                return {
                    title: "",
                    length: 0,
                }
            });
        }
    }

    onBodyEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
        this.setState(() => {
            return {
                title:"",
                body:"",
                length:0
            }
        });
    }

    render(){
        return (
            <div className='note-input'>
                <h2>Tambahkan Catatan</h2>
                <p className='note-input_title_char-limit'>Maksimal Judul: {this.state.length}/50</p>
                <input type="text" placeholder='Judul' value={this.state.title} onChange={this.onTitleEventHandler} />
                <textarea cols="30" rows="10" placeholder='Catatan....' value={this.state.body} onChange={this.onBodyEventHandler}></textarea>
                <button onClick={this.onSubmitEventHandler}>Tambahkan</button>
            </div>
        );
    }
}

export default NotesAdd;