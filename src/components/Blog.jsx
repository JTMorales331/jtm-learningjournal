export default function Blog({ children, ...rest}) {
  return (
    <div className="blog-card">
      <img src={rest.blogImg} alt={`picture of ${rest.blogImg}`} />

      <div className="blog-date">{rest.blogDate}</div>
      <h3>{rest.blogTitle}</h3>
      <p>{children}</p>
    </div>
  )
}