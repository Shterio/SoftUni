import React from 'react';
import './app.css';
import './index.css'
import ContactList from './contacts.json'

const makeContact = contact => (
    <div className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>
);

const renderList = () => {
    const finalList = [];
    for (let contact of ContactList) {
        finalList.push(makeContact(contact))
    }
    return finalList;
};

function App() {
    return (
        <div className="container">
            <header>&#9993; Contact Book</header>
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">
                        {renderList()}
                        <div className="contact" data-id="id">
                            <span className="avatar small">&#9787;</span>
                            <span className="title">Jordan Kirov</span>
                        </div>

                        <div className="contact" data-id="id">
                            <span className="avatar small">&#9787;</span>
                            <span className="title">Maria Petrova</span>
                        </div>
                    </div>
                </div>
                <div id="details">
                    <h1>Details</h1>
                    <div className="content">
                        <div className="info">
                            <div className="col">
                                <span className="avatar">&#9787;</span>
                            </div>
                            <div className="col">
                                <span className="name">Ivan</span>
                                <span className="name">Ivanov</span>
                            </div>
                        </div>
                        <div className="info">
                            <span className="info-line">&phone; 0887 123 456</span>
                            <span className="info-line">&#9993; i.ivanov@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>Contact Book SPA &copy; 2017</footer>
        </div>
    );
}

export default App;
