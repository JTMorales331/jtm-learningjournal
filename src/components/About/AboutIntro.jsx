export default function AboutIntro({children, ...rest}) {
  return (
    <div className='container about-user'>
      <img className="user-icon" src={rest.userIcon} alt="icon image of current user"/>
      <div className="about-descriptions">
        <h1>Hi there! My name is {rest.name} and welcome to my learning journal.</h1>
        <p>{children}</p>
      </div>
    </div>
  )
}