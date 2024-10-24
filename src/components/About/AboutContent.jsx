export default function AboutContent({children, title}) {
  return (
    <div className="about-content-card">
      <div className="container">
        <h5>{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  )
}