export default function AboutContent({children, title}) {
  return (
    <div className="about-content-card">
      <div className="container">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}