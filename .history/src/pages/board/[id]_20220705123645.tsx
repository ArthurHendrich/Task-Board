import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { format } from 'date-fns'

import firebase from '../../services/firebaseConnections';

export default function Task() {
  return(
    <div>
      <h1>Página detalhes</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const {id} = params;

  const session = await getSession({req});

  if(!session?.id) {
    return {
      redirect: {
        destination: "/board",
        permanent: false,
      },
    };
  }

  const data = await firebase.firestore().collection('tarefas').doc(String(id)).get()
  .then((snapshot) => {
    const data = {
      id: snapshot.id,
      created: snapshot.data().created,
      createdFormated: format(snapshot.data().created.toDate(), 'dd MMMM yyyy'),

    }
  })


  return {
    props: {

    }
  }
} 