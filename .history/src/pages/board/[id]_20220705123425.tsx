import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"

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



  return {
    props: {

    }
  }
} 