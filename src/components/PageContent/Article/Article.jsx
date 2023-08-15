export const Article = ({ title, imgUrl, children }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>
        {children}
        {imgUrl && (
          <img
            src={imgUrl}
            alt=""
            width={200}
          />
        )}
      </div>
    </article>
  )
}
