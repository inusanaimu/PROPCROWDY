import Layout from './layout/layout'

import NavBar from './components/navBar'
import Banner1 from './components/banner1'

function App() {
  return (
    <div className=' w-full'>
      <Layout>
        <NavBar />
        <Banner1 />
      </Layout>
    </div>
  )
}

export default App
