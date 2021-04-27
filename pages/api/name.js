
export default (req, res) => {
  res.status(200).headers.json({ name: 'John Doe' })
}
