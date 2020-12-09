
import Input from '../componens/Input/Input'
import Start from '../componens/Start/Start'

import styles from '../styles/Home.module.css'


export default function Home(data) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <Start  data={data}/>
        {/* <Input data={data} /> */}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }
  }
}
