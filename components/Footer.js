const Footer = ({ data }) => {
  return (
    <footer className="bg-gray-300 text-center flex-initial flex flex-col items-center py-5  md:mt-5">
      <div className="container mx-auto">
        <div className="flex flex-row py-2 justify-center">
          <a href="https://github.com/snikolau/train-name-generator" className="underline px-2" title="Train Name Generator GitHub">GitHub</a>
        </div>
        <div className="text-sm">
          2021 © SN
        </div>
      </div>
    </footer>
  )
}

export default Footer