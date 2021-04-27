const Footer = ({ data }) => {
  return (
    <footer className="bg-yellow-50 text-center flex-initial flex flex-col items-center py-5  md:mt-5">
      <div className="container mx-auto">
        <div className="flex flex-row py-2 justify-center">
          <a href="https://www.facebook.com/OxanaKostromina/" className="underline px-2" title="Oxana Kostromina Facebook">Facebook</a>
          <a href="https://www.facebook.com/OxanaKostromina/" className="underline px-2" title="Oxana Kostromina Facebook">Instagram</a>
        </div>
        <div className="text-sm">
          Copyright © Oksana Kostomina
        </div>
      </div>
    </footer>
  )
}

export default Footer