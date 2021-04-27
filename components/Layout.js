import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className="bg-gray-50 flex flex-col">
    <Head />
    <Navigation label="Train Name Generator" items={[{ label: "About", link: "/about" }]} />
    <div className="flex-1 min-h-screen">
      {children}
    </div>
    <Footer />
  </div >
)

export default Layout