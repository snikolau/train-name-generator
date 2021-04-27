import generator from '../../src/generator'

export default (req, res) => {
 
  res.status(200).json({ name: generator() })
}
