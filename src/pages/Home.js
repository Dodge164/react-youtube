import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const handlerDeleteNote = (id) => {
    removeNote(id)
      .then(() => {
        alert.show('The note was deleted', 'secondary');
      })
      .catch(() => {
        alert.show('Something got wrong ', 'danger');
      });
  };

  return (
    <Fragment>
      <Form />
      <hr />

      {loading ? (
        <Loader />
      ) : (
        <Notes notes={notes} onRemove={handlerDeleteNote} />
      )}
    </Fragment>
  );
};
